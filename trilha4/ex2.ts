interface Documento{
    titulo:string
    conteudo:string
}

class Texto implements Documento{
    titulo:string
    conteudo:string

    constructor(titulo:string,conteudo:string){
        this.conteudo = conteudo
        this.titulo = titulo
    }
    
    exibir(): string{
            return `titulo [${this.titulo}], conteudo [${this.conteudo}]`
        }
}

const meuDocumento = new Texto("lal", "dos santos")

console.log(meuDocumento.exibir())
