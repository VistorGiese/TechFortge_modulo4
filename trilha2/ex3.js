var produto = /** @class */ (function () {
    function produto(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    produto.prototype.calcularestoque = function () {
        return this.preco * this.quantidade;
    };
    return produto;
}());
var produto1 = new produto('lal', 25, 5);
console.log(produto1.calcularestoque());
