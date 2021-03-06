function calcularMediaAritmetica(lista){
    // CON ARRAY Y CICLO FOR
//     let sumaLista = 0;
//     for (let i = 0; i < lista.length; i++){
//     sumaLista = sumaLista + lista[i];
// }

    // CON METODOS
const sumaLista = lista.reduce(
    function (valorAcumulado =0, nuevoElemento){
        return valorAcumulado + nuevoElemento
    }
);

const promedioLista = sumaLista / lista.length;
return promedioLista;
}



const lista1 = [
    100,200,500,4000000
];

const mitadLista1 = parseInt(lista1.length / 2);

// VERIFICAR SI LA CANTIDAD DE ELEMENTOS DE LA LISTA ES PAR
function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true; // ES PAR
    }
    else {
        return false; // ES IMPAR
    }
}

let mediana;

if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1]

    const promedioElementos1y2 = calcularMediaAritmetica([
        elemento1, 
        elemento2,
    ]);
    mediana = promedioElementos1y2;
}
else {
    mediana = lista1[mitadLista1];
}