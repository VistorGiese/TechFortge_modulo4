var ItemLoja = /** @class */ (function () {
    function ItemLoja(id, nome, preco) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }
    ItemLoja.prototype.toString = function () {
        return "Produto [ID: ".concat(this.id, ", Nome: ").concat(this.nome, ", Pre\u00E7o: R$").concat(this.preco.toFixed(2), "]");
    };
    return ItemLoja;
}());
var meuProduto = new ItemLoja(1, "lal", 20.30);
console.log(meuProduto.toString());
