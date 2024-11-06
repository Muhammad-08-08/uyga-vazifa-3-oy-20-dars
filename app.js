// ? 1-misol

// let meva = ["olma", "nok", "banana", "olma", "nok", "tarvuz"];
// function deleteMeva(){
//     for(let i = 0; i < meva.length; i++){
//         if(meva[i] == "olma"){
//             meva.splice(i, 1);
//         }
//     }
//     console.log(meva);
// }
// deleteMeva();

// ? 1-misol tugadi

// ? 2-misol

// let son = [33,82, 453, 1, 777, 18, 46];

// let katta = Math.max(...son);
// let kichik = Math.min(...son);

// console.log(`katta son "${katta}"  kichik son "${kichik}"`);

// ? 2-misol tugadi

// ? 3-misol

// let str = 'AAABBCCCA';
// let sanoq = '';
// let count = 1;
// for (let i = 0; i < str.length; i++) {
//   if (str[i] === str[i + 1]) {
//     count++;
//   } else {
//     sanoq += str[i] + (count > 1 ? count : '');
//     count = 1;
//   }
// }

// console.log(sanoq);

// ? 3-misol tugadi

// ? 4-misol

// let str = '#fozil#web#brain#';

// let arr = str.replace('#', '(').replace('#', ')').replace('#', '(').replace('#', ')');
// console.log(arr);

// ? 4-misol tugadi

// ? 5-misol

// let toliq = [1,2,3,4,5,6,7,];
// let str = "13458";
// let qolibKetganlar = toliq.filter((item) => !str.includes(item));
// console.log(qolibKetganlar);

// ? 5-misol tugadi

// ? 6-misol

// let son = '817435269';
// let katta = Math.max(...son);
// let kichik = Math.min(...son);
// console.log(`katta son "${katta}"  kichik son "${kichik}"`);

// ? 6-misol tugadi

// ? 7-misol

// let son = "1234523";

// let orta = Math.floor(son.length / 2);

// let birinchi = parseInt(son[orta]);
// let ikkinchi = parseInt(son[orta + 1]);

// let natija = (birinchi + ikkinchi) / 2;

// console.log(natija);

// ? 7-misol tugadi

// ? 8-misol

let soat1 = '10:15PM';
let soat2 = '8:30AM';
let soat3 = '12:00PM';

let hour1 = parseInt(soat1.split(':')[0]);
let minute1 = soat1.split(':')[1].slice(0, 2);
let period1 = soat1.slice(-2);

if (period1 === 'PM' && hour1 !== 12) {
  hour1 += 12;
}
if (period1 === 'AM' && hour1 === 12) {
  hour1 = 0;
}

console.log(`${hour1.toString().padStart(2, '0')}:${minute1}`);

// ? 8-misol tugadi

// ? 9-misol

// let str1 = 'web';
// let str2 = 'brain';
// [str1, str2] = [str2, str1];
// console.log(str2);