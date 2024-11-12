var Loja = /** @class */ (function () {
    function Loja() {
        this.produtos = [];
    }
    Loja.prototype.adicionarProduto = function (produto) {
        this.produtos.push(produto);
    };
    Loja.prototype.buscarProdutoPorCodigo = function (codigo) {
        return this.produtos.find(function (produto) { return produto.codigo === codigo; });
    };
    return Loja;
}());
var minhaLoja = new Loja();
minhaLoja.adicionarProduto({ codigo: 1, nome: "lal" });
minhaLoja.adicionarProduto({ codigo: 2, nome: "lil" });
minhaLoja.adicionarProduto({ codigo: 3, nome: "dos santos" });
var produtoEncontrado = minhaLoja.buscarProdutoPorCodigo(2);
console.log(produtoEncontrado);
var produtoNaoEncontrado = minhaLoja.buscarProdutoPorCodigo(99);
console.log(produtoNaoEncontrado);
