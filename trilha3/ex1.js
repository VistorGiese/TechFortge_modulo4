var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var veiculo = /** @class */ (function () {
    function veiculo() {
    }
    veiculo.prototype.mover = function () {
        console.log('o veiculo esta se movendo');
    };
    return veiculo;
}());
var carro = /** @class */ (function (_super) {
    __extends(carro, _super);
    function carro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    carro.prototype.mover = function () {
        console.log('o carro esta se movendo');
    };
    return carro;
}(veiculo));
var bicicleta = /** @class */ (function (_super) {
    __extends(bicicleta, _super);
    function bicicleta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    bicicleta.prototype.mover = function () {
        console.log('o bicicleta esta se movendo');
    };
    return bicicleta;
}(veiculo));
var minhabick = new bicicleta();
minhabick.mover();
var meuCarro = new carro();
meuCarro.mover();
