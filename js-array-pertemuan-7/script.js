const buah = ["anggur", "jeruk", "pepaya", "mangga"]
console.log(buah.length);

buah.splice(1, 0, "naga")
// console.log(buah);
console.log(buah.length);

// console.log(buah[0]);
// console.log(buah[1]);
// console.log(buah[2]);

// for (let i = 0; i < buah.length; i++) {
//   console.log(buah[i]);
// }

// for (i in buah) {
//   console.log(buah[i]);
// }

// buah.forEach((item, index) => {
//   console.log(index, item);
// })

// let buah2 = buah.map((item) => {
//   return item
// })
// console.log(buah2);

let angka = [1,2,3,4,5]

let angka2 =  angka.map((item) => {
  return item * 5
})

console.log(angka2);




