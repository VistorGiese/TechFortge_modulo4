class Livro{
    titulo: string;
    autor: string;
    paginas: number;
    lido:boolean;

    constructor(titulo:string, autor: string, paginas: number, lido:boolean = false){
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = lido;
    }

    livrolido(){
        this.lido = true;
    }
}

const meuLivro = new Livro("Dom Casmurro", "Machado de Assis", 256);
console.log(meuLivro.lido)
meuLivro.livrolido();
console.log(meuLivro.lido);

