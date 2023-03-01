
//Il software deve chiedere per 5 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.
//Esegui questo programma in due versioni, con il for e con il while.

//ciclo while
let sum = 0;
let count = 1;

while (count < 6) {

    const input = Number(prompt(`Inserisci un numero (${count})`));
    
    if(!isNaN(input)) {
        sum += input;
        count++;
    } else {Number(prompt(`Inserisci un numero (${count})`));}
}

alert(sum);

