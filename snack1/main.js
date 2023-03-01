
let sum = 0;
let count = 1;

while (count < 6) {

    const input = Number(prompt(`Inserisci un numero (${count})`));
    
    if(!isNaN(input)) {
        sum += input;
        count++;
    }
}

alert(sum);

