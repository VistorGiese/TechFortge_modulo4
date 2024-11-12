var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(titular, saldo) {
        this.saldo = saldo;
        this.titular = titular;
    }
    ContaBancaria.prototype.deposito = function (valor) {
        this.saldo += valor;
    };
    ContaBancaria.prototype.sacar = function (valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        }
        else {
            console.log("saldo insuficiente");
            return false;
        }
    };
    return ContaBancaria;
}());
var contaBancaria1 = new ContaBancaria('Vitor', 500);
contaBancaria1.deposito(200);
console.log("Saldo ap\u00F3s dep\u00F3sito: ".concat(contaBancaria1.saldo));
console.log("Saque realizado: ".concat(contaBancaria1.sacar(900)));
console.log("Saldo ap\u00F3s saque: ".concat(contaBancaria1.saldo));
