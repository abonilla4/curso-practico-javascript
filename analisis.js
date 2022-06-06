const salariosEmp = empresa.map(
    function (persona) {
        return persona.salary;
    }
);

const salariosEmpSorted = salariosEmp.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

function esPar (numero) {
    return (numero % 2 === 0);
}

function calcularMediaAritmetica(lista){
const sumaLista = lista.reduce(
    function (valorAcumulado =0, nuevoElemento){
        return valorAcumulado + nuevoElemento
    }
);

const promedioLista = sumaLista / lista.length;
return promedioLista;
}

// MEDIANA GENERAL
function medianaSalariosEmp (lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica ([personaMitad1, personaMitad2]);
        return mediana;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
};

const medianaGeneralEmp = medianaSalariosEmp(salariosEmpSorted);

// MEDIANA TOP 10%
const spliceStart = (salariosEmpSorted.length * 90) / 100;
const spliceCount = salariosEmpSorted.length - spliceStart;

const salariosEmpTop10 = salariosEmpSorted.splice(spliceStart, spliceCount);

const medianaTop10Emp = medianaSalariosEmp(salariosEmpTop10);

console.log(
    medianaGeneralEmp, 
    medianaTop10Emp,
);