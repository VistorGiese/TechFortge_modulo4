
interface LivroBiblioteca {
    titulo: string;
    autor: string;
    genero: string;
    disponivel: boolean;
}

class BibliotecaGestao {
    private livros: LivroBiblioteca[]; 

    constructor() {
        this.livros = []; 
    }

    adicionarLivro(livro: LivroBiblioteca): void {
        this.livros.push(livro);
    }

    filtrarPorGenero(genero: string): LivroBiblioteca[] {
        return this.livros.filter(livro => livro.genero.toLowerCase() === genero.toLowerCase());
    }

    buscarPorAutor(autor: string): LivroBiblioteca[] {
        return this.livros.filter(livro => livro.autor.toLowerCase() === autor.toLowerCase());
    }

    obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
        return this.livros
            .filter(livro => livro.disponivel)
            .sort((a, b) => a.titulo.localeCompare(b.titulo));
    }
}

const minhaBiblioteca = new BibliotecaGestao();

minhaBiblioteca.adicionarLivro({ titulo: "Jooj", autor: "da Silva", genero: "Aventura", disponivel: true });
minhaBiblioteca.adicionarLivro({ titulo: "Fuga de Lal", autor: "dos Anjos", genero: "Mistério", disponivel: true });
minhaBiblioteca.adicionarLivro({ titulo: "Corrida Malal", autor: "de Oliveira", genero: "Fantasia", disponivel: false });

const livrosAventura = minhaBiblioteca.filtrarPorGenero("Aventura");
console.log("Livros de Aventura:", livrosAventura);

const livrosDaSilva = minhaBiblioteca.buscarPorAutor("da Silva");
console.log("Livros de da Silva:", livrosDaSilva);

const livrosDisponiveisOrdenados = minhaBiblioteca.obterLivrosDisponiveisOrdenados();
console.log("Livros disponíveis ordenados:", livrosDisponiveisOrdenados);