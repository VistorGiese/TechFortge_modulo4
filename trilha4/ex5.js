var BibliotecaGestao = /** @class */ (function () {
    function BibliotecaGestao() {
        this.livros = [];
    }
    BibliotecaGestao.prototype.adicionarLivro = function (livro) {
        this.livros.push(livro);
    };
    BibliotecaGestao.prototype.filtrarPorGenero = function (genero) {
        return this.livros.filter(function (livro) { return livro.genero.toLowerCase() === genero.toLowerCase(); });
    };
    BibliotecaGestao.prototype.buscarPorAutor = function (autor) {
        return this.livros.filter(function (livro) { return livro.autor.toLowerCase() === autor.toLowerCase(); });
    };
    BibliotecaGestao.prototype.obterLivrosDisponiveisOrdenados = function () {
        return this.livros
            .filter(function (livro) { return livro.disponivel; })
            .sort(function (a, b) { return a.titulo.localeCompare(b.titulo); });
    };
    return BibliotecaGestao;
}());
var minhaBiblioteca = new BibliotecaGestao();
minhaBiblioteca.adicionarLivro({ titulo: "Jooj", autor: "da Silva", genero: "Aventura", disponivel: true });
minhaBiblioteca.adicionarLivro({ titulo: "Fuga de Lal", autor: "dos Anjos", genero: "Mistério", disponivel: true });
minhaBiblioteca.adicionarLivro({ titulo: "Corrida Malal", autor: "de Oliveira", genero: "Fantasia", disponivel: false });
var livrosAventura = minhaBiblioteca.filtrarPorGenero("Aventura");
console.log("Livros de Aventura:", livrosAventura);
var livrosDaSilva = minhaBiblioteca.buscarPorAutor("da Silva");
console.log("Livros de da Silva:", livrosDaSilva);
var livrosDisponiveisOrdenados = minhaBiblioteca.obterLivrosDisponiveisOrdenados();
console.log("Livros disponíveis ordenados:", livrosDisponiveisOrdenados);
