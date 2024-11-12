interface Livro {
    titulo: string;
    autor: string;
    disponivel: boolean;
}

class Biblioteca {
    private livros: Livro[]; 

    constructor() {
        this.livros = []; 
    }

    adicionarLivro(livro: Livro): void {
        this.livros.push(livro);
    }

    buscarLivrosDisponiveis(): Livro[] {
        return this.livros.filter(livro => livro.disponivel);
    }
}

const minhaBiblioteca = new Biblioteca();

minhaBiblioteca.adicionarLivro({ titulo: "lal", autor: "dos anjos", disponivel: true });
minhaBiblioteca.adicionarLivro({ titulo: "lil", autor: "da silva", disponivel: false });
minhaBiblioteca.adicionarLivro({ titulo: "laaaal", autor: "oliveira", disponivel: true });

const livrosDisponiveis = minhaBiblioteca.buscarLivrosDisponiveis();
console.log(livrosDisponiveis); 
