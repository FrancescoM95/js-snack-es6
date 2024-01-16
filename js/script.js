console.log('JS OK');

//--------------------------------
//* SNACK 1
//--------------------------------

const tableName = 'Tavolo Vip';

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
    tableName: tableName,
    guestName: guest,
    seatNumber: ++i
}));

console.log(guestsList);


//--------------------------------
//* SNACK 2
//--------------------------------

const students = [
    { id: 213, name: 'Marco della Rovere', grades: 78 },
    { id: 110, name: 'Paola Cortellessa', grades: 96 },
    { id: 250, name: 'Andrea Mantegna', grades: 48 },
    { id: 145, name: 'Gaia Borromini', grades: 74 },
    { id: 196, name: 'Luigi Grimaldello', grades: 68 },
    { id: 102, name: 'Piero della Francesca', grades: 50 },
    { id: 120, name: 'Francesca da Polenta', grades: 84 }
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