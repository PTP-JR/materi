// ========= syncronnous ============
// console.log("perintah 1")
// console.log("perintah 2")
// console.log("perintah 3")
// console.log("perintah 4")

// ========= CALLBACK ============
// console.log("perintah 1")
// console.log("perintah 2")

// setTimeout(() => {
//   console.log("perintah 3")
// },  );

// console.log("perintah 4")

// ========= PROMISE ============
let perintahAsynchronous = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => {
      resolve("perintah 3")
    }, 3000);
  } else {
    setTimeout(() => {
      reject("perintah di reject")      
    }, 3000);
  }
})

// console.log("perintah 1")
// console.log("perintah 2")

// perintahAsynchronous
// .then(result => {
//   console.log(result)
// })
// .catch(err => {
//   console.log(err)
// })

// console.log("perintah 4")


// ========= Async Await ============
async function myAsync() {
  let result = await perintahAsynchronous
  console.log(result)
}

// console.log("perintah 1")
// console.log("perintah 2")
// myAsync()
// console.log("perintah 4")


// ========= GET DATA WITH FETCH ============
let digimonContainer = document.getElementById("list-digimon")

let API = `https://digimon-api.vercel.app/api/digimon`

// ====PROMISE
// fetch(API, {method: "GET"})
// .then(result => result.json())
// .then(result => {
//   console.log(result)

//   for (let i = 0; i < 10; i++){
//     digimonContainer.innerHTML += 
//     `<div id="digimon">
//       <img src=${result[i].img} />
//       <span>${result[i].name}</span>
//     </div>`
//   }
// })
// .catch(err => {
//   console.log(err)
// })

// ====ASYNC AWAIT
async function getDigimon(API) {
  let result = await fetch(API, {method: "GET"})
  result = await result.json()

  for (let i = 0; i < 10; i++){
    digimonContainer.innerHTML += 
    `<div id="digimon">
      <img src=${result[i].img} />
      <span>${result[i].name}</span>
    </div>`
  }
}

getDigimon(API)