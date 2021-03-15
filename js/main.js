//###################################################### 
// DYNAMICS

$(function() {
// ********************* doc ready start ***


// * ---------- * JS SNACK 1 * ---------- *
// Creare un array di oggetti: 
// Ogni oggetto descriverà una bici da corsa 
// con le seguenti proprietà: nome e peso. 
// Stampare a schermo la bici con peso minore 
// utilizzando destructuring e template literal

var bici = [
	{'nome':'bici1', 'peso':getRandomInt(1,10)},
	{'nome':'bici2', 'peso':getRandomInt(1,10)},
	{'nome':'bici3', 'peso':getRandomInt(1,10)},
	{'nome':'bici4', 'peso':getRandomInt(1,10)},
	{'nome':'bici5', 'peso':getRandomInt(1,10)}
];

console.log(`
==============================================
JS SNACK 1

`);

var pesoBici = [];
bici.forEach((el) => {
	pesoBici.push(el.peso);
	console.log(`la ${el.nome} pesa ${el.peso}`);
});

var minPeso = Math.min(...pesoBici);
var pos = pesoBici.indexOf(minPeso); 
var minBici = bici[pos].nome;

console.log(`
la bici più leggera e la ${minBici} che pesa ${minPeso}

`);



// * ---------- * JS SNACK 2 * ---------- *
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: 
// nome, punti fatti, falli subiti. 
// Nome sarà l’unica proprietà da compilare, 
// le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: 
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array 
// i cui elementi contengono solo 
// nomi e falli subiti e stampiamo tutto in console.

var squadre = [ 
	{nome:'squadra1', puntiFatti:0, falliSubiti:0},
	{nome:'squadra2', puntiFatti:0, falliSubiti:0},
	{nome:'squadra3', puntiFatti:0, falliSubiti:0},
	{nome:'squadra4', puntiFatti:0, falliSubiti:0},
	{nome:'squadra5', puntiFatti:0, falliSubiti:0}
];

console.log(`
==============================================
JS SNACK 2

tabella squadre

NOME     PF FS
`);

// step 1
squadre.forEach((el) => {
	[ el.puntiFatti, el.falliSubiti ] = [ getRandomInt(0,99), getRandomInt(0,99) ];
	console.log(`${el.nome} ${el.puntiFatti} ${el.falliSubiti}`);
});

console.log(`
tabella ridotta

NOME     FS
`);

// step 2
var squadre2 = [];
squadre.forEach((el) => {
	var { nome, falliSubiti } = el;	
	squadre2.push({nome,falliSubiti});
	console.log(`${nome} ${falliSubiti}`);
});

console.log(`
==============================================
`);



// *********************** doc ready end ***
});

//###################################################### 
// FUNCTIONS


function getRandomInt(_a, _b) {
	return Math.floor(Math.random()*(_b-_a+1))+_a;
}

