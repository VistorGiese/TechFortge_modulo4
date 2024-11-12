var Biblioteca = /** @class */ (function () {
    function Biblioteca() {
        this.livros = [];
    }
    Biblioteca.prototype.adicionarLivro = function (livro) {
        this.livros.push(livro);
    };
    Biblioteca.prototype.buscarLivrosDisponiveis = function () {
        return this.livros.filter(function (livro) { return livro.disponivel; });
    };
    return Biblioteca;
}());
var minhaBiblioteca = new Biblioteca();
minhaBiblioteca.adicionarLivro({ titulo: "lal", autor: "dos anjos", disponivel: true });
minhaBiblioteca.adicionarLivro({ titulo: "lil", autor: "da silva", disponivel: false });
minhaBiblioteca.adicionarLivro({ titulo: "laaaal", autor: "oliveira", disponivel: true });
var livrosDisponiveis = minhaBiblioteca.buscarLivrosDisponiveis();
console.log(livrosDisponiveis);
