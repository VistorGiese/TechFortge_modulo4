class Temperatura {
    celsius:number;

    constructor(celsius:number){
        this.celsius = celsius
    }

    converterK(): number{
        return this.celsius + 273
    }

    converterF(): number {
     return this.celsius * 1.8 + 32;
    }

    
}

const temperatura1 = new Temperatura(26)
console.log(temperatura1.converterF());


const temperatura2 = new Temperatura(30);
console.log(temperatura2.converterK());
