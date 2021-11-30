/*jsnack 1
Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.
*/



function guestRnd(max) {
    let guest = firstNames[Math.floor(Math.random() * max)] + ' ' + lastNames[Math.floor(Math.random() * max)];
    return guest;
}


let firstNames = ['Jacopo', 'Greta', 'Luca', 'Barbara', 'Ivan', 'Mena', 'Leila', 'Sara', 'Riccardo', 'Tomas'];


let lastNames = ['Bianchi', 'Gregori', 'Ravaioli', 'Aspano', 'Sibio', 'Vetrano', 'Cantoni', 'Rossi', 'Spasio', 'Gambi'];


let guests = [];

//ciclo for
while (guests.length < 20) {

    let guest = guestRnd(9);

    if (!guests.includes(guest)) {
        guests.push(guest);
    }
}

//mostrare la lista degli ospiti nella console
console.log(guests);

//mostrare la lista degli invitati nel DOM
const ul = document.querySelector('ul');
for (let index = 0; index < guests.length; index++) {
    let li;
    li = `<li>${guests[index]}</li>`;
    ul.innerHTML += li;
}