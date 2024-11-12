class produto{
    nome:string
    preco: number
    quantidade: number

    constructor(nome:string, preco:number, quantidade:number){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    
    calcularestoque(): number{
       return this.preco * this.quantidade
    }
}

const produto1 = new produto('lal', 25, 5)

console.log(produto1.calcularestoque());
