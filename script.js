// ===============================
// LOGIN & SYSTEM
// ===============================

function login(){

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;


    let akun = [
        {
            username:"admin",
            password:"12345",
            level:"Admin"
        },
        {
            username:"guru",
            password:"12345",
            level:"Guru"
        },
        {
            username:"ketua",
            password:"12345",
            level:"Ketua Kelas"
        }
    ];


    let user = akun.find(
        a =>
        a.username === username &&
        a.password === password
    );


    if(user){

        localStorage.setItem(
            "statusLogin",
            "aktif"
        );


        localStorage.setItem(
            "levelUser",
            user.level
        );


        localStorage.setItem(
            "namaUser",
            user.username
        );


        window.location.href="index.html";

    }
    else{

        document.getElementById("pesan").innerHTML =
        "Username atau password salah!";

    }

}





function cekLogin(){

    let status =
    localStorage.getItem("statusLogin");


    if(status !== "aktif"){

        window.location.href="login.html";

    }

}





function logout(){

    localStorage.removeItem("statusLogin");
    localStorage.removeItem("levelUser");
    localStorage.removeItem("namaUser");


    window.location.href="login.html";

}





// ===============================
// DATA SISWA
// ===============================


function tambahSiswa(){

    let nama =
    document.getElementById("namaSiswa").value;


    let nis =
    document.getElementById("nisSiswa").value;


    let jk =
    document.getElementById("jkSiswa").value;



    if(nama=="" || nis==""){

        alert("Data siswa belum lengkap!");
        return;

    }



    let data =
    JSON.parse(
        localStorage.getItem("siswa")
    ) || [];



    data.push({

        nama:nama,
        nis:nis,
        jk:jk

    });



    localStorage.setItem(
        "siswa",
        JSON.stringify(data)
    );



    document.getElementById("namaSiswa").value="";
    document.getElementById("nisSiswa").value="";


    tampilSiswa();

}






function tampilSiswa(){

    let tabel =
    document.getElementById("dataSiswa");


    if(!tabel) return;



    let data =
    JSON.parse(
        localStorage.getItem("siswa")
    ) || [];



    tabel.innerHTML="";



    data.forEach((s,i)=>{


        tabel.innerHTML += `

        <tr>

        <td>${i+1}</td>

        <td>${s.nama}</td>

        <td>${s.nis}</td>

        <td>${s.jk}</td>


        <td>
        <button onclick="hapusSiswa(${i})">
        Hapus
        </button>
        </td>


        </tr>

        `;


    });


}







function hapusSiswa(index){


    let data =
    JSON.parse(
        localStorage.getItem("siswa")
    ) || [];



    data.splice(index,1);



    localStorage.setItem(
        "siswa",
        JSON.stringify(data)
    );



    tampilSiswa();

}







// ===============================
// DATA GURU
// ===============================



function tambahGuru(){


    let nama =
    document.getElementById("namaGuru").value;


    let mapel =
    document.getElementById("mapelGuru").value;


    let kontak =
    document.getElementById("kontakGuru").value;



    if(nama=="" || mapel==""){

        alert("Data guru belum lengkap!");
        return;

    }



    let data =
    JSON.parse(
        localStorage.getItem("guru")
    ) || [];



    data.push({

        nama:nama,
        mapel:mapel,
        kontak:kontak

    });



    localStorage.setItem(
        "guru",
        JSON.stringify(data)
    );



    document.getElementById("namaGuru").value="";
    document.getElementById("mapelGuru").value="";
    document.getElementById("kontakGuru").value="";


    tampilGuru();


}







function tampilGuru(){


    let tabel =
    document.getElementById("dataGuru");


    if(!tabel) return;



    let data =
    JSON.parse(
        localStorage.getItem("guru")
    ) || [];



    tabel.innerHTML="";



    data.forEach((g,i)=>{


        tabel.innerHTML += `

        <tr>

        <td>${i+1}</td>

        <td>${g.nama}</td>

        <td>${g.mapel}</td>

        <td>${g.kontak}</td>


        <td>
        <button onclick="hapusGuru(${i})">
        Hapus
        </button>
        </td>


        </tr>

        `;


    });



}





function hapusGuru(index){


    let data =
    JSON.parse(
        localStorage.getItem("guru")
    ) || [];



    data.splice(index,1);



    localStorage.setItem(
        "guru",
        JSON.stringify(data)
    );



    tampilGuru();


}






// ===============================
// JADWAL
// ===============================


function tambahJadwal(){


    let hari =
    document.getElementById("hari").value;


    let jam =
    document.getElementById("jam").value;


    let mapel =
    document.getElementById("mapel").value;


    let guru =
    document.getElementById("guru").value;



    if(hari=="" || jam=="" || mapel==""){

        alert("Jadwal belum lengkap!");
        return;

    }



    let data =
    JSON.parse(
        localStorage.getItem("jadwal")
    ) || [];



    data.push({

        hari:hari,
        jam:jam,
        mapel:mapel,
        guru:guru

    });



    localStorage.setItem(
        "jadwal",
        JSON.stringify(data)
    );



    tampilJadwal();


}







function tampilJadwal(){


let tempat =
document.getElementById("dataJadwal");


if(!tempat)
return;



let data =

JSON.parse(

localStorage.getItem("jadwal")

)

|| [];





let hariList = [

"SENIN",

"SELASA",

"RABU",

"KAMIS",

"JUMAT"

];





tempat.innerHTML="";





hariList.forEach(

(hari)=>{



let isi = data.filter(

(j)=>

j.hari.toUpperCase()==hari

);





tempat.innerHTML += `


<div class="card">


<h2>
📅 ${hari}
</h2>



<table>


<tr>

<th>
No
</th>


<th>
Jam
</th>


<th>
Mapel
</th>


<th>
Guru
</th>


<th>
Aksi
</th>


</tr>





${
isi.map((j,index)=>`


<tr>


<td>
${index+1}
</td>


<td>
${j.jam}
</td>


<td>
${j.mapel}
</td>


<td>
${j.guru}
</td>



<td>


<button onclick="hapusJadwal(${data.indexOf(j)})">

Hapus

</button>


</td>



</tr>


`).join("")

}




</table>



</div>



`;



}



);



}



function hapusJadwal(index){


    let data =
    JSON.parse(
        localStorage.getItem("jadwal")
    ) || [];



    data.splice(index,1);



    localStorage.setItem(
        "jadwal",
        JSON.stringify(data)
    );


    tampilJadwal();


}
// ===============================
// PIKET
// ===============================


function tambahPiket(){


let nama =
document.getElementById("namaPiket").value;


let hari =
document.getElementById("hariPiket").value;


let tugas =
document.getElementById("tugasPiket").value;



if(nama=="" || hari==""){

alert("Data piket belum lengkap!");

return;

}




let data =

JSON.parse(

localStorage.getItem("piket")

)
|| [];




data.push({

nama:nama,

hari:hari,

tugas:tugas

});




localStorage.setItem(

"piket",

JSON.stringify(data)

);




document.getElementById("namaPiket").value="";

document.getElementById("hariPiket").value="";

document.getElementById("tugasPiket").value="";



tampilPiket();



}


function tampilPiket(){


let tempat =
document.getElementById("dataPiket");


if(!tempat)
return;



let data =

JSON.parse(

localStorage.getItem("piket")

)

|| [];




let hariList = [

"SENIN",

"SELASA",

"RABU",

"KAMIS",

"JUMAT"

];




tempat.innerHTML="";





hariList.forEach(

(hari)=>{



let isi = data.filter(

(p)=>p.hari.toUpperCase()==hari

);





tempat.innerHTML += `


<div class="card">


<h2>
📅 ${hari}
</h2>



<table>


<tr>

<th>
No
</th>

<th>
Nama
</th>

<th>
Tugas
</th>

<th>
Aksi
</th>

</tr>



${
isi.map((p,index)=>`


<tr>


<td>
${index+1}
</td>


<td>
${p.nama}
</td>


<td>
${p.tugas}
</td>


<td>

<button onclick="hapusPiket(${data.indexOf(p)})">

Hapus

</button>


</td>


</tr>


`).join("")

}



</table>



</div>



`;



}



);



}




function hapusPiket(index){


    let data =
    JSON.parse(
        localStorage.getItem("piket")
    ) || [];



    data.splice(index,1);



    localStorage.setItem(
        "piket",
        JSON.stringify(data)
    );



    tampilPiket();

}





// ===============================
// ABSEN
// ===============================


function tambahAbsen(){


    let nama =
    document.getElementById("namaAbsen").value;


    let status =
    document.getElementById("statusAbsen").value;


    let catatan =
    document.getElementById("catatanAbsen").value;



    if(nama==""){

        alert("Masukkan nama siswa!");
        return;

    }



    let tanggal =
    new Date().toLocaleDateString("id-ID",{

        weekday:"long",
        day:"numeric",
        month:"long",
        year:"numeric"

    });




    let data =
    JSON.parse(
        localStorage.getItem("absen")
    ) || [];



    data.push({

        nama:nama,

        status:status,

        catatan:catatan,

        tanggal:tanggal

    });



    localStorage.setItem(

        "absen",

        JSON.stringify(data)

    );



    document.getElementById("namaAbsen").value="";
    document.getElementById("catatanAbsen").value="";



    tampilAbsen();

    hitungAbsen();


}


function tampilAbsen(){


let tempat =
document.getElementById("dataAbsen");



if(!tempat)
return;



let data =

JSON.parse(

localStorage.getItem("absen")

)
|| [];





tempat.innerHTML="";





let kelompok = {};



// pisahkan berdasarkan tanggal

data.forEach(a=>{


if(!kelompok[a.tanggal]){

    kelompok[a.tanggal]=[];

}


kelompok[a.tanggal].push(a);



});






let nomor=1;



Object.keys(kelompok).reverse().forEach(

(tanggal)=>{



tempat.innerHTML += `


<tr>

<td colspan="5">


<h3>
📅 ${tanggal}
</h3>


</td>


</tr>



`;





kelompok[tanggal].forEach(

(a)=>{


tempat.innerHTML += `


<tr>


<td>
${nomor++}
</td>



<td>
${a.nama}
</td>



<td>
${a.status}
</td>



<td>
${a.catatan}
</td>



<td>

<button onclick="hapusAbsen(${data.indexOf(a)})">

Hapus

</button>


</td>


</tr>



`;



}


);



}


);



}





function hapusAbsen(index){


    let data =
    JSON.parse(
        localStorage.getItem("absen")
    ) || [];



    data.splice(index,1);



    localStorage.setItem(
        "absen",
        JSON.stringify(data)
    );



    tampilAbsen();
    hitungAbsen();


}






function hitungAbsen(){


    let data =
    JSON.parse(
        localStorage.getItem("absen")
    ) || [];



    let hariIni =
    new Date().toLocaleDateString("id-ID",{

        weekday:"long",
        day:"numeric",
        month:"long",
        year:"numeric"

    });




    let hadir=0;
    let izin=0;
    let sakit=0;
    let alfa=0;




    // hanya hitung absensi hari ini

    data.forEach(a=>{


        if(a.tanggal == hariIni){


            if(a.status=="Hadir")
            hadir++;



            if(a.status=="Izin")
            izin++;



            if(a.status=="Sakit")
            sakit++;



            if(a.status=="Alfa")
            alfa++;


        }



    });







    if(document.getElementById("jumlahHadir")){


        document.getElementById("jumlahHadir")
        .innerHTML = hadir;



        document.getElementById("jumlahIzin")
        .innerHTML = izin;



        document.getElementById("jumlahSakit")
        .innerHTML = sakit;



        document.getElementById("jumlahAlfa")
        .innerHTML = alfa;



    }


}






// ===============================
// PENGUMUMAN
// ===============================


function tambahPengumuman(){


    let judul =
    document.getElementById("judulPengumuman").value;


    let isi =
    document.getElementById("isiPengumuman").value;



    if(judul=="" || isi==""){

        alert("Pengumuman kosong!");
        return;

    }



    let data =
    JSON.parse(
        localStorage.getItem("pengumuman")
    ) || [];



    data.push({

        judul:judul,
        isi:isi,
        tanggal:
        new Date().toLocaleDateString("id-ID")

    });



    localStorage.setItem(
        "pengumuman",
        JSON.stringify(data)
    );



    tampilPengumuman();


}





function tampilPengumuman(){


    let area =
    document.getElementById("listPengumuman");


    if(!area) return;



    let data =
    JSON.parse(
        localStorage.getItem("pengumuman")
    ) || [];



    area.innerHTML="";



    data.forEach((p,i)=>{


        area.innerHTML += `

        <div class="card">

        <h2>
        📌 ${p.judul}
        </h2>

        <p>${p.isi}</p>

        <small>
        ${p.tanggal}
        </small>


        <br><br>


        <button onclick="hapusPengumuman(${i})">
        Hapus
        </button>


        </div>

        `;


    });


}





function hapusPengumuman(index){


    let data =
    JSON.parse(
        localStorage.getItem("pengumuman")
    ) || [];



    data.splice(index,1);



    localStorage.setItem(
        "pengumuman",
        JSON.stringify(data)
    );



    tampilPengumuman();


}
// ===============================
// DENAH KELAS
// ===============================


function loadDenah(){


    let area =
    document.getElementById("denahKelas");


    if(!area) return;



    let data =
    JSON.parse(
        localStorage.getItem("denah")
    ) || [];



    area.innerHTML="";



    for(let i=0;i<25;i++){


        let nama =
        data[i] || "Kosong";



        area.innerHTML += `

        <div class="kursi" onclick="isiKursi(${i})">

        ${nama}

        </div>

        `;


    }


}







function isiKursi(index){


    let data =
    JSON.parse(
        localStorage.getItem("denah")
    ) || [];



    let nama =
    prompt("Masukkan nama siswa:");



    if(nama){


        data[index]=nama;



        localStorage.setItem(
            "denah",
            JSON.stringify(data)
        );



        loadDenah();


    }


}







// ===============================
// DASHBOARD
// ===============================


function updateDashboard(){


    let siswa =
    JSON.parse(
        localStorage.getItem("siswa")
    ) || [];



    let guru =
    JSON.parse(
        localStorage.getItem("guru")
    ) || [];



    let absen =
    JSON.parse(
        localStorage.getItem("absen")
    ) || [];



    let pengumuman =
    JSON.parse(
        localStorage.getItem("pengumuman")
    ) || [];





    if(document.getElementById("totalSiswa")){


        totalSiswa.innerHTML =
        siswa.length;



        totalGuru.innerHTML =
        guru.length;



        totalHadir.innerHTML =

        absen.filter(
            a=>a.status=="Hadir"
        ).length;



        totalPengumuman.innerHTML =
        pengumuman.length;


    }


}








// ===============================
// JAM DIGITAL
// ===============================


function jamDigital(){


    let waktu =
    new Date();



    let jam =
    waktu.getHours()
    .toString()
    .padStart(2,"0");



    let menit =
    waktu.getMinutes()
    .toString()
    .padStart(2,"0");



    let detik =
    waktu.getSeconds()
    .toString()
    .padStart(2,"0");



    let tanggal =
    waktu.toLocaleDateString(
        "id-ID",
        {
            weekday:"long",
            year:"numeric",
            month:"long",
            day:"numeric"
        }
    );



    if(document.getElementById("jam")){


        jam.innerHTML =
        jam+":"+menit+":"+detik;


        tanggal.innerHTML =
        tanggal;


    }



    setTimeout(
        jamDigital,
        1000
    );


}




function tampilUser(){


    let tempat =
    document.getElementById("userLogin");



    if(tempat){


        tempat.innerHTML =

        localStorage.getItem("namaUser")
        +
        " ("
        +
        localStorage.getItem("levelUser")
        +
        ")";


    }


}

function cekAdmin(){


    let level =
    localStorage.getItem("levelUser");



    if(level!="Admin"){


        alert(
        "Akses khusus Admin!"
        );


        window.location.href="index.html";


    }


}





function cekKetua(){


    let level =
    localStorage.getItem("levelUser");



    if(
        level!="Admin"
        &&
        level!="Ketua Kelas"
    ){


        alert(
        "Akses ditolak!"
        );


        window.location.href="index.html";


    }


}





function simpanProfil(){


    let data={


        sekolah:
        document.getElementById("namaSekolah").value,


        kelas:
        document.getElementById("namaKelas").value,


        wali:
        document.getElementById("waliKelas").value,


        ketua:
        document.getElementById("ketuaKelas").value,


        tahun:
        document.getElementById("tahunAjaran").value


    };



    localStorage.setItem(
        "profil",
        JSON.stringify(data)
    );



    alert(
    "Profil tersimpan!"
    );


    tampilProfil();


}







function tampilProfil(){


    let data =
    JSON.parse(
        localStorage.getItem("profil")
    ) || {};




    if(document.getElementById("namaSekolah")){


        namaSekolah.value =
        data.sekolah || "";


        namaKelas.value =
        data.kelas || "";


        waliKelas.value =
        data.wali || "";


        ketuaKelas.value =
        data.ketua || "";


        tahunAjaran.value =
        data.tahun || "";


    }





    if(document.getElementById("lihatSekolah")){


        lihatSekolah.innerHTML =
        data.sekolah || "-";


        lihatKelas.innerHTML =
        data.kelas || "-";


        lihatWali.innerHTML =
        data.wali || "-";


        lihatKetua.innerHTML =
        data.ketua || "-";


        lihatTahun.innerHTML =
        data.tahun || "-";


    }


}






function dashboardProfil(){


    let data =
    JSON.parse(
        localStorage.getItem("profil")
    ) || {};



    if(document.getElementById("dashKelas")){


        dashKelas.innerHTML =
        data.kelas || "-";


        dashWali.innerHTML =
        data.wali || "-";


        dashKetua.innerHTML =
        data.ketua || "-";


    }


}
// ===============================
// LOGIN SISWA BIASA
// ===============================


function loginSiswa(){


localStorage.setItem(

"mode",

"siswa"

);



window.location.href=
"siswa-home.html";


}






function logoutSiswa(){


localStorage.removeItem(
"mode"
);


window.location.href=
"login.html";


}






function tampilSiswaPage(){


let area =
document.getElementById("pengumumanSiswa");


if(!area)
return;



let data =

JSON.parse(

localStorage.getItem("pengumuman")

)

|| [];




area.innerHTML="";



data.slice(-3).reverse().forEach(

(p)=>{


area.innerHTML += `


<div class="card">


<h3>
📌 ${p.judul}
</h3>


<p>
${p.isi}
</p>


<small>
${p.tanggal}
</small>


</div>


`;


}



);



}
function cekAdminPage(){


let mode =
localStorage.getItem("mode");


let level =
localStorage.getItem("levelUser");



if(
mode=="siswa"
&&
!level
){


window.location.href=
"siswa-home.html";


}


}
function cekAkses(){

let mode =
localStorage.getItem("mode");

let login =
localStorage.getItem("statusLogin");



if(mode=="siswa"){

return;

}



if(login!="aktif"){

window.location.href="login.html";

}


}