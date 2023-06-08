// 1. Sukurti du kintamuosius. Jiems priskirti savo mylimo 
// aktoriaus vardą ir pavardę kaip stringus (Jonas Jonaitis). 
// Atspausdinti trumpesnį stringą.
console.clear();

const vards = `Jim`;
const vards2 = `Carrey`;
if (vards.length < vards2.length){
    console.log(vards);
    } else {
    console.log(vards2)
    }
	
// 2. Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, 
// gimimo metus ir šiuos metus (nebūtinai tikrus). 
// Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų 
// amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų 
// tokį sakinį :"Aš esu Vardenis Pavardenis. Man yra XX metai(ų)".

const reiksme = `Petras`;
const reiksme2 = `Vedeckas`;
const reiksme3 =  `2010`;
const reiksme4 =  `2023`;

const ages = (reiksme4 - reiksme3);

function intro1(name, age) {
    return `Aš esu ${reiksme} ${reiksme2}. Man yra ${ages} metai.`;
}

const intro = intro1('Petras', 'vedeckas');
console.log(intro);


/*function nam3(n1,n2,n3) {
    return `Aš esu ${n1} ${n2}. Man yra ${2023-n3}.`;
    }
    let pipl1 = nam3('Vaidas', "Vaidulis", 1980);
    console.log(pipl1);*/

	
// 3. Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus 
// vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam 
// priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės 
// kintamųjų raidžių. Jį atspausdinti.
	
const firstn = `Jim`;
const lastn = `Carrey`;
const str = `${firstn[0]}${firstn[1]}${firstn[2]}${lastn[3]}${lastn[4]}${lastn[5]}`;
console.log(str);
	
// 4. Sukurti kintamąjį su stringu: “Once upon a time in hollywood”. 
// Jame visas “o” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  
// Rezultatą atspausdinti.
	
const didis = 'Once upon a time in hollywood'
console.log(didis);
	
// 5. Sukurkite keturis kintamuosius kuriems sugeneruokite atsitiktines reikšmes 
// nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.

const value = 0;
const value1 = 1;
const value2 = 2;
const value3 = 0.9;
function (value4){

}

console.log(value4);
