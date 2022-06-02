// CODIGO DEL CUADRADO

console.group("CUADRADOS");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro  del cuadrado es: " + perimetroCuadrado  + "cm");


const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area  del cuadrado es: " + areaCuadrado  + "cm^2");
console.groupEnd();

// CODIGO DEL TRIANGULO

console.group("TRIANGULOS");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log("Los lados del Triangulo miden: "
    + ladoTriangulo1 + "cm, "
    + ladoTriangulo2 + "cm, "
    + baseTriangulo + "cm"
);

const alturaTriangulo = 5.5;
console.log("La altura del Triangulo es: " + alturaTriangulo + "cm ");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del Triangulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del Triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

// CODIGO DEL CIRCULOS

console.group("CIRCULOS");
const radioCirculo = 4;
console.log("El radio del Circulo es: " + radioCirculo + "cm");

const diametroCirculo = radioCirculo * 2;
console.log("El diametro del Circulo es: " + diametroCirculo + "cm");

const PI = Math.PI;
console.log("PI es: " + PI);

const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del Circulo es: " + perimetroCirculo + "cm");

const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del Circulo es: " + areaCirculo + "cm^2");

console.groupEnd();
