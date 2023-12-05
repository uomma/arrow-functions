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
/* 
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
130     greta anselmo               84 


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
console.log(studentIdAndVote);

 */

/* const firstname = 'zio';
const lastname = 'paperone';
const money = 'troppi';
const newKey='loves pizza' */


const cosa = {
    firstname: 'zio',
    lastname: 'paperone',
    money: 'troppi',

    /*   [newKey]: true */

};

/* console.log(firstname)

const { firstname, money } = cosa;
console.log(firstname)
 */

//rest 

/* 
const sumOld = (num1, num2) => num1 + num2;
console.log(sumOld(2, 3)) */

/* function sum(...num) {
    let sumNumbers = 0;

    num.forEach((element) => {
        sumNumbers += element;
    })
    return sumNumbers
}
 

console.log(sum(1, 2)) */

/* 
function calcola(operation, ...num) {
    let result = 0;
    if (operation === 'sum') {


        num.forEach((element) => {
            result += element;
        });


    } else if (operation === 'sub') {
        num.forEach((element) => {
            result -= element
        });

    } else {
        return 'specifica una operazione'
    }

return result
}

console.log(calcola('sum', 1, 2, 3));
console.log(calcola('sub', 1, 2, 3)); */

/*
// per clonare un oggetto si utilizza operatore spread (...)
const ogg = { name: 'flavio', peso: 80 };
//const newOgg = ogg  /=> newOgg === ogg TURE
const newOgg = { ...ogg, etnia: 'caucasico(?)' } //=> newOgg === ogg FALSE

console.log(newOgg)

const studenti = [
    {
        nome: 'luca',
        eta: 30
    }, {
        nome: 'davide',
        eta: 32
    }
];

const newStudent = studenti.map((element) => {
    let cool = false;
    if (element.eta > 30) {

        cool = true;
    }
    return { ...element, cool };

});

console.log(newStudent);


//applico destrutturazione ad array

const igor = {
    nome: 'igor',
    eta: 44
};

const { nome } = igor; //=const nome = igor.nome


console.log(nome);


const lucky = [1, 2, 3, 4, 5, 6];

const num0 = numbers[0];
const num4 = numbers[3];

console.log(numbers[0]);
console.log(numbers[3]);

const [primo, secondo] = numbers;
console.log(primo);
console.log(secondo);
*/


/****************************************************************************************
snack 3 

creare array di oggetti in cui ogni oggetto descriverà una bici con nome e peso.
stampa in console la bici con peso minore utilizzando deconstructuring e template literal
*******************************************************************************************/


const bikes = [
    { nome: 'A', peso: 8 }, { nome: 'B', peso: 7 }, { nome: ' C', peso: 14 }, { nome: 'D', peso: 3 }, { nome: 'E', peso: 11 }, { nome: 'F', peso: 5 },
];


let firstBike = bikes[0];
for (let i = 1; i < bikes.length; i++) {
    const currentBike = bikes[i];

    if (currentBike.peso < firstBike.peso) {
        firstBike = currentBike;
    };
    console.log(currentBike);
};

const { nome, peso } = firstBike;
console.log(`la bici piu leggera è ${nome} e pesa ${peso}`);