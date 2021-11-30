/*jsnack 2
Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari*/


//creare un array 
let arrayNum = [];
let sum = 0;

//creare un ciclo for per generare i numeri
for (let i = 0; i < 10; i++) {
    arrayNum[i] = Math.floor(Math.random() * 101);
}
console.log(arrayNum);

//creare un ciclo for per la lunghezza dell'array 
for (let index = 0; index < arrayNum.length; index++) {

    if (index % 2 == 0) {
        console.log('posizione pari', arrayNum[index]);
    } else {
        console.log('posizione dispari', arrayNum[index]);
        sum += arrayNum[index];
    }
}
//mostrare somma nella console e nel DOM
console.log('la somma dei numeri in posizion dispari è: ' + sum);
document.writeln('La somma dei numeri in posizion dispari è: ' + sum);

