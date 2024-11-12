var Temperatura = /** @class */ (function () {
    function Temperatura(celsius) {
        this.celsius = celsius;
    }
    Temperatura.prototype.converterK = function () {
        return this.celsius + 273;
    };
    Temperatura.prototype.converterF = function () {
        return this.celsius * 1.8 + 32;
    };
    return Temperatura;
}());
var temperatura1 = new Temperatura(26);
console.log(temperatura1.converterF());
var temperatura2 = new Temperatura(30);
console.log(temperatura2.converterK());
