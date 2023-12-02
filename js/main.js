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

const teams = [

    { name: 'ravens', city: 'baltimore' },
    { name: '49ers', city: 'san francisco' },
    { name: 'raiders', city: 'las vegas' },
    { name: 'giants', city: 'new york' },
];

teams.forEach(element => {
    console.log(`${element.name} city is ${element.city}`)
});
