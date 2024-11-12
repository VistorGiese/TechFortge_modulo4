var Texto = /** @class */ (function () {
    function Texto(titulo, conteudo) {
        this.conteudo = conteudo;
        this.titulo = titulo;
    }
    Texto.prototype.exibir = function () {
        return "titulo [".concat(this.titulo, "], conteudo [").concat(this.conteudo, "]");
    };
    return Texto;
}());
var meuDocumento = new Texto("lal", "dos santos");
console.log(meuDocumento.exibir());
