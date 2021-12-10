let multiplicando = 1;
let produto;
while (multiplicando <= 10){
    produto = 7 * multiplicando
    console.log(` 7 * ${multiplicando} = ${produto}`)
    multiplicando++;
} 

// Atividade 

// While com encremeento
let contador = 1;
while (contador <= 10)
{
    console.log(`Valor = ${contador}`);
    contador++;
}

//While com decremente
console.clear();
let contador2 = 10;
while(contador2 >= 0)
{
    console.log(`Valor = ${contador2}`)
    contador2--;
}

// do while
console.clear();
let i = 0;
    text = ' ';

do {
    text += `O número é ${i}`;
    i++;
} while (i < 10);
console.log(text);

// for
console.clear();
for(let i = 0; i <= 10; i ++)
console.log(`Laço for número: ${i}`);

//Laços de repetição com array
console.clear();
const frutas = ['Maçã', 'Laranja', 'Melancia', 10, true];

console.log (frutas);

for(let j = 0; j < frutas.length; j++)
console.log(`A fruta é: ${frutas[j]}`);