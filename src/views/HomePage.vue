<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-toolbar style="color:#343A40">
        <ion-title style="color:white; margin-left :20px">Kampung<span style="color:#00DC72">Siber</span></ion-title>
        <ion-buttons class="button-nav" slot="primary">
          <ion-button style="padding-left:10px">
            Beranda
          </ion-button>
          <ion-button>
            Dashboard
          </ion-button>
          <ion-button>
            Riwayat
          </ion-button>
          <ion-button>
            Sign In
          </ion-button>
        </ion-buttons>
      </ion-toolbar>

      <ion-grid>
        <ion-row class="back1">

          <ion-col>
            <span class="title1">Kampung<span style="color:#00DC72">Siber</span></span>
            <span class="text1">Klinik Coding Pertama di Indonesia!</span>
            <span class="text2"><span class="text2.a">Sekarang kamu ga perlu overthinking menghadapi <br>error dan bug
                lagi dengan konsultasi sama "dokter-dokter"</span><br>coding kita sesuai spesialisasinya lho</span>
            <ion-button id="btn1" color="success" size="large"><span class=btn1text>Book
                Sekarang!!!</span></ion-button>
          </ion-col>
          <ion-col style="right: 0; position: relative; float:right; margin-left: 300px;">
            <ion-img id="img1" src="https://i.postimg.cc/8kKqbpjg/Group-17.png" alt="pict1"></ion-img>
            <ion-img id="img2" src="https://i.postimg.cc/44jq78Yz/Group-18.png" alt="pict1"></ion-img>
          </ion-col>
        </ion-row>

        <!-- <div class="container-fluid"> -->
        <ion-row class="row2">
          <ion-col size-xl="auto">
            <!-- <h2 style='color:black;'>Mengapa kita lebih baik dari yang lain</h2> -->
            <span class="text3">Mengapa kita lebih <br>baik dari yang lain</span>
            <span class="text4"><br>Tentu jika kamu ingin memilih kami
              <br>maka kamu harus tau alasan untuk
              <br>memilih kami kan?
              <br>nah ini dia alasannya!</span>
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

        <!-- </div> -->
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
            <ion-card style="z-index: -1; position:relative;">
              <ion-card-header>
                <ion-card-title>Andy Rahmayadi</ion-card-title>
              </ion-card-header>
              <ion-card-content>
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
                <ion-card-title>Indra Kusuma</ion-card-title>
              </ion-card-header>
              <ion-card-content>
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
          <ion-col style="z-index: +100">
            <ion-img src="https://i.postimg.cc/T1WbWbgm/Ellipse-4.png"
              style="height:270px; margin-bottom: -100px;"></ion-img>
            <ion-card style="z-index: -1; position:relative;">
              <ion-card-header>
                <ion-card-title>Sultan Basyha</ion-card-title>
              </ion-card-header>
              <ion-card-content>
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
        </ion-row >
        <ion-row style="background-color: #F6F9FC;">
          <ion-button expand="block" shape="round" color="light" fill="outline" class="testimoni-button"><span class="testimoni-text" >Lihat Testimoni lainnya~~</span></ion-button>
        </ion-row >
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
  font-size: 35px;
  padding-top: 100px;
  text-align: center;
}

ion-card-content {
  --color: #000000;
  font-size: 20px;
  padding: 1em;
  text-align: center;
}

.title1 {
  position: absolute;
  width: 381px;
  height: 36px;
  left: 30px;
  top: 51px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 45px;
  line-height: 68px;

  color: #FFFFFF;
}



.button-nav {
  color: white;
  font-family: 'Times New Roman';
}

.back1 {
  /* position: absolute; */
  width: 100%;
  height: 840px;
  left: 0px;
  background: linear-gradient(180deg, #000D18 0%, #021C35 100%);
}

.row2 {
  padding: 150px 50px;
  background-color: #F6F9FC;
}

.text1 {
  position: absolute;
  width: 849px;
  height: 68px;
  left: 19px;
  top: 210px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 45px;
  line-height: 68px;
  /* identical to box height */
  color: #FFFFFF;
}

.text2 {
  position: absolute;
  width: 1826px;
  height: 212px;
  left: 22px;
  top: 274px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
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

.testimoni-button{
  margin: 69px 685px;
  font-size: 35px;
  font-weight: bold;
  height: 100px;
}

ion-button{
 --ion-font-family: 'Poppins';
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
  position: absolute;
  width: 397px;
  height: 70px;
  left: 57px;
  top: 490px;
}

.btn1text {
  font-size: 35px;
  font-weight: bold;
  color: rgb(0, 0, 0);
}

.text3 {
  /* position: absolute; */
  width: 553px;
  height: 166px;
  left: 55px;
  top: 968px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 55px;
  line-height: 82px;

  color: #000000;

}

.text4 {
  /* position: absolute; */
  width: 628px;
  height: 212px;
  left: 55px;
  top: 1157px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 52px;

  color: #000000;
}

.testimoni {
  background-color: #F6F9FC;
  color: black;
  font-weight: bolder;
  font-size: 60px;
  text-align: center;
  padding-top: 190px;
  padding-bottom: 50px;
}

/* .card1{
  position: absolute;
  left: 708px;
top: 1092px;
} */
</style>
