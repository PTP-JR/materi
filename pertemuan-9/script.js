// ============= object =================
let kucing = {
  nama: "tom",
  warna: "biru dongker",
  kaki: 2,
  berburu: function () {
    console.log("tom berburu jerry");
  },
  tidur: () => {
    console.log("tom sedang tidur");
  },
};

kucing.nama = "TOM";

// looping object
// for (let x in kucing){
//   console.log(kucing[x]);
// }

// array of object
let people = [
  { 
    
    nama: "Auzan", 
    profile: "http://foto.jpg", 
    alamat: {
      jl: "Jl 123",
      kecamatan: "tebet"
    },
    skilPoint: 5000,
    skill: ["HTMl", "CSS", "JS"],

  },
  { 
    nama: "Luthfi", 
    profile: "http://foto.jpg", 
    skilPoint: 5000,
    skill: ["HTMl", "CSS", "JS"],
    alamat: {
      jl: "Jl 123",
      kota: "Bandung"
    }
  },
  { 
    nama: "Thoriq", 
    profile: "http://foto.jpg", 
    skilPoint: 5000,
    skill: ["HTMl", "CSS", "JS"],
    alamat: {
      jl: "Jl 123",
      kota: "Depok"
    }
  },
];

console.log(people);
console.log(people[0].skill[1]);
console.log(people[0].alamat.kota);
console.log(people[2].alamat.kota);


// ============= regex =================
// membuat regex
// /hello/ //literaal
// new RegExp("hello") //obj instance

// quantifier
// + min harus ada 1
// * boleh tidak ada
// /au+zan/.test("azan") // false
// /au*zan/.test("azan") // true

// alternation menggunakan |
// /^impact byte$|^skilvul$/.test("skilvul")

// pola email
// /[a-z]+@[a-z]+.[a-z]+/.test("auzan@gmail.com")
