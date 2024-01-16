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
