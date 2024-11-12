var Livro = /** @class */ (function () {
    function Livro(titulo, autor, paginas, lido) {
        if (lido === void 0) { lido = false; }
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = lido;
    }
    Livro.prototype.livrolido = function () {
        this.lido = true;
    };
    return Livro;
}());
var meuLivro = new Livro("Dom Casmurro", "Machado de Assis", 256);
console.log(meuLivro.lido);
meuLivro.livrolido();
console.log(meuLivro.lido);
