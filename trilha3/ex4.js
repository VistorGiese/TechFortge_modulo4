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
var Animal = /** @class */ (function () {
    function Animal(energia) {
        this.energia = energia;
    }
    Animal.prototype.aumentarEnergia = function (quantidade) {
        this.energia += quantidade;
    };
    Animal.prototype.reduzirEnergia = function (quantidade) {
        this.energia -= quantidade;
    };
    Animal.prototype.comer = function (comida) {
        console.log("Animal está comendo.");
    };
    Animal.prototype.statusEnergia = function () {
        console.log("N\u00EDvel de energia: ".concat(this.energia));
    };
    return Animal;
}());
var Leao = /** @class */ (function (_super) {
    __extends(Leao, _super);
    function Leao(energia) {
        return _super.call(this, energia) || this;
    }
    Leao.prototype.comer = function (comida) {
        this.reduzirEnergia(20);
        this.aumentarEnergia(comida);
    };
    return Leao;
}(Animal));
var Pombo = /** @class */ (function (_super) {
    __extends(Pombo, _super);
    function Pombo(energia) {
        return _super.call(this, energia) || this;
    }
    Pombo.prototype.comer = function (comida) {
        this.aumentarEnergia(comida);
    };
    return Pombo;
}(Animal));
function alimentarAnimal(animal) {
    animal.comer(12);
    animal.statusEnergia();
}
var meupombo = new Pombo(20);
meupombo.comer(50);
meupombo.statusEnergia();
