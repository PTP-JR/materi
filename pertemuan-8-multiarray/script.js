// JS DOM

console.log("document", document);

console.log(document.title);
console.log(document.body);

document.title = "Belajar coding di Skilvul";

// select id
console.log(document.getElementById("title"));
console.log(document.querySelector("#title"));
console.log(document.querySelectorAll("#title"));

// select class
console.log(document.getElementsByClassName("html"));
console.log(document.querySelector(".html"));

const html = document.querySelector(".html").innerHTML;
document.querySelector(".html").innerHTML = html.toUpperCase();

const title = document.querySelector("#title");
title.style.backgroundColor = "red";
title.style.color = "green";

// event listener
const alertFunc = () => {
  title.style.backgroundColor = "white";
};
title.addEventListener("mouseover", alertFunc);

const mouseOut = () => {
  title.style.backgroundColor = "red";
};
title.addEventListener("mouseout", mouseOut);

const handleClick = () => {
  // console.log("tes", document.getElementById("description").value);
  alert(document.getElementById("description").value);
};

// array multidimensional
// const inventory = [
//   ["kaos", 10],
//   ["topi", 15],
//   ["jaket", 1],
//   ["celana", 3],
//   ["celana panjang", 3],
// ];

// console.log(inventory);
// console.log(inventory[0][0]);
// console.log(inventory[2][1]);

// contoh array looping
// inventory.forEach((baris) => {
//   baris.forEach((column) => {
//     console.log("baris", baris);
//     console.log("column", column);
//   });
// });

// contoh array map
// array.map(()=> {
// inventory.map((dataInventory) => {
//   let terjual = 100 - dataInventory[1];
//   console.log(terjual);
//   dataInventory[2] = terjual;
// });
// console.table(inventory);

// })
// 1. Buat nama tim berupa array

// const totalTeam = ["ani", "budi", "charlie", "dodi"];

// 2. Bagi menjadi 2 team dan terdiri dari 1 leader
// const team1 = totalTeam.slice(0, 2);
// const team2 = totalTeam.slice(2, 4);

// const semuaTeam = [team1, team2];

// 3. console data array dan tampilkan menggunakan koma
// console.log("team", team1, team2);
// console.log("team2", semuaTeam);

// 4. tampilkan data ke dalam html
// document.getElementById("demo1").innerHTML = team1;
// document.getElementById("demo2").innerHTML = team2;

// conditional

// const username = "thori";
// if (username.length >= 6) {
//   console.log("username lebih dari 6");

// }
