class Animal {
    private energia: number;

    constructor(energia: number) {
        this.energia = energia;
    }

    protected aumentarEnergia(quantidade: number): void {
        this.energia += quantidade;
    }

    protected reduzirEnergia(quantidade: number): void {
        this.energia -= quantidade;
    }

  
    comer(comida:number): void {
        console.log("Animal está comendo.");
    }

    public statusEnergia(): void {
        console.log(`Nível de energia: ${this.energia}`);
    }
}

 class Leao extends Animal{
    constructor(energia:number){
        super(energia);
    }

    comer(comida: number){
        this.reduzirEnergia(20)
        this.aumentarEnergia(comida)
    }
 }

 class Pombo extends Animal{
    constructor(energia:number){
        super(energia);
    }

    public comer(comida:number): void{
        this.aumentarEnergia(comida)
    }
}
 

 function alimentarAnimal(animal: Animal): void {
    animal.comer(12);
    animal.statusEnergia();
}


 const meupombo = new Pombo(20)
 meupombo.comer(50)
 meupombo.statusEnergia()
