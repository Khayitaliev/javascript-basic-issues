'use strict' //qat'iy rejim
//Butun sonlarga oid masalalar

//Integer 1 . Uzunlik L santimetrda berilgan. Undagi to'liq metrlar sonini aniqlovchi programma tuzilsin 1m = 100cm
// let l = 10;
// let parseMetre = l / 100;
// console.log(`${l}sm ${parseMetre} metr ga teng`)

//Integer 2 . Og'irlik M kilogramda berilgan. Undagi to'liq tonnalar sonini aniqlovchi programma tuzilsin. 1t = 1000kg
// let weight = 100234;
// let parseWeight = weight / 1000;
// console.log(`${weight}kg ${parseWeight} tonna ga teng`)

//Integer 3 . Faylning hajmi baytlarda berilgan. Bo'lib buttunni olish operatsiyasidan foydalanib fayl hajmini to'liq kilobaytlarda  ifodalovchi programma tuzilsin. 1kb = 1024 bayt 
// let file = 4488;
// let parseToKb = Math.round(file / 1024);
// console.log(`${file} bayt  ${parseToKb}kb ga teng`)

//Integer 4 . A va B (A > B) musbat sonlari berilgan. A kesmada B kesmani necga marta joylashtirish mumkinligini aniqlovchi programma tuzilsin

let age = +prompt("Yoshingizni kiriting");
if (age < 18) {
    alert("Yoshingiz 18 dan kichkina")
} else {
    alert("Dasturga hush kelibsiz")
}