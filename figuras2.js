// CALCULOS CON FUNCIONES
// CODIGO DEL CUADRADO

function perimetroCuadrado(lado) {
    return  lado * 4;
} 

function areaCuadrado(lado){
    return lado * lado;
} 

// CODIGO DEL TRIANGULO

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}


// CODIGO DEL CIRCULOS

function diametroCirculo(radio){
    return radio * 2;
}

const PI = Math.PI;
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI;
}

// INTERACTUANDO CON HTML

// CUADRADO
function calcPerimetroCuadrado(){
    const input = document.getElementById("input-cuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
};

function calcAreaCuadrado(){
    const input = document.getElementById("input-cuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
};

// TRIANGULO
function calcPerimetroTriangulo(){
    const lado1 = document.getElementById("lado1-triangulo");
    const lado2 = document.getElementById("lado2-triangulo");
    const base = document.getElementById("base-triangulo");
    const value_lado1 = lado1.value;
    const value_lado2 = lado2.value;
    const value_base = base.value;

    const perimetro = perimetroTriangulo(value_lado1,value_lado2,value_base);
    alert(perimetro);
};

function calcAreaTriangulo(){
    const base = document.getElementById("base-triangulo");
    const altura = document.getElementById("altura-triangulo");
    const value_base = base.value;
    const value_altura = altura.value;
    
    const area = areaTriangulo(value_base,value_altura);
    alert(area);
};

// CIRCULO
function calcPerimetroCirculo(){
    const input = document.getElementById("input-circulo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
};

function calcAreaCirculo(){
    const input = document.getElementById("input-circulo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
};