// 'use strict'        //Qat'iy rejim
// (Alert) - bu ogohlantirish
// alert('Hello World')

// (Confirm) - bu tasdiqlash
// confirm('Yoshingiz 18 dan oshganmi?')

// (Promt) - bu so'rov
// alert(prompt("Ismingizni kiriting"))

// (Console) - bu consol yozuvi
// console.log(typeof (1))

// (Qiymat) - bu eng kichik ko'rinishdagi ma'lumot yoki ma'lumot bo'lagi

// (Variable) - bu o'zgaruvchi . O'zgaruvchi bu o'zida ma'lum bir qiymatni saqlovchi konteyner


// O'zgaruvchini (let) kalit so'zi yordamida e'lon qilinadi

// O'zgaruvchi nomi camelCase tarzida e'lon qilinadi

// O'zgaruvchi nomi quyidagi qoidalarga amal qilishi lozim
// O'zgaruvchi nomida bo'sh joy (space) bo'lishi mumkun emas
// O'zgaruvchi nomi harf, pastki chiziqcha (_) yoki dollar belgisi ($) bilan boshlanishi shart
// O'zgaruvchi nomi faqat harf , raqam , pastki chiziqcha yoki dollar belgisidan tashkil topishi shart
// Ma'lum bir zahiralangan nomlarni (reserved words) o'zgaruvchi nomiga berish taqiqlanadi 
// O'zgaruvchi nomi case-sensitive ya'ni katta-kichik harflarni turli xil deb qabul qiladi


// Ma'lumot Turlari (Data Types)
// Javascript dasturlash tilida qiymatlar 2 turga bo'linadi :(Primitive) va (Object)

// Primitive qiymat - to'g'ridan to'g'ri o'zgaruvchi murojat qiladigan manzilda joylashadi

// Number - Sonlarni o'zida saqlovchi qiymat 
// let num = 120;

// String - O'zida belgilar ketma ketligini saqlovchi ma'lumot turi
// let name = 'Behruz ', lastname = 'Khayitaliev';
// console.log(name + lastname)

// Boolean - mantiqiy ma'lumot turi bo'lib faqatgina true (rost) yoki false (yolg'on) qiymatini qabul qilishi mumkun bo'lgan ma'lumot turi
// let isUser = true;

// Undefined - hali aniqlanmagan tur
// let name;
// console.log(name)

// Null - bo'sh qiymatga ega bo'lgan ma'lumot turi
// let school = null;
// console.log(school)

// Symbol - yagonae (unique) va o'zgarmas qiymatga ega bo'luvchi ma'lumot turi 
// let id = Symbol('id');
// console.log(id)


// BigInt - katta sonlarni saqlashga mo'ljallangan ma'lumot turi;
// let number = BigInt(28123483223423);
// console.log(number)

// typeof - operatoridan foydalanib o'zgaruvchi saqlanayotgan ma'lumot turini aniqlash mumkun

// let - dasturimiz ishlashi davomida o'zgarishi mumkun bo'lgan o'zgaruvchini e'lon qilish uchun foydalaniladi 

// const - dasturimiz ishlashi davomida o'zgarmaydigan o'zgaruvchilarni e'lon qilish uchun foydalaniladi 
// const yordamida e'lon qilingan o'zgaruvchilar har doim boshlang'ich qiymatga ega bo'lishi shart

// var - ES6 ga qadar o'zgaruvchilarni e'lon qilish uchun ishlatiladigan kalit so'z . let bilan deyarli bir xil vazifani bajaradi

// let va var o'xshash bo'lishiga qaramasdan ularning ma'lum bir farqlari mavjud. var yordamida e'lon qilingan o'zgaruvchining ko'rinish ko'lami (scope) funksiya darajasida bo'lsa , let esa block darajada ko'rinadi

//Operatorlar

//Arifmetik Operatorlar

// + Ikki operandni qoshish
// let num1 = 10,num2 = 120;
//console.log(num1 + num2);

// - O'ng tomondagi operandni chap tarafdan ayirish
// let num1 = 10 , num2 = 5;
//console.log(num1 - num2);

// * Ikki operandni ko'paytirish
// let num1 = 5 , num2 = 10;
// console.log(num1 * num2);

// / Chap operandni o'ng operandga bo'lish
// let num1 = 10, num2 = 5;
// console.log(num1 / num2);

// % Modulus operatori . Ikki operanddan qoldiqni qaytarish
// let num1 = 10, num2 = 4;
// console.log(num1 % num2)

// ++ Kattalashtirish (increment) operatori.Operand qiymatini bittaga oshiradi
// let num = 5;
// console.log(num++); 5
// console.log(num)   6

// --- Kichiklashtirish (decrement) operatori.Operand qiymatini bittaga kamaytiradi
// let num = 4;
// console.log(num--) 4
// console.log(num) 3
// console.log(--num) 3


// Solishtirish (Comparision) operatorlar
//Javascript dasturlash tilida comparision operatorlardan foydalanib ikki operandlarni solishtirish imkoniyati mavjud.Bunday operatorlar true yoki false qiymatini qaytaradi.

// == Turni hisobga olmagan holda ikkita operandning tengligini solishtirish 
// variable1 == variable2

// === Turi va qiymati bo'yicha ikkita operandning tengligini solishtirish
// variable1 === variable2

// != Ikki operand notengligini (teng emasligini) tekshirish 
//variable1 != variable2

// > Chap tarafdagi qiymat o'ngdagi qiymatdan katta bo'lsa , true qiymatni qaytaradi , aks holda false qaytaradi
//variable1 > variable2

// < Chap tarafdagi qiymat o'ngdagi qiymatdan kichik bo'lsa , true qiymatini qaytaradi, aks holda , false qaytaradi

// >= Chap tarafdagi qiymat o'ngdagi qiymatdan katta yoki teng bo'lsa,true qiymatini qaytaradi ;aks holda , false qaytaradi.

// <= Chap tarafdagi qiymat o'ngdagi qiymatdan kichik yoki teng bo'lsa , true qiymatini qaytaradi; aks holda, false qaytaradi


//Tayinlash (assignment) operatorlar
//Javascript dagu tayinlash operatorlaridan foydalanib o'zgaruvchilarga qisqartma ko'rinishida yangi qiymatlar tayinlash imkoniyati mavjud

// = Chap operandga o'ng operand qiymatini belgilaydi
// variable1 = variable2

// += Chap va o'ng operand qiymatlarino umumlashtirib (qo'shib) va natijani chap operandga tayinlaydi
//  variable1 += variable2

// -= Chap operand qiymatidan o'ng operand  qiymatini olib tashlab va natijani chap operandga tayinlaydi 
// variable1 -= variable2

// *= Chap va o'ng operand qiymatlarini ko'paytirib va natijani chap operandga tayinlaydi 
//variable1 *= variable2

// /= Chap operand qiymatini o'ng operand qiymatiga bo'lib va natijani chap operandga tayinlaydi
// variable1 /= variable2

// %= Chap operand modulini o'ng operandga bo'linishini olib va natijada chap operandga tayinlaydi
// variable %= variable2

