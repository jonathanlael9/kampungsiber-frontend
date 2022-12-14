<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-toolbar style="color:#343A40; height:100px;">
        <ion-title style="color:white; padding-top: 20px; margin-left :40px; font-size: 40px;">Kampung<h1
            style="color:#00DC72">Siber</h1></ion-title>
        <ion-buttons class="button-nav" slot="primary">
          <ion-button style="font-size: 35px;">
            Beranda
          </ion-button>
          <ion-button style="font-size: 35px;">
            Dashboard
          </ion-button>
          <ion-button style="font-size: 35px;">
            Riwayat
          </ion-button>
          <ion-button style="font-size: 35px;">
            Sign In
          </ion-button>
        </ion-buttons>
      </ion-toolbar>

      <ion-grid>
        <ion-row class="ion-justify-content-between" id="back1">
          <ion-col>
            <h1 class="text1">
              Klinik Coding Pertama di Indonesia
            </h1>
            <p class="text2">
              Sekarang kamu ga perlu overthinking menghadapi error dan bug lagi dengan konsultasi sama "dokter-dokter" coding kita sesuai spesialisasinya lho 
            </p>
            <ion-button id="btn1" color="new" size="large"><p class=btn1text>Book
                Sekarang!</p></ion-button>
          </ion-col>
          <ion-col style="right: 0; position: relative; float:right; margin-left: 130px;">
            <ion-img id="img1" src="https://i.postimg.cc/8kKqbpjg/Group-17.png" alt="pict1"></ion-img>
            <ion-img id="img2" src="https://i.postimg.cc/44jq78Yz/Group-18.png" alt="pict1"></ion-img>
          </ion-col>
        </ion-row>

        <ion-row style="background-color: #F6F9FC; padding-top: 108px;padding-bottom: 162px;" >
          <ion-col size-xl="auto" style >
            <h2 class="text3">Mengapa kita lebih baik dari yang lain</h2>
            <p class="text4">Tentu jika kamu ingin memilih kami
              maka kamu harus tau alasan untuk
              memilih kami kan?
              <br>nah ini dia alasannya!</p>
          </ion-col>
          <ion-col size-xl="2.2" style="margin-right: 10px; margin-left: 25px;">
            <ion-img src="https://i.postimg.cc/MTNbyJpY/Card1.png"></ion-img>
          </ion-col>
          <ion-col size-xl="2.2" style="margin-right: 10px; margin-left: 25px; margin-top: 60px;">
            <ion-img src="https://i.postimg.cc/xTKyb7DK/Group-21.png"></ion-img>
          </ion-col>
          <ion-col size-xl="2.2" style="margin-left: 25px;">
            <ion-img src="https://i.postimg.cc/KvXDjbVG/Group-22.png"></ion-img>
          </ion-col>
        </ion-row>

        <ion-row style="background-color: #F6F9FC;">
          <ion-col size-xl="10" style="margin:auto">
            <ion-img src="https://i.postimg.cc/WzXx74xk/list-bahasa.png"></ion-img>
          </ion-col>
        </ion-row>

        <h2 class="testimoni">Beberapa testimoni dari client kami!</h2>

        <ion-row style="background-color: #F6F9FC; padding-left: 129px; padding-right: 129px; ">
          <ion-col style="z-index: +100">
            <ion-img src="https://i.postimg.cc/T1WbWbgm/Ellipse-4.png"
              style="height:270px; margin-bottom: -100px;"></ion-img>
            <ion-card class="testimoni-card" style="z-index: -1; position:relative;">
              <ion-card-header>
                <ion-card-title class="testimoni-card-title">Andy Rahmayadi</ion-card-title>
              </ion-card-header>
              <ion-card-content class="testimoni-card-content">
                KampungSiber sangat membantu saya
                untuk menyelesaikan pekerjaan saya,
                karena kemarin kena error code dan
                sampai minum kopi 3 gelas pun masih
                belum ketemu permasalahannya, nah dan
                kebetulan saat itu saya diberitahu oleh
                temen saya kalau ada jasa konsultan
                programming nah itu saya tertarik dan coba
                coba, dan sehabis session dengan konsultan
                kampungsiber saya langsung diberi solusi
                untuk penyelesaiannya,
                <br>terimakasih kampungsiber
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col style="z-index: +100;padding-left: 85px;padding-right:85px;">
            <ion-img src="https://i.postimg.cc/T1WbWbgm/Ellipse-4.png"
              style="height:270px; margin-bottom: -100px;"></ion-img>
            <ion-card style="z-index: -1; position:relative;">
              <ion-card-header>
                <ion-card-title class="testimoni-card-title">Indra Kusuma</ion-card-title>
              </ion-card-header>
              <ion-card-content class="testimoni-card-content">
                KampungSiber sangat membantu saya
                untuk menyelesaikan pekerjaan saya,
                karena kemarin kena error code dan
                sampai minum kopi 3 gelas pun masih
                belum ketemu permasalahannya, nah dan
                kebetulan saat itu saya diberitahu oleh
                temen saya kalau ada jasa konsultan
                programming nah itu saya tertarik dan coba
                coba, dan sehabis session dengan konsultan
                kampungsiber saya langsung diberi solusi
                untuk penyelesaiannya,
                <br>terimakasih kampungsiber
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col style="z-index: +100;">
            <ion-img src="https://i.postimg.cc/T1WbWbgm/Ellipse-4.png"
              style="height:270px; margin-bottom: -100px;"></ion-img>
            <ion-card style="z-index: -1; position:relative;">
              <ion-card-header>
                <ion-card-title class="testimoni-card-title">Sultan Basyha</ion-card-title>
              </ion-card-header>
              <ion-card-content class="testimoni-card-content">
                KampungSiber sangat membantu saya
                untuk menyelesaikan pekerjaan saya,
                karena kemarin kena error code dan
                sampai minum kopi 3 gelas pun masih
                belum ketemu permasalahannya, nah dan
                kebetulan saat itu saya diberitahu oleh
                temen saya kalau ada jasa konsultan
                programming nah itu saya tertarik dan coba
                coba, dan sehabis session dengan konsultan
                kampungsiber saya langsung diberi solusi
                untuk penyelesaiannya,
                <br>terimakasih kampungsiber
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>

        <ion-row class="ion-align-items-center" style="background-color: #F6F9FC;">
          <ion-col></ion-col>
          <ion-col>
            <ion-button expand="block" shape="round" color="light" fill="outline" class="testimoni-button"><span
                class="testimoni-text">Lihat Testimoni lainnya~~</span></ion-button>
          </ion-col>
          <ion-col></ion-col>
        </ion-row>

        <h2 class="konsultan">Konsultan rekomendasi dari kami untukmu hari ini!</h2>
        <div style="background-color: #F6F9FC;">
          <hr style="border: 10px;
    border-top: 3px double #333;
    color: #000000;
    overflow: visible;
    text-align: center;
    margin:0px 200px;
    z-index: +100;">
        </div>

        <ion-row style="background-color: #F6F9FC; padding: 76px 169px">
          <ion-col style="z-index: +100">
            <ion-card style="z-index: -1; position:relative;">
              <ion-card-header>
                <ion-card-title style="font-size:40px; text-align: center; padding-top: 15px;">John Doe</ion-card-title>
                <hr style="border: 100px;
    border-top: 3px double #333;
    color: #000000;
    font-weight: 100px;
    overflow: visible;
    text-align: center;
    margin:0px 35px;
    height: 5px;">
                <ion-img src="https://i.postimg.cc/0QWqNkcB/Rectangle-178.png" style="height: 50px;"></ion-img>
                <ion-card-subtitle style="font-size:35px; text-align: center;">Rp. xxx.xxx / Jam</ion-card-subtitle>
              </ion-card-header>
              <ion-card-content style="font-size:25px; justify-content: center; padding:34px 50px">
                Spesialis Laravel <img src="https://i.postimg.cc/cH4SZgM3/Vector.png"
                  style="height: 30px; float:right"><br>
                Spealis Android <img src="https://i.postimg.cc/cH4SZgM3/Vector.png"
                  style="height: 30px; float:right"><br>
                Spesialis IOS<img src="https://i.postimg.cc/cH4SZgM3/Vector.png" style="height: 30px; float:right"><br>
                <img src="https://i.postimg.cc/0NCsLdmx/material-symbols-calendar-month-outline.png"
                  style="height: 30px; float:left; margin-top: 30px;  margin-left: 22px;">
                <h3 style="font-size:20px; padding:34px 50px">Senin-Jumat<br>
                  11:00-13:00<br>
                  15:00-16:00<br>
                  19:00-12:00
                </h3>
                <ion-button expand="full" color="success" size="large"><span class="btn2text">Lihat
                    Detail</span></ion-button>
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col style="z-index: +100;margin-left:62px">
            <ion-card style="z-index: -1; position:relative;">
              <ion-card-header>
                <ion-card-title style="font-size:40px; text-align: center; padding-top: 15px">John Doe</ion-card-title>
                <hr style="border: 100px;
    border-top: 3px double #333;
    color: #000000;
    font-weight: 100px;
    overflow: visible;
    text-align: center;
    margin:0px 35px;
    height: 5px;">
                <ion-img src="https://i.postimg.cc/0QWqNkcB/Rectangle-178.png" style="height: 50px;"></ion-img>
                <ion-card-subtitle style="font-size:35px; text-align: center;">Rp. xxx.xxx / Jam</ion-card-subtitle>
              </ion-card-header>
              <ion-card-content style="font-size:25px; justify-content: center; padding:34px 50px">
                Spesialis Laravel <img src="https://i.postimg.cc/cH4SZgM3/Vector.png"
                  style="height: 30px; float:right"><br>
                Spealis Android <img src="https://i.postimg.cc/cH4SZgM3/Vector.png"
                  style="height: 30px; float:right"><br>
                Spesialis IOS<img src="https://i.postimg.cc/cH4SZgM3/Vector.png" style="height: 30px; float:right"><br>
                <img src="https://i.postimg.cc/0NCsLdmx/material-symbols-calendar-month-outline.png"
                  style="height: 30px; float:left; margin-top: 30px;  margin-left: 22px;">
                <h3 style="font-size:20px; padding:34px 50px">Senin-Jumat<br>
                  11:00-13:00<br>
                  15:00-16:00<br>
                  19:00-12:00
                </h3>
                <ion-button expand="full" color="success" size="large"><span class="btn2text">Lihat
                    Detail</span></ion-button>
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col style="z-index: +100;margin-left:62px">
            <ion-card style="z-index: -1; position:relative;">
              <ion-card-header>
                <ion-card-title style="font-size:40px; text-align: center; padding-top: 15px">John Doe</ion-card-title>
                <hr style="border: 100px;
    border-top: 3px double #333;
    color: #000000;
    font-weight: 100px;
    overflow: visible;
    text-align: center;
    margin:0px 35px;
    height: 5px;">
                <ion-img src="https://i.postimg.cc/0QWqNkcB/Rectangle-178.png" style="height: 50px;"></ion-img>
                <ion-card-subtitle style="font-size:35px; text-align: center;">Rp. xxx.xxx / Jam</ion-card-subtitle>
              </ion-card-header>
              <ion-card-content style="font-size:25px; justify-content: center; padding:34px 50px">
                Spesialis Laravel <img src="https://i.postimg.cc/cH4SZgM3/Vector.png"
                  style="height: 30px; float:right"><br>
                Spealis Android <img src="https://i.postimg.cc/cH4SZgM3/Vector.png"
                  style="height: 30px; float:right"><br>
                Spesialis IOS<img src="https://i.postimg.cc/cH4SZgM3/Vector.png" style="height: 30px; float:right"><br>
                <img src="https://i.postimg.cc/0NCsLdmx/material-symbols-calendar-month-outline.png"
                  style="height: 30px; float:left; margin-top: 30px;  margin-left: 22px;">
                <h3 style="font-size:20px; padding:34px 50px">Senin-Jumat<br>
                  11:00-13:00<br>
                  15:00-16:00<br>
                  19:00-12:00
                </h3>
                <ion-button expand="full" color="success" size="large"><span class="btn2text">Lihat
                    Detail</span></ion-button>
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col style="z-index: +100; margin-left:62px">
            <ion-card style="z-index: -1; position:relative;">
              <ion-card-header>
                <ion-card-title style="font-size:40px; text-align: center; padding-top: 15px">John Doe</ion-card-title>
                <hr style="border: 100px;
    border-top: 3px double #333;
    color: #000000;
    font-weight: 100px;
    overflow: visible;
    text-align: center;
    margin:0px 35px;
    height: 5px;">
                <ion-img src="https://i.postimg.cc/0QWqNkcB/Rectangle-178.png" style="height: 50px;"></ion-img>
                <ion-card-subtitle style="font-size:35px; text-align: center;">Rp. xxx.xxx / Jam</ion-card-subtitle>
              </ion-card-header>
              <ion-card-content style="font-size:25px; justify-content: center; padding:34px 50px">
                Spesialis Laravel <img src="https://i.postimg.cc/cH4SZgM3/Vector.png"
                  style="height: 30px; float:right"><br>
                Spealis Android <img src="https://i.postimg.cc/cH4SZgM3/Vector.png"
                  style="height: 30px; float:right"><br>
                Spesialis IOS<img src="https://i.postimg.cc/cH4SZgM3/Vector.png" style="height: 30px; float:right"><br>
                <img src="https://i.postimg.cc/0NCsLdmx/material-symbols-calendar-month-outline.png"
                  style="height: 30px; float:left; margin-top: 30px;  margin-left: 22px;">
                <h3 style="font-size:20px; padding:34px 50px">Senin-Jumat<br>
                  11:00-13:00<br>
                  15:00-16:00<br>
                  19:00-12:00
                </h3>
                <ion-button expand="full" color="success" size="large"><span class="btn2text">Lihat
                    Detail</span></ion-button>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>

        <ion-row style="background-color: #F6F9FC; padding: 0px 169px;">
          <ion-col style="z-index: +100">
            <ion-card style="z-index: -1; position:relative;">
              <ion-card-header>
                <ion-card-title style="font-size:40px; text-align: center; padding-top: 15px">John Doe</ion-card-title>
                <hr style="border: 100px;
    border-top: 3px double #333;
    color: #000000;
    font-weight: 100px;
    overflow: visible;
    text-align: center;
    margin:0px 35px;
    height: 5px;">
                <ion-img src="https://i.postimg.cc/0QWqNkcB/Rectangle-178.png" style="height: 50px;"></ion-img>
                <ion-card-subtitle style="font-size:35px; text-align: center;">Rp. xxx.xxx / Jam</ion-card-subtitle>
              </ion-card-header>
              <ion-card-content style="font-size:25px; justify-content: center; padding:34px 50px">
                Spesialis Laravel <img src="https://i.postimg.cc/cH4SZgM3/Vector.png"
                  style="height: 30px; float:right"><br>
                Spealis Android <img src="https://i.postimg.cc/cH4SZgM3/Vector.png"
                  style="height: 30px; float:right"><br>
                Spesialis IOS<img src="https://i.postimg.cc/cH4SZgM3/Vector.png" style="height: 30px; float:right"><br>
                <img src="https://i.postimg.cc/0NCsLdmx/material-symbols-calendar-month-outline.png"
                  style="height: 30px; float:left; margin-top: 30px;  margin-left: 22px;">
                <h3 style="font-size:20px; padding:34px 50px">Senin-Jumat<br>
                  11:00-13:00<br>
                  15:00-16:00<br>
                  19:00-12:00
                </h3>
                <ion-button expand="full" color="success" size="large"><span class="btn2text">Lihat
                    Detail</span></ion-button>
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col style="z-index: +100;margin-left:62px">
            <ion-card style="z-index: -1; position:relative;">
              <ion-card-header>
                <ion-card-title style="font-size:40px; text-align: center; padding-top: 15px">John Doe</ion-card-title>
                <hr style="border: 100px;
    border-top: 3px double #333;
    color: #000000;
    font-weight: 100px;
    overflow: visible;
    text-align: center;
    margin:0px 35px;
    height: 5px;">
                <ion-img src="https://i.postimg.cc/0QWqNkcB/Rectangle-178.png" style="height: 50px;"></ion-img>
                <ion-card-subtitle style="font-size:35px; text-align: center;">Rp. xxx.xxx / Jam</ion-card-subtitle>
              </ion-card-header>
              <ion-card-content style="font-size:25px; justify-content: center; padding:34px 50px">
                Spesialis Laravel <img src="https://i.postimg.cc/cH4SZgM3/Vector.png"
                  style="height: 30px; float:right"><br>
                Spealis Android <img src="https://i.postimg.cc/cH4SZgM3/Vector.png"
                  style="height: 30px; float:right"><br>
                Spesialis IOS<img src="https://i.postimg.cc/cH4SZgM3/Vector.png" style="height: 30px; float:right"><br>
                <img src="https://i.postimg.cc/0NCsLdmx/material-symbols-calendar-month-outline.png"
                  style="height: 30px; float:left; margin-top: 30px;  margin-left: 22px;">
                <h3 style="font-size:20px; padding:34px 50px">Senin-Jumat<br>
                  11:00-13:00<br>
                  15:00-16:00<br>
                  19:00-12:00
                </h3>
                <ion-button expand="full" color="success" size="large"><span class="btn2text">Lihat
                    Detail</span></ion-button>
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col style="z-index: +100;margin-left:62px">
            <ion-card style="z-index: -1; position:relative;">
              <ion-card-header>
                <ion-card-title style="font-size:40px; text-align: center; padding-top: 15px">John Doe</ion-card-title>
                <hr style="border: 100px;
    border-top: 3px double #333;
    color: #000000;
    font-weight: 100px;
    overflow: visible;
    text-align: center;
    margin:0px 35px;
    height: 5px;">
                <ion-img src="https://i.postimg.cc/0QWqNkcB/Rectangle-178.png" style="height: 50px;"></ion-img>
                <ion-card-subtitle style="font-size:35px; text-align: center;">Rp. xxx.xxx / Jam</ion-card-subtitle>
              </ion-card-header>
              <ion-card-content style="font-size:25px; justify-content: center; padding:34px 50px">
                Spesialis Laravel <img src="https://i.postimg.cc/cH4SZgM3/Vector.png"
                  style="height: 30px; float:right"><br>
                Spealis Android <img src="https://i.postimg.cc/cH4SZgM3/Vector.png"
                  style="height: 30px; float:right"><br>
                Spesialis IOS<img src="https://i.postimg.cc/cH4SZgM3/Vector.png" style="height: 30px; float:right"><br>
                <img src="https://i.postimg.cc/0NCsLdmx/material-symbols-calendar-month-outline.png"
                  style="height: 30px; float:left; margin-top: 30px;  margin-left: 22px;">
                <h3 style="font-size:20px; padding:34px 50px">Senin-Jumat<br>
                  11:00-13:00<br>
                  15:00-16:00<br>
                  19:00-12:00
                </h3>
                <ion-button expand="full" color="success" size="large"><span class="btn2text">Lihat
                    Detail</span></ion-button>
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col style="z-index: +100; margin-left:62px">
            <ion-card style="z-index: -1; position:relative;">
              <ion-card-header>
                <ion-card-title style="font-size:40px; text-align: center; padding-top: 15px">John Doe</ion-card-title>
                <hr style="border: 100px;
    border-top: 3px double #333;
    color: #000000;
    font-weight: 100px;
    overflow: visible;
    text-align: center;
    margin:0px 35px;
    height: 5px;">
                <ion-img src="https://i.postimg.cc/0QWqNkcB/Rectangle-178.png" style="height: 50px;"></ion-img>
                <ion-card-subtitle style="font-size:35px; text-align: center;">Rp. xxx.xxx / Jam</ion-card-subtitle>
              </ion-card-header>
              <ion-card-content style="font-size:25px; justify-content: center; padding:34px 50px">
                Spesialis Laravel <img src="https://i.postimg.cc/cH4SZgM3/Vector.png"
                  style="height: 30px; float:right"><br>
                Spealis Android <img src="https://i.postimg.cc/cH4SZgM3/Vector.png"
                  style="height: 30px; float:right"><br>
                Spesialis IOS<img src="https://i.postimg.cc/cH4SZgM3/Vector.png" style="height: 30px; float:right"><br>
                <img src="https://i.postimg.cc/0NCsLdmx/material-symbols-calendar-month-outline.png"
                  style="height: 30px; float:left; margin-top: 30px;  margin-left: 22px;">
                <h3 style="font-size:20px; padding:34px 50px">Senin-Jumat<br>
                  11:00-13:00<br>
                  15:00-16:00<br>
                  19:00-12:00
                </h3>
                <ion-button expand="full" color="success" size="large"><span class="btn2text">Lihat
                    Detail</span></ion-button>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>

        <ion-row class="ion-align-items-center" style="background-color: #F6F9FC;">
          <ion-col></ion-col>
          <ion-col>
            <ion-button expand="block" shape="round" color="light" fill="outline" class="testimoni-button"><span
                class="testimoni-text">...Lihat Selengkapnya</span></ion-button>
          </ion-col>
          <ion-col></ion-col>
        </ion-row>

        <ion-row justify-content-center style="background-color: #F6F9FC; height: 100%; padding-top: 100px;">
          <div style="width: 100%; display: flex; align-items: center; justify-content: center;">
            <ion-card class="card-center">
              <ion-card-header>
                <ion-card-title
                  style="font-size:55px; text-align: center; padding: 23px 147px; font-weight:bolder;">Konsultan kami
                  sudah kerja dimana aja sih?</ion-card-title>
              </ion-card-header>
              <ion-card-content style="padding: 70px 20px">
                <div style="display:flex; justify-content:center">
                  <img
                    src="https://purepng.com/public/uploads/large/purepng.com-google-logo-2015brandlogobrand-logoiconssymbolslogosgoogle-6815229372333mqrr.png"
                    class="company-img">
                  <img src="https://logos-download.com/wp-content/uploads/2020/06/Gojek_Logo.png" class="company-img">
                  <img
                    src="https://www.freepnglogos.com/uploads/logo-tokopedia-png/tokopedia-oralgen-nupearl-advanced-teeth-whitening-system-with-11.png"
                    class="company-img">
                  <img src="https://logodownload.org/wp-content/uploads/2021/03/shopee-logo.png" class="company-img">
                </div>
                <div style="display:flex; padding-top:90px; justify-content:center">
                  <img src="https://logos-download.com/wp-content/uploads/2018/03/Grab_logo_green.png"
                    class="company-img">
                  <img
                    src="https://1.bp.blogspot.com/-x0AXKXB9uqU/XnKxGP2VVfI/AAAAAAAASbY/r1872kTuFVQWfHJg0DqI8mzoTuo-_IttgCLcBGAsYHQ/s1600/ruang%2Bguru.png"
                    class="company-img" style="height:130px;padding-top:-30px;">
                  <img src="https://spectrathailand.com/wp-content/uploads/2019/11/Lazada-logo.png" class="company-img">
                </div>
              </ion-card-content>
            </ion-card>
          </div>
        </ion-row>

        <h2 class="penutup" style="font-size:45px">Nah dengan itu menutup semua perkenalan dari kami,
          tunggu apalagi? ayo konsultasi dengan konsultasi kami sekarang! :)</h2>
        <div style="background-color: #F6F9FC;">
          <hr style="border: 10px;
    border-top: 3px double #333;
    color: #000000;
    overflow: visible;
    text-align: center;
    margin:0px 200px;
    z-index: +100;">
        </div>
        <ion-row style="background-color: #F6F9FC; padding-bottom: 100px;">
          <h3 class="informasi">Untuk Informasi Lebih Lanjut</h3>
          <div class="more-information">
            <ion-col size="8">
              <h3 class="pertanyaan">Jika ada pertanyaan mengenai konsultasi yang kami
                sediakan, bisa langsung aja chat kami! </h3>

            </ion-col>
            <ion-col size="auto">
              <ion-button expand="block" shape="round" color="light" fill="outline" class="chat-button">
                <ion-img slot="start" src="https://i.postimg.cc/65Y5M1GH/Vector-1.png" size="auto"
                  style="padding-right: 15px; padding-left: 45px;"></ion-img>
                <span style="padding-right: 100px">Chat Kami</span></ion-button>

            </ion-col>
          </div>
        </ion-row>

        <div style="background-color: #F6F9FC;">
          <hr style="border: 10px;
    border-top: 3px double #333;
    color: #000000;
    overflow: visible;
    text-align: center;
    z-index: +100;">
        </div>

        <ion-row class="ion-justify-content-between" style="background-color: #F6F9FC; height: auto;">
          <ion-col size="3">
            <h3 id="footer1">Kampungsiber@2077</h3>
          </ion-col>
          <ion-col size="3" style="margin-right: 73px">
            <div style="display:inline-block;vertical-align:top;">
              <img src="https://clipground.com/images/e-mail-clipart-2.jpg" style="height: 27px; margin-top: 61px;">
            </div>
            <div style="display:inline-block;">
              <p id="footer2">Kampungsiber@mail.com</p>
            </div>
            <div style="display:inline-block;vertical-align:top;">
              <img src="https://cdn.onlinewebfonts.com/svg/img_424458.png" style="height: 24px; margin-top: 61px;">
              <img src="http://seldomsounds.com/images/social/twitter.png"
                style="height: 24px; margin-top: 61px; padding-left: 5px;">
              <img src="https://pluspng.com/img-png/instagram-logo-eps-png-instagram-logo1-instagram-logo-1915.png"
                style="height: 24px; margin-top: 61px; padding-left: 5px;">
            </div>
          </ion-col>
        </ion-row>

      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage, IonToolbar, IonTitle, IonButton, IonButtons, IonGrid, IonCol, IonRow } from '@ionic/vue';
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonPage, IonToolbar, IonTitle, IonButton, IonButtons, IonGrid, IonCol, IonRow,
  }
});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: "Poppins";
}

.ion-color-new {
	--ion-color-base: var(--ion-color-new);
	--ion-color-base-rgb: var(--ion-color-new-rgb);
	--ion-color-contrast: var(--ion-color-new-contrast);
	--ion-color-contrast-rgb: var(--ion-color-new-contrast-rgb);
	--ion-color-shade: var(--ion-color-new-shade);
	--ion-color-tint: var(--ion-color-new-tint);
}

#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}

ion-card {
  --background: #FFFFFF;
  --color: #000000;

}

ion-card-title {
  --color: #000000;
}

.testimoni-card-title {
  font-size: 35px;
  padding-top: 100px;
  text-align: center;
}

ion-card-content {
  --color: #000000;
}

.testimoni-card-content {
  font-size: 20px;
  padding: 1em;
  text-align: center;
}

.button-nav {
  color: white;
  font-family: 'Times New Roman';
  padding-top: 20px;
  height: 50px;
}

#back1 {
  /* position: absolute; */
  width: 100%;
  height: 840px;
  left: 0px;
  background: linear-gradient(180deg, #000D18 0%, #021C35 100%);
}



.text1 {
  margin: 166px 0px 27px 100px;
  position: relative;
  inline-size: 750px;
  overflow-wrap: break-word;
  font-family: 'Poppins';
  font-weight: 600;
  font-size: 70px;
  line-height: 105px;
  color: #FFFFFF;
}

.text2 {
  margin-left: 100px;
  position: relative;
  inline-size: 1000px;
  overflow-wrap: break-word;
  font-family: 'Poppins';
  font-weight: 400;
  font-size:35px;
  line-height: 52px;
  color: #FFFFFF;
}

#img1 {
  box-sizing: border-box;

  position: absolute;
  width: auto;
  height: auto;
  /* left: 1138px; */
  top: 47.67px;

  background: #02203C;
  border: 3px solid #333564;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
}

.text2.a {
  left: 42px;
}

.testimoni-button {

  font-family: "Poppins";
  background-color: white;
  border-radius: 50px;
  /* margin: 69px 685px; */
  margin-top: 69px;
  font-size: 35px;
  font-weight: light;
  /* width: fit-content; */
  text-align: center;
  margin: 48px 100px;
  height: 100px;
}

.chat-button {

  font-family: "Poppins";
  background-color: white;
  border-radius: 50px;
  justify-content: center;
  font-size: 35px;
  font-weight: light;
  text-align: center;
  margin-top: 13%;
  height: 100px;
}

ion-button {
  text-transform: inherit;
}

#img2 {

  box-sizing: border-box;

  position: absolute;
  width: auto;
  height: auto;
  margin-left: 215px;
  /* left: 1353px; */
  top: 291px;

  background: #02203C;
  border: 3px solid #333564;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
}

#img1,
#img2 {
  float: right;
}

#btn1 {
  position: relative;
  margin: 70px 0px 0px 100px;
  color:#00DC72;
  border-radius: 15px;
  height:70px
}

.btn1text {
  font-size: 45px;
  font-weight: 400;
  color: rgb(0, 0, 0);
  padding: 1px 22px
}

.btn2text {
  font-family: "Poppins";
  font-size: 20px;
  color: #FFFFFF;
}


.text3 {
  /* position: absolute; */

  font-family: 'Poppins';

  font-weight: 600;
  font-size: 55px;
  line-height: 82px;

  color: #000000;

  margin: 8px 0px 25px 100px;
  position: relative;
  inline-size: 553px;
  overflow-wrap: break-word;
}

.text4 {
  /* position: absolute; */
  font-family: 'Poppins';

  font-weight: 400;
  font-size: 32px;
  line-height: 48px;

  color: #000000;

  margin-left: 100px;
  position: relative;
  inline-size: 574px;
  overflow-wrap: break-word;
}

.testimoni {
  background-color: #F6F9FC;
  color: black;
  font-weight: bold;
  font-family: "Poppins";
  font-size: 60px;
  text-align: center;
  padding-top: 190px;
  padding-bottom: 50px;
}

.konsultan {
  background-color: #F6F9FC;
  color: black;
  font-weight: bolder;
  font-size: 55px;
  text-align: center;
  padding-top: 100px;
  padding-bottom: 13px;
}

.penutup {
  background-color: #F6F9FC;
  color: black;
  padding: 0px 180px;
  font-weight: bolder;
  font-size: 45px;
  text-align: center;
  padding-top: 143px;
  padding-bottom: 55px;
}

ion-card {
  border-radius: 20px;
}

.company-img {
  height: 70px;
  padding: 0px 40px;
}

.informasi {
  font-family: 'Poppins';
  font-size: 25px;
  color: #000000;
  padding-top: 154px;
  padding-left: 21px;
  font-weight: bold;
}

.more-information {
  display: flex;
  background-color: #000D18;
  width: 100%;
  margin: 18px 10px;
  border-radius: 20px;
}

.pertanyaan {
  color: #FFFFFF;
  padding: 61px 55px;
  font-family: 'Poppins';
  font-size: 40px;
  font-weight: 60px;
}

#footer1,
#footer2 {
  font-family: 'Poppins';
  color: #7C7676;
  font-size: 25px;
  padding: 56px 21px;
}

#footer1 {
  text-align: left;
}

#footer2 {
  text-align: right;
}
</style>
