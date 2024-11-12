class Pagamento {
    processar(): void {
        throw new Error("Método 'processar' não implementado.");
    }
}

class PagamentoCartao extends Pagamento{
    numeroCartao: string

    constructor(numeroCartao: string) {
        super();
        this.numeroCartao = numeroCartao;
    }

    private ValidarCartao(): boolean{
        return this.numeroCartao.length === 16;
    }

     processar(): void {
        if (this.ValidarCartao()) {
            console.log("Pagamento com cartão processado com sucesso.");
        } else {
            console.log("Número do cartão inválido.");
        }
     }
}

class PagamentoBoleto extends Pagamento {
    processar(): void {
        const codigoBoleto = this.gerarCodigoBoleto();
        console.log(`Pagamento com boleto gerado. Código do boleto: ${codigoBoleto}`);
    }
    private gerarCodigoBoleto(): string {        
        const gerarGrupo = () => Math.floor(1000 + Math.random() * 9000).toString(); 
        return `${gerarGrupo()}.${gerarGrupo()}.${gerarGrupo()}.${gerarGrupo()}`;
    }
}

function processarPagamento(pagamento: Pagamento) {
    pagamento.processar();
}


const pagamentoCartao = new PagamentoCartao("1234567812345678");
processarPagamento(pagamentoCartao); 

const pagamentoBoleto = new PagamentoBoleto();
processarPagamento(pagamentoBoleto);
