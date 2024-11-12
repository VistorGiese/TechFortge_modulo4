abstract class FiguraGeometrica {
    abstract calcularArea(): number;
}

class Quadrado extends FiguraGeometrica {
    constructor(private lado: number) {
        super();
    }

    calcularArea(): number {
        return this.lado * this.lado;
    }
}

const quadrado = new Quadrado(5);
const areaQuadrado = quadrado.calcularArea();
console.log(`A área do quadrado é: ${areaQuadrado}`);

class Circulo extends FiguraGeometrica {
    constructor(private raio: number) {
        super();
    }

    calcularArea(): number {
        return (this.raio * this.raio) * 3.14;
    }
}

const circulo = new Circulo(3);
const areaCirculo = circulo.calcularArea();
console.log(`A área do círculo é: ${areaCirculo}`);

class Triangulo extends FiguraGeometrica {
    constructor(private base: number, private altura: number) {
        super();
    }

    calcularArea(): number {
        return (this.base * this.altura) / 2;
    }
}

const triangulo = new Triangulo(8, 4);
const areaTriangulo = triangulo.calcularArea();
console.log(`A área do triângulo é: ${areaTriangulo}`);
