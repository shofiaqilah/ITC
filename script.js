function imgSlider(anything){
    document.querySelector('.novel').src = anything;
}

//pake DOM
//mengganti slide bumi
function bumi() {
    document.querySelector('.title').innerHTML = "Bumi.";
    document.querySelector('.sinopsis').innerHTML = "Kisah petualangan 3 remaja SMA yang mempunyai kekuatan khusus: <b>Raib</b>, keturunan Klan Bulan; <b>Seli</b>, keturunan Klan Matahari; dan <b>Ali</b> di <b>Klan Bulan</b>. <br> <b>Raib</b> dengan kemampuan menghilang dan <b>Seli</b> dengan kemampuan menghasilkan listrik dari tangannya.";
    document.getElementById('text').style.backgroundColor = '#093313';
}

document.getElementById('bumi').addEventListener('click', function () {
    imgSlider('./img/1.jpg');
    bumi();
});

//mengganti slide bulan
function bulan() {
    document.querySelector('.title').innerHTML = "Bulan.";
    document.querySelector('.sinopsis').innerHTML = "Petualangan <b>Raib</b> dan dua sahabatnya berlanjut di klan lain, <b>Klan Matahari</b>. Bersama <b>Ily</b>, mereka memburu <i>Bunga Matahari Pertama</i> di <b>Kota Ilios</b> selama 10 hari.";
    document.getElementById('text').style.backgroundColor = '#111c3d';
}

document.getElementById('bulan').addEventListener('click', function () {
    imgSlider('./img/2.jpg');
    bulan();
});

//mengganti slide matahari
function matahari() {
    document.querySelector('.title').innerHTML = "Matahari.";
    document.querySelector('.sinopsis').innerHTML = "Petualangan tiga sekawan berlanjut ke klan paling jauh, <b>Klan Bintang</b>. Menggunakan kapsul perak buatan <b>Ali</b> --<i>ILY</i>, mereka menuju Klan Bintang yang berada jauh di bawah lapisan bumi. Sesampainya disana, mereka bertemu <b>Kaar</b> yang juga merupakan pemilik kekuatan. <br>Mereka dikejutkan oleh berita buruk, Pasak Bumi yang akan dirobohkan oleh <b>Dewan Kota Zaramaraz</b> dapat menghancurkan klan permukaan. Dengan segera, mereka kembali ke Klan Bulan untuk menemui para tetua klan.";
    document.getElementById('text').style.backgroundColor = 'brown';
}

document.getElementById('matahari').addEventListener('click', function () {
    imgSlider('./img/3.jpg');
    matahari();
});

//mengganti slide bintang
function bintang() {
    document.querySelector('.title').innerHTML = "Bintang.";
    document.querySelector('.sinopsis').innerHTML = "Berkat kecerdasan <b>Ali</b>, mereka dapat menemukan 6 pasak bumi dari ribuan pasak bumi yang ada. Dengan bantuan <b>Miss Selena</b> dan <b>Pasukan Bayangan</b> serta <b>Matahari</b>, mereka mencari satu-persatu letak pasak tersebut. <br>Tapi pada akhirnya, mereka dihadapkan oleh pilihan yang sulit: menyegel pasak dengan membebaskan <b>Si Tanpa Mahkota</b> atau membiarkan pasak bumi hancur.";
    document.getElementById('text').style.backgroundColor = '#381136';
}

document.getElementById('bintang').addEventListener('click', function () {
    imgSlider('./img/4.jpg');
    bintang();
});

//mengganti slide komet
function komet() {
    document.querySelector('.title').innerHTML = "Komet.";
    document.querySelector('.sinopsis').innerHTML = "<b>Si Tanpa Mahkota</b> kabur. Tanpa pengawasan para tetua, <b>Raib, Seli, </b> dan <b>Ali</b> menyusul <b>Si Tanpa Mahkota</b> yang lebih dulu memasuki portal ke <b>Klan Komet</b>. Pengejaran mereka lakukan dengan mengarungi lautan dengan tujuh pulau di <b>Kepulauan Komet</b> dengan bantuan seorang nelayan bernama <b>Max</b><br>Namun, hal yang tidak terduga terjadi di akhir perjalanan mereka. <br><b>Si Tanpa Mahkota</b> berhasil lolos.";
    document.getElementById('text').style.backgroundColor = '#9c3606';
}

document.getElementById('komet').addEventListener('click', function () {
    imgSlider('./img/5.jpg');
    komet();
});

//mengganti slide kometminor
function kometminor() {
    document.querySelector('.title').innerHTML = "Komet Minor.";
    document.querySelector('.sinopsis').innerHTML = "Petualangan mereka dilanjutkan ke sebuah klan yang selalu melakukan teleportasi. <b>Klan Komet Minor</b>. Akankah <b>Si Tanpa Mahkota</b> berhasil mengumpulkan 3 potongan tombak pustaka dan menguasai Dunia Pararel?";
    document.getElementById('text').style.backgroundColor ='#9c068a';
}

document.getElementById('kometminor').addEventListener('click', function () {
    imgSlider('./img/6.jpg');
    kometminor();
});