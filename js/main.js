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

/* const minorenni = people.filter((element) => {
    if (element.eta < 18) {
        return true;
    }
    return false
});


console.log(minorenni)

const maggiorenni = people.filter((element) => {
    if (element.eta > 18) {
        return true
    } return false
});

console.log(maggiorenni); */


/* const newPeople = people.map((element) => {
    if (element.eta > 18) {
        return { ...element, canDrive: true }
    } return { ...element, canDrive: false }

});
console.log(newPeople);


const newNumbers = numbers.map((element) => {
    return element * 2;

})

console.log(numbers);
console.log(newNumbers); */

/* snack 1 
 lista invitati "Tavolo VIP" in ordine di posto : ['BP', 'JD', 'LG', 'CR', 'GR', 'CF', 'F', 'GC', 'AC', 'M'];
 stampa in console la lista in cui ogni ospite è un oggetto che ha nome del tavolo, nome ospite e posto occcupato.
 */

const tavoloVip = [
    {
        nome: 'BP',
        tavolo: 'tavolo VIP',
        posto: '1'
    },
    {
        nome: 'JD', tavolo: 'tavolo VIP',
        posto: '2'
    },
    {
        nome: 'LG', tavolo: 'tavolo VIP',
        posto: '3'
    },
    {
        nome: 'CR', tavolo: 'tavolo VIP',
        posto: '4'
    },
    {
        nome: 'GR', tavolo: 'tavolo VIP',
        posto: '5'
    },
    {
        nome: 'CF', tavolo: 'tavolo VIP',
        posto: '6'
    },
    {
        nome: 'F', tavolo: 'tavolo VIP',
        posto: '7'
    },
    {
        nome: 'GC', tavolo: 'tavolo VIP',
        posto: '8'
    },
    {
        nome: 'AC', tavolo: 'tavolo VIP',
        posto: '9'
    },
    {
        nome: 'M', tavolo: 'tavolo VIP',
        posto: '10'
    }];



const newTable = tavoloVip.forEach((element) => {
    console.log(`al  ${element.tavolo} c'è seduto ${element.nome} al posto ${element.posto} `)
});


/*  elenco studenti identificati da _id, _nome, _sommaTotale.
 1) crea lista con il loro nome maiuscolo
 2) crea lista con studenti con voto superiore a 70
 3) crea lista con studenti con voto superiore a 70  e id superiore di 120

elenco sutdenti be like:
id      name                      voto
213     marco della rovere          78
110     paola cortellesa            96
250     andrea montagna             48
145     gaia borrini                74
104     luigi damino                68
188     piero alloti                50
130     greta anselmo               84 */


const studenti = [
    {
        id: 213,
        name: 'marco della rovere ',
        voto: 78,
    },
    {
        id: 110,
        name: ' paola cortellesa    ',
        voto: 96
    },
    {
        id: 250,
        name: 'andrea montagna  ',
        voto: 48
    },
    {
        id: 145,
        name: ' gaia borrini     ',
        voto: 74
    },
    {
        id: 104,
        name: ' luigi damino ',
        voto: 68
    },
    {
        id: 188,
        name: 'piero alloti   ',
        voto: 50
    },
    {
        id: 130,
        name: 'greta anselmo ',
        voto: 84
    },
];


const studentiMaiuscoli = studenti.forEach((element)=>{
    console.log(element.name.toUpperCase())
})

const overSeventy= studenti.filter((element)=>{
    if(element.voto > 70){
        return true
    } return false
}); console.log(overSeventy);


const studentIdAndVote = studenti.filter((element)=>{
    if(element.voto > 70 &&element.id > 120){
        return true
    } return false
}) ;
console.log(studentIdAndVote)