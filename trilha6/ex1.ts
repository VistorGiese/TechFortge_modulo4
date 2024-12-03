/* antes */ 

class Pedido {
    itens: Array<{ item: string, preco: number }>;
    precoTotal: number;
    statusPagamento: string;
    statusEnvio: string;
  
    constructor() {
      this.itens = [];
      this.precoTotal = 0;
      this.statusPagamento = "Pendente";
      this.statusEnvio = "Pendente";
    }
  
    adicionarItem(item: string, preco: number): void {
      this.itens.push({ item, preco });
      this.precoTotal += preco;
    }
  
    processarPagamento(): void {
      if (this.precoTotal > 0) {
        this.statusPagamento = "Pago";
      }
    }
  
    atualizarStatusEnvio(): void {
      if (this.statusPagamento === "Pago") {
        this.statusEnvio = "Enviado";
      }
    }
  }
  
  /* Refatorado */


class Carrinho {
    itens: Array<{ item: string, preco: number }>;
    precoTotal: number;
  
    constructor() {
      this.itens = [];
      this.precoTotal = 0;
    }
  
    adicionarItem(item: string, preco: number): void {
      this.itens.push({ item, preco });
      this.precoTotal += preco;
    }
  
    obterPrecoTotal(): number {
      return this.precoTotal;
    }
  }
  
  // Classe para gerenciar o pagamento
  class Pagamento {
    statusPagamento: string;
  
    constructor() {
      this.statusPagamento = "Pendente";
    }
  
    processarPagamento(precoTotal: number): void {
      if (precoTotal > 0) {
        this.statusPagamento = "Pago";
      }
    }
  
    obterStatusPagamento(): string {
      return this.statusPagamento;
    }
  }
  

  class Envio {
    statusEnvio: string;
  
    constructor() {
      this.statusEnvio = "Pendente";
    }
  
    atualizarStatusEnvio(statusPagamento: string): void {
      if (statusPagamento === "Pago") {
        this.statusEnvio = "Enviado";
      }
    }
  
    obterStatusEnvio(): string {
      return this.statusEnvio;
    }
  }
  

  class Pedido {
    carrinho: Carrinho;
    pagamento: Pagamento;
    envio: Envio;
  
    constructor() {
      this.carrinho = new Carrinho();
      this.pagamento = new Pagamento();
      this.envio = new Envio();
    }
  
    adicionarItem(item: string, preco: number): void {
      this.carrinho.adicionarItem(item, preco);
    }
  
    processarPagamento(): void {
      this.pagamento.processarPagamento(this.carrinho.obterPrecoTotal());
    }
  
    atualizarStatusEnvio(): void {
      this.envio.atualizarStatusEnvio(this.pagamento.obterStatusPagamento());
    }
  
    obterStatusPedido(): string {
      return `Pagamento: ${this.pagamento.obterStatusPagamento()}, Envio: ${this.envio.obterStatusEnvio()}`;
    }
  }
  