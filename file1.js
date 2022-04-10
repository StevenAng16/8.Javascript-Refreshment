var a = 5;
let b = "kampus merdeka";
const nama = "Budi";
let terdaftar = true;
let lengkap_arr = [a, b, nama, terdaftar];

let asal = "indonesia";
function perkenalan() {
    let asal = "indonesia";
    return console.log(
        "perkenalan nama saya " +
         nama +
         " nomor urut " +
         a + 
         " sekarang sedang mengikuti " +
         b +
         " berasal dari " +
         asal
    );
}

//no 1b
if (terdaftar === true) {
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}

//no 1a
console.log("array = "+lengkap_arr[0]);
//Budi
a = b;
//nama = b;

//no 1d
//console.log("asal diakses = " + asal);
console.log("array = " + nama);
console.log("a adalah = " + a);
console.log("b adalah = " + b);

//no 1c
perkenalan();
console.log();