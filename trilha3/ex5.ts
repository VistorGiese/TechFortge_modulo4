abstract class Funcionario{
    protected nome: string
    protected salario: number

    constructor(nome:string, salario:number){
        this.nome = nome;
        this.salario = salario;
    }

    abstract calcularBonus(): number;

    calcularSalarioComBonus(): number {
        return this.salario + this.calcularBonus();
    }
    getNome(): string {
        return this.nome;
    }
}

class Gerente extends Funcionario{
    constructor(nome:string, salario: number){
        super(nome, salario) 
    }
    calcularBonus(): number{
        return this.salario * 0.10
    }
}

class Operario extends Funcionario{
    constructor(nome:string, salario: number){
        super(nome, salario) 
    }
    calcularBonus(): number{
        return this.salario * 0.05
    }
}

function calcularSalariosComBonus(funcionarios: Funcionario[]): void {
    funcionarios.forEach(funcionario => {
        const salarioComBonus = funcionario.calcularSalarioComBonus();
        console.log(`Funcionário: ${funcionario.getNome()}, Salário com Bônus: R$ ${salarioComBonus.toFixed(2)}`);
    });
}



const funcionarios: Funcionario[] = [
    new Gerente('lal', 5000),
    new Operario('da silva', 3000),
    new Gerente('dos anjos', 5000),
    new Operario('lal de lal', 3000)
];

calcularSalariosComBonus(funcionarios);