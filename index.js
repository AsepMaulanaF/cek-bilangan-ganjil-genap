function cek() {
  var angka = parseFloat(document.getElementById('angka').value);
  if ( angka % 2 === 0 ) {
    var hasil = document.getElementById('hasil')
    hasil.innerHTML = " " + angka + " adalah bilangan genap";
  } else if ( angka % 2 === 1 ) {
    var bhasil = document.getElementById('hasil')
    bhasil.innerHTML = " " + angka + " adalah bilangan ganjil";
    } else {
      var chasil = document.getElementById('hasil')
      chasil.innerHTML = "masukan angka";
    }
}