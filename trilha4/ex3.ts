interface ProdutoLoja {
    codigo: number;
    nome: string;
}

class Loja {
    private produtos: ProdutoLoja[]; 

    constructor() {
        this.produtos = []; 
    }

    adicionarProduto(produto: ProdutoLoja): void {
        this.produtos.push(produto);
    }

    buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
        return this.produtos.find(produto => produto.codigo === codigo);
    }
}

const minhaLoja = new Loja();

minhaLoja.adicionarProduto({ codigo: 1, nome: "lal" });
minhaLoja.adicionarProduto({ codigo: 2, nome: "lil" });
minhaLoja.adicionarProduto({ codigo: 3, nome: "dos santos" });


const produtoEncontrado = minhaLoja.buscarProdutoPorCodigo(2);
console.log(produtoEncontrado); 

const produtoNaoEncontrado = minhaLoja.buscarProdutoPorCodigo(99);
console.log(produtoNaoEncontrado); 
