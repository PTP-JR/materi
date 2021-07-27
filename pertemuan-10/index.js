import { buahChina } from "./china.js";
console.log(buahChina);

// ADVANCED ES6
let firstName = "skilvul";
let lastName = "Impact Byte";
// let fullName = `${firstName} ${lastName}`;
let fullName = firstName + lastName;

console.log(fullName);

let number1 = 10;
let number2 = 20;
let add = number1 + number2;
// let add = `${number1}, ${number2}`;
console.log(add);

// object destructuring

let orang = {
  name: "Skilvul",
  age: 10,
  address: "kemang",
};

const { name, age } = orang;

console.log("name", name);
console.log(orang.name);

// array destructuring
let [siswa1, siswa2, siswa3, siswa4] = ["thoriq", "auzan", "lutfi", "valen"];

siswa1 = "sartika";
console.log("siswa1", siswa1);

// object literal
const tambahMurid = (nama, kota) => {
  const siswaBaru = { namaBaru: nama, kotaAsal: kota };
  console.log(siswaBaru);
};

tambahMurid("Skilvul", "Jakarta");

// spread operator
let angka = [1, 2, 3, 4, 5];
console.log(angka);
let angkaBaru = [...angka, 6, 7, 8];
console.log(angkaBaru);

// rest operator
const tambahAngka = (...number) => {
  return number.reduce((a, b) => a + b);
};
console.log(tambahAngka(1, 2, 3));
console.log(tambahAngka(1, 2, 3, 4, 5, 6, 7, 8));
console.log(tambahAngka(3));

// export dan import
export const buah = ["pisang", "mangga", "duren"];

// test regex untuk string matching
// artinya harus sama persis ketika dicocokan
let regex1 = /skilvul/;
console.log(regex1.test("Skilvul"));

// test regex menggunakan range tertentu
// jika mengandung salah satu yang ada di range sudah dianggap benar
let regex2 = /[1-5]/;
console.log(regex2.test(7));

// bisa menggunakan angka atau alfabet
let regex3 = /[a-c]/;
console.log(regex3.test("d"));

// .match mengembalikan nilai dalam bentuk array tetapi lebih banyak detail
// cara menggunakan .match dibalik dari .test
let regex4 = /l/gi;
let myName = "skiLvul";
// console.log("skilvul".match(regex4));
console.log(myName.match(regex4));

// alphanumeric
// [A-Za-z0-9_] = \w

//

let regex5 = /\w{6}\s\d\d\d\s\s/;
let myRegex = "Skilvul 123  ";
console.log(regex5.test(myRegex));

// asterix
let regex6 = /skil+vul/;
let myRegex2 = "skivul";
console.log(regex6.test(myRegex2));

// cek validasi username minimal 6 karakter harus ada huruf besar dan kecil
// let regex7 = /^\w{6,}$/;
// let myRegex3 = "skilvullll";
// console.log("tes username", regex7.test(myRegex3));

let regex = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}/;
let myRegexs = "bagaas";

console.log(regex.test(myRegexs));
