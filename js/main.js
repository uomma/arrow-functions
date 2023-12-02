'use strict'
/* 

function nomeFunzione() {
    console.log(this)
}

nomeFunzione();
document.getElementById('my-button').addEventListener('click', function () {
    console.log(this)

})

document.getElementById('my-button').addEventListener('click', () => {
    console.log(this)

})
const obj = {
    nome: 'odell',
    cognome: 'backham',
    fullName() {
        return this.nome + ' ' + this.cognome;
    }
}

console.log(obj);


console.log(obj.fullName());



const obj2= {
    prova:'booo',
    prova1: {
        nome: 'odell',
        cognome: 'backham',
        fullName() {
            return this.nome + ' ' + this.cognome;
        },

        testName: () =>{
            console.log(this)
        }
    }
}
console.log(obj2);


obj2.prova1.fullName();
obj2.prova1.testName  */
/* 
const teams = [

    { name: 'ravens', city: 'baltimore' },
    { name: '49ers', city: 'san francisco' },
    { name: 'raiders', city: 'las vegas' },
    { name: 'giants', city: 'new york' },
];

teams.forEach(element => {
    console.log(`${element.name} city is ${element.city}`)
}); */



const numbers = [1, 2, 3, 4, 5, 6];
/* 
//for
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i])
    }
};
//froeach
numbers.forEach(element => {
    if (element % 2 === 0) {
        console.log(element)
    }
}); */

/* //filter
const nuovoArray = numbers.filter((element) => {
    console.log(element);

    if (element % 2 === 0) {
        return true;
    }
    return false;
});

console.log(nuovoArray); */


const people = [
    { nome: 'rex', eta: '50' },
    { nome: 'laica', eta: '12' },
    { nome: 'floyd', eta: '5' },
    { nome: 'fox', eta: '3' },

];

const minorenni = people.filter((element) => {
    if (element.eta < 18) {
        return true;
    }
    return false
})


console.log(minorenni)

const maggiorenni = people.filter((element) => {
    if (element.eta > 18) {
        return true
    } return false
});

console.log(maggiorenni);
