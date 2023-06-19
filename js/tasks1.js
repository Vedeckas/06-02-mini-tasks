// Veiksmai su kintamaisiais

// 1. Susumuoti visus skaičiaus tipo kintamuosius
// a) Rezultatą išvesti į console

const a1 = 45;
const a2 = 55;
const a3 = 50;
const a4 = a1 + a2 + a3;
console.log(a4);

// 2. Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų 
// sudarytas tarpas
// a) Rezultatą išvesti į console

const a = 'tete';
const b = 'mama';
console.log(a + ' ' +b);

// 3. Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai,
//  pagal pateiktą logiką
// a) 1-2+3-4+5,
// b) Rezultatą išvesti į console

const skaiciai = [1, 2, 3, 4, 5];
const s1 = suma(skaiciai);
function suma(masyvas) {
    return masyvas[0] - masyvas[1] + masyvas[2] - masyvas[3] + masyvas[4]
    
}
console.log(s1);

// console.log(a5);

// 4. Sujungti sąrašų vertes, kurių tipas yra tekstai, 
// nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas

const aa = ['aaa', 'bbb', 'ccc', 'ddd'];
const bb = sarasas(aa);
console.log(bb);

console.log('-------------------');

function sarasas(masyvas){
    return `${aa[3]}, ${aa[2]}, ${aa[1]}, ${aa[0]}`;
}

const ee =`${aa[3]}, ${aa[2]}, ${aa[1]}, ${aa[0]}`;
console.log(ee);

