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
var FiguraGeometrica = /** @class */ (function () {
    function FiguraGeometrica() {
    }
    return FiguraGeometrica;
}());
var Quadrado = /** @class */ (function (_super) {
    __extends(Quadrado, _super);
    function Quadrado(lado) {
        var _this = _super.call(this) || this;
        _this.lado = lado;
        return _this;
    }
    Quadrado.prototype.calcularArea = function () {
        return this.lado * this.lado;
    };
    return Quadrado;
}(FiguraGeometrica));
var quadrado = new Quadrado(5);
var areaQuadrado = quadrado.calcularArea();
console.log("A \u00E1rea do quadrado \u00E9: ".concat(areaQuadrado));
var Circulo = /** @class */ (function (_super) {
    __extends(Circulo, _super);
    function Circulo(raio) {
        var _this = _super.call(this) || this;
        _this.raio = raio;
        return _this;
    }
    Circulo.prototype.calcularArea = function () {
        return (this.raio * this.raio) * 3.14;
    };
    return Circulo;
}(FiguraGeometrica));
var circulo = new Circulo(3);
var areaCirculo = circulo.calcularArea();
console.log("A \u00E1rea do c\u00EDrculo \u00E9: ".concat(areaCirculo));
var Triangulo = /** @class */ (function (_super) {
    __extends(Triangulo, _super);
    function Triangulo(base, altura) {
        var _this = _super.call(this) || this;
        _this.base = base;
        _this.altura = altura;
        return _this;
    }
    Triangulo.prototype.calcularArea = function () {
        return (this.base * this.altura) / 2;
    };
    return Triangulo;
}(FiguraGeometrica));
var triangulo = new Triangulo(8, 4);
var areaTriangulo = triangulo.calcularArea();
console.log("A \u00E1rea do tri\u00E2ngulo \u00E9: ".concat(areaTriangulo));
