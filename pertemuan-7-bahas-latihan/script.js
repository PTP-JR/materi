// data array tweet
let tweets = ["hello world", "tess tweet", "ini tweet"];

// ambil elemen utk wadah tweet
let tweetContainer = document.getElementById("tweet");

// utk nampilin
for (let tweet of tweets) {
  console.log(tweet);
  tweetContainer.innerHTML += `<p>${tweet}</p>`;
}

// ambil elemen text input dan button
let txtInput = document.getElementById("text")
let btnKirim = document.getElementById("btn-kirim")

// fungsionalitas utk tombol kirim
btnKirim.onclick = kirim
function kirim() {
  let text = txtInput.value
  console.log(text);
}