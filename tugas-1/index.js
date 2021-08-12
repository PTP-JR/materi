// get data countries indonesia

const dataIndonesia = fetch(
  "https://covid19.mathdro.id/api/countries/Indonesia"
)
  .then((response) => response.json())
  .then(
    (data) =>
      // menampilkan data dalam DOM
      (document.querySelector(".confirmed-indonesia").innerHTML =
        data.recovered.value)
  );

// untuk function searching
const searchCountry = () => {
  // untuk mengambil data dari input
  search = document.querySelector(".input-search").value;
  console.log("tes", search);

  document.querySelector(".display-country").innerHTML = search;

  // ambil data menggunakan template literal string
  fetch(`https://covid19.mathdro.id/api/countries/${search}`)
    .then((response) => response.json())
    .then(
      (data) =>
        // untuk menampilkan data sesuai hasil searching
        (document.querySelector(".display-countrt-recovered").innerHTML =
          data.recovered.value)
    );
};
