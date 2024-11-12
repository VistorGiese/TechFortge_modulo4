interface Produto{
    id: number
    nome: string
    preco: number
}

class ItemLoja implements Produto{
    id: number
    nome: string
    preco: number


    constructor(id: number, nome: string, preco: number){
        this.id = id
        this.nome = nome
        this.preco = preco
    }

    toString(): string {
        return `Produto [ID: ${this.id}, Nome: ${this.nome}, Preço: R$${this.preco.toFixed(2)}]`;
    }

}

const meuProduto = new ItemLoja(1, "lal", 20.30)

console.log(meuProduto.toString())
