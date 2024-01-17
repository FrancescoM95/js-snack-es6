console.log('JS OK');

//--------------------------------
//* SNACK 1
//--------------------------------


const table = 'Tavolo Vip';

const guests = [
    'Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'Fedez',
    'George Clooney',
    'Amal Clooney',
    'Maneskin'
];

const guestsList = guests.map((guest, i) => ({
    table: table,
    name: guest,
    seatNumber: i + 1
}));

console.log(guestsList);


//--------------------------------
//* SNACK 2
//--------------------------------


const students = [
    {
        id: 213,
        name: 'Marco della Rovere',
        grades: 78
    },
    {
        id: 110,
        name: 'Paola Cortellessa',
        grades: 96
    },
    {
        id: 250,
        name: 'Andrea Mantegna',
        grades: 48
    },
    {
        id: 145,
        name: 'Gaia Borromini',
        grades: 74
    },
    {
        id: 196,
        name: 'Luigi Grimaldello',
        grades: 68
    },
    {
        id: 102,
        name: 'Piero della Francesca',
        grades: 50
    },
    {
        id: 120,
        name: 'Francesca da Polenta',
        grades: 84
    }
];

// lista studenti che hanno un totale di voti superiore a 70
const studentsOver = students.filter(student => student.grades > 70);
console.log(studentsOver);


// lista studenti che hanno un totale di voti superiore a 70 e id superiore a 120
const studentsOverId = students.filter(student => student.grades > 70 && student.id > 120);
console.log(studentsOverId);


// lista studenti con nomi in maiuscolo
const studentsUpperCase = students.map(student => student.name.toUpperCase());
console.log(studentsUpperCase);


// targhe con il nome degli studenti in pagina
const ul = document.querySelector('ul');

studentsUpperCase.forEach(student => {
    const li = document.createElement('li');
    li.innerText = student;
    ul.appendChild(li);
})


//--------------------------------
//* SNACK 3
//--------------------------------

// Array di oggetti contenente bici da corsa con le seguenti proprietà: nome e peso.
const bikes = [
    {
        name: 'Bianchi',
        weight: 7.5
    },
    {
        name: 'Atala',
        weight: 8.2
    },
    {
        name: 'Olmo',
        weight: 7.8
    },
    {
        name: 'Casati',
        weight: 7.3
    },
    {
        name: 'Colnago',
        weight: 7.0
    },
    {
        name: 'Bottecchia',
        weight: 7.9
    },
    {
        name: 'Cinelli',
        weight: 7.4
    },
    {
        name: 'Pistidda',
        weight: 8.5
    },
];

// Iniziallizziamo la bici più leggera come la prima dell'array
let lightestBike = bikes[0];

// Giriamo sull'array per trovare quella con peso minore
bikes.forEach(bike => {
    if (bike.weight < lightestBike.weight) {
        lightestBike = bike;
    }
});

// Stampiamo il risultato in console
const { name, weight } = lightestBike;
console.log(`La bici più leggera è la ${name} con un peso di ${weight} kg.`);


//--------------------------------
//* SNACK 4
//--------------------------------


// Funzione per generare numeri random da 1 a 100
const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;


// Array di oggetti contenente le 20 squadre di calcio della Serie A
const serieAteams = [
    {
        name: 'Juventus',
        points: getRandomNumber(),
        fouls: getRandomNumber()
    },
    {
        name: 'Inter',
        points: getRandomNumber(),
        fouls: getRandomNumber()
    },
    {
        name: 'Milan',
        points: getRandomNumber(),
        fouls: getRandomNumber()
    },
    {
        name: 'Napoli',
        points: getRandomNumber(),
        fouls: getRandomNumber()
    },
    {
        name: 'Roma',
        points: getRandomNumber(),
        fouls: getRandomNumber()
    },
    {
        name: 'Atalanta',
        points: getRandomNumber(),
        fouls: getRandomNumber()
    },
    {
        name: 'Lazio',
        points: getRandomNumber(),
        fouls: getRandomNumber()
    },
    {
        name: 'Sassuolo',
        points: getRandomNumber(),
        fouls: getRandomNumber()
    },
    {
        name: 'Verona',
        points: getRandomNumber(),
        fouls: getRandomNumber()
    },
    {
        name: 'Frosinone',
        points: getRandomNumber(),
        fouls: getRandomNumber()
    },
    {
        name: 'Genoa',
        points: getRandomNumber(),
        fouls: getRandomNumber()
    },
    {
        name: 'Fiorentina',
        points: getRandomNumber(),
        fouls: getRandomNumber()
    },
    {
        name: 'Bologna',
        points: getRandomNumber(),
        fouls: getRandomNumber()
    },
    {
        name: 'Udinese',
        points: getRandomNumber(),
        fouls: getRandomNumber()
    },
    {
        name: 'Cagliari',
        points: getRandomNumber(),
        fouls: getRandomNumber()
    },
    {
        name: 'Monza',
        points: getRandomNumber(),
        fouls: getRandomNumber()
    },
    {
        name: 'Torino',
        points: getRandomNumber(),
        fouls: getRandomNumber()
    },
    {
        name: 'Empoli',
        points: getRandomNumber(),
        fouls: getRandomNumber()
    },
    {
        name: 'Lecce',
        points: getRandomNumber(),
        fouls: getRandomNumber()
    },
    {
        name: 'Salernitana',
        points: getRandomNumber(),
        fouls: getRandomNumber()
    },
];


// Creiamo un nuovo array contenente solo nome della squadra e falli subiti
const teams = serieAteams.map(({ name, fouls }) => ({ name, fouls }));


// Stampiamo in console
console.log(serieAteams);
console.log(teams);
