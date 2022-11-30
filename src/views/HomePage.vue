<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-toolbar style="color:#343A40">
        <ion-title style="color:white; margin-left :20px">Kampung<span style="color:#00DC72">Siber</span></ion-title>
        <ion-buttons class ="button-nav" slot="primary">
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
  <ion-row>

    <ion-col class="back1">
      <span class="title1">Kampung<span style="color:#00DC72">Siber</span></span>
      <span class="text1">Klinik Coding Pertama di Indonesia!</span>
      <span class="text2"><span class="text2.a">Sekarang kamu ga perlu overthinking menghadapi <br>error dan bug lagi dengan konsultasi sama "dokter-dokter"</span><br>coding kita sesuai spesialisasinya lho</span>
      <div class="box1"></div>
      <ion-img id="img1" src="https://i.postimg.cc/8kKqbpjg/Group-17.png" alt="pict1"></ion-img>
      <ion-img id="img2" src="https://i.postimg.cc/44jq78Yz/Group-18.png" alt="pict1"></ion-img>
      <ion-button id="btn1" color="success" size="large" ><span class=btn1text>Book Sekarang!!!</span></ion-button>
      
    </ion-col>
    </ion-row>
      <ion-row>
    <ion-col>
      <span class="text3">Mengapa kita lebih <br>baik dari yang lain</span>
      <span class="text4">Tentu jika kamu ingin memilih kami 
<br>maka kamu harus tau alasan untuk
<br>memilih kami kan? 
<br>nah ini dia alasannya!</span>
    </ion-col>
    <ion-col>
  
    </ion-col>
    </ion-row>
</ion-grid>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage,IonToolbar, IonTitle, IonButton, IonButtons ,IonGrid,IonCol,IonRow} from '@ionic/vue';
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonPage,IonToolbar, IonTitle, IonButton, IonButtons,IonGrid,IonCol,IonRow,
  }
});
</script>

<style scoped>
*{
  margin : 0;
  padding : 0;
  font-family: "Poppins"
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

.title1{
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

.button-nav{
  color: white;
  font-family: 'Times New Roman';
}
.back1{
  position: absolute;
width: 100%;
height: 840px;
left: 0px;
background: linear-gradient(180deg, #000D18 0%, #021C35 100%);
}

.text1{
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

.text2{
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
#img1{
  box-sizing: border-box;

position: absolute;
width: 555px;
height: 469.33px;
left: 1138px;
top: 47.67px;

background: #02203C;
border: 3px solid #333564;
box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.4);
border-radius: 10px;
}
.text2.a{
  left: 42px;
}

#img2{
  box-sizing: border-box;

position: absolute;
width: 555px;
height: 469.33px;
left: 1353px;
top: 291px;

background: #02203C;
border: 3px solid #333564;
box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.4);
border-radius: 10px;
}

#btn1{
  position: absolute;
width: 397px;
height: 70px;
left: 57px;
top: 490px;
}

.btn1text{
  font: "Poppins";
  font-size: 35px;
  font-weight: bold;
  color: rgb(107, 107, 107);
}

.text3{
  position: absolute;
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

.text4{
  position: absolute;
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

.card1{
  position: absolute;
width: 298px;
height: 152px;
left: 739px;
top: 1301px;

font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 25px;
line-height: 38px;
text-align: center;
}

</style>
