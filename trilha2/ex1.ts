class ContaBancaria{
    titular: string;
    saldo: number;

    constructor(titular:string,saldo:number){
        this.saldo = saldo;
        this.titular = titular;
    }

    deposito(valor:number): void{
         this.saldo += valor;
    }

    sacar(valor:number): boolean{
        if(valor <= this.saldo ){
             this.saldo -= valor;
             return true;
        }else{
            console.log("saldo insuficiente")
            return false;
        } 
    }
}

const contaBancaria1 = new ContaBancaria('Vitor', 500);
contaBancaria1.deposito(200);
console.log(`Saldo após depósito: ${contaBancaria1.saldo}`); 
console.log(`Saque realizado: ${contaBancaria1.sacar(900)}`); 
console.log(`Saldo após saque: ${contaBancaria1.saldo}`); 
