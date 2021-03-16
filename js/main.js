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
mostraArrayDiOggettiInConsole(bici,'nome','peso');

let biciLeggera = bici[0];
bici.forEach((unaBici, index) => {
	if (unaBici.peso <= biciLeggera.peso) biciLeggera = bici[index];
});

const {nome,peso} = biciLeggera;
console.log(`
La bici più leggera è la ${nome} che pesa ${peso}.
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

const iscrizioneAlCampionato = function(_N) {
	let arr = [];
	for (let i=1; i<=_N; i++)
		arr.push({
			'nome'        : 'squadra'+i,
			'puntiFatti'  : 0,
			'falliSubiti' : 0
		});
	return arr;
};

const squadre = iscrizioneAlCampionato(getRandomInt(3,9));

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
const squadre2 = [];
squadre.forEach((el) => {
	let { nome, falliSubiti } = el;	
	squadre2.push({nome,falliSubiti});
});
mostraArrayDiOggettiInConsole(squadre2,'nome','falliSubiti');

console.log(`
==============================================
`);



// * ---------- * JS SNACK 3 * ---------- *
// Scrivere una funzione che accetti tre argomenti, 
// un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori 
// che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter

// random integer in [min,max]
const rndInt = (min,max) => Math.floor(Math.random()*(max-min+1))+min;

// random array generator
const getArr = (minLen,maxLen,rangeEls) => {
	let a = [], l = rndInt(minLen,maxLen);
	while (a.length < l) a.push(rndInt(1,rangeEls));
	return a;
};

// original array, random index sector, filtered array
const arr  = getArr(5,10,999);
const b    = rndInt(0,arr.length-1);
const a    = rndInt(0,b);
const arr2 = getArraySector(arr,a,b);

// display html elements
const hook1 = document.getElementById('hook1');
const hook2 = document.getElementById('hook2');
const hook3 = document.getElementById('hook3');

// index sector info
hook2.innerHTML += `<span class="hl1">settore di indici:</span> <span class="hl2">[${a},${b}]</span>`;

// original array table
hook1.innerHTML += `<tr><td colspan="2" class="hl3">Array originale</td></tr>`;
arr.forEach((el,ind) => {
	let tdClass = (ind >= a && ind <= b) ? ' class="hl2"': '';
	hook1.innerHTML += `<tr><td class="hl1">indice #${ind}</td><td ${tdClass}>${el}</td></tr>`;
});

// filtered array table
hook3.innerHTML += `<tr><td colspan="2" class="hl3">Array filtrato</td></tr>`;
arr2.forEach((el,ind) => {
	hook3.innerHTML += `<tr><td class="hl1">indice #${ind}</td><td class="hl2">${el}</td></tr>`;
});







// * ------- * JS SNACK LABELS * -------- *
showJsSnackLabels();


// *********************** doc ready end ***
});

//###################################################### 
// FUNCTIONS



// * ---------- * JS SNACK 1,2 FUNCTIONS * ---------- *
function mostraArrayDiOggettiInConsole(_objArr, ..._campi) {
	_objArr.forEach((el) => {
		let msg = '';
		for (let i=0; i<_campi.length; i++) msg += `${el[_campi[i]]}  `;
		console.log(msg);
	});
}



// * ---------- * JS SNACK 3 FUNCTIONS * ---------- *
function getArraySector(arr,minInd,maxInd) {
	// consistency check
	if (minInd > maxInd)     minInd = maxInd;
	if (maxInd > arr.length) maxInd = arr.length;
	// filtering
	let arr2 = arr.filter((el,ind) => {
		if (ind >= minInd && ind <= maxInd) return el;
	});
	return arr2;
}



// * ---------- * UNIVERSAL FUNCTIONS * ---------- *

function getRandomInt(_a, _b) {
	return Math.floor(Math.random()*(_b-_a+1))+_a;
}



// * ------- * JS SNACK LABELS * -------- *
function showJsSnackLabels() {
	$('.card').append('<div class="label"></div>');
	$('.label').each(function(n) {
		$(this).html('<span>Js Snack '+(n+1)+'</span>');
	});	
}
