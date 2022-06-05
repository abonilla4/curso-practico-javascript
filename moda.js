const lista1 = [1,2,3,1,2,3,4,2,2,2,1,];

const lista1Count = {};

lista1.map(
    function(elemento) {
        if (lista1Count[elemento]) {
            // lista1Count[elemento] = lista1Count[elemento] + 1;
            lista1Count[elemento] += 1; // OTRA FORMA DE HACER LA LINEA ANTERIOR
        } else {
            lista1Count[elemento] = 1;
        }
    }
);

//ENVIAMOS EL OBJETO QUE QUEREMOS CONVERTIR EN ARRAY. SE AREGA EL .SORT PARA BUSCAR EL ELEMENTO EN ESE NUEVO ARRAY
const lista1Array = Object.entries(lista1Count).sort(
    function(elementoA, elementoB) {
        return elementoA[1] - elementoB[1]; // EL [1] CORRESONDE AL VALOR DE LA POSICION EN EL NUEVO ARRAY. EL [0] SERIA EL NOMBRE DE ESE VALOR

        // OUPUT EN LA CONSOLA:
            // 0: Array(2)
            //     0: "4"
            //     1: 1
            //     length: 2
            // 1: (2) ['3', 2]
            // 2: (2) ['1', 3]
            // 3: (2) ['2', 5]
            // length: 4
    }
); 

const moda = lista1Array[lista1Array.length -1]; // CANTIDAD DE ELEMENTOS (length) ES 4, LA POSICION DEL UTIMO ELEMENTO ES 3, YA QUE SE EMPIZA DESDE CERO. ENTONCES 4-1 = 3

