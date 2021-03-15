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

const fabbricaDiBici = function(_N) {
	let arr = []; 
	for (let i=1; i<=_N; i++)
		arr.push({
			'nome': 'bici'+i, 
			'peso': getRandomInt(1,10)
		});
	return arr;
};

const bici = fabbricaDiBici(getRandomInt(3,9));

console.log(`
==============================================
JS SNACK 1

Elenco bici

NOME   PESO
`);

const pesoBici = [];
bici.forEach((el) => {
	let { peso } = el;
	pesoBici.push(peso);
});
// for (let {nome: n, peso: p} of bici) { // ciclo for in !!
// 	pesoBici.push(p);
// }
mostraArrayDiOggettiInConsole(bici,'nome','peso');

const minPeso = Math.min(...pesoBici);
const minBici = bici[pesoBici.indexOf(minPeso)].nome;

console.log(`
La bici più leggera è la ${minBici} che pesa ${minPeso}.
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

var iscrizioneAlCampionato = function(_N) {
	var arr = [];
	for (let i=1; i<=_N; i++)
		arr.push({
			'nome'        : 'squadra'+i,
			'puntiFatti'  : 0,
			'falliSubiti' : 0
		});
	return arr;
};

var squadre = iscrizioneAlCampionato(getRandomInt(3,9));

console.log(`
==============================================
JS SNACK 2

Tabella squadre

NOME      PF  FS
`);

// assegnazione random puntiFatti, falliSubiti
squadre.forEach((el) => {
	[ el.puntiFatti, el.falliSubiti ] = [ getRandomInt(0,99), getRandomInt(0,99) ];
});
mostraArrayDiOggettiInConsole(squadre,'nome','puntiFatti','falliSubiti');

console.log(`
Tabella ridotta

NOME      FS
`);

// duplicazione array di oggetti senza puntiFatti
var squadre2 = [];
squadre.forEach((el) => {
	var { nome, falliSubiti } = el;	
	squadre2.push({nome,falliSubiti});
});
mostraArrayDiOggettiInConsole(squadre2,'nome','falliSubiti');

console.log(`
==============================================
`);



// *********************** doc ready end ***
});

//###################################################### 
// FUNCTIONS


function mostraArrayDiOggettiInConsole(_objArr, ..._campi) {
	var	arr = [..._campi];
	_objArr.forEach((el) => {
		var msg = '';
		for (let i=0; i<arr.length; i++) msg += `${el[arr[i]]}  `;
		console.log(msg);
	});
}

function getRandomInt(_a, _b) {
	return Math.floor(Math.random()*(_b-_a+1))+_a;
}

