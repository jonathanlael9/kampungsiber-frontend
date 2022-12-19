<template>
  <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
    <ion-page>
      <ion-content :fullscreen="true">
        <ion-row>
          <ion-toolbar style="color:#343A40">
        <ion-title style="color:white; margin-left :20px; font-size: 25px;">Kampung<span style="color:#00DC72; font-size: 25px;">Siber</span></ion-title>
        <ion-buttons class ="button-nav" slot="primary" style="color: white;" >
          <ion-button class="ion-text-capitalize" style="font-size: 20px; margin: 20px; margin-left: 30px;" href="/LandingPage">
            Beranda
          </ion-button>
          <ion-button class="ion-text-capitalize" style="font-size: 20px; margin: 20px; margin-left: 30px;" href="/FaqPage">
            FAQ
          </ion-button>
          <ion-button class="ion-text-capitalize" style="font-size: 20px; margin: 20px; margin-left: 30px;" href="/LandingPage">
            Contact Us
          </ion-button>
          <ion-button class="ion-text-capitalize" style="font-size: 20px; margin: 20px; margin-left: 30px;" href="/SignIn">
            Sign In
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-row>
        <ion-grid>
        <ion-row>
          <ion-col>
          <div class="ion-text-start" style="color:black">
            <h1 style="color:black; font-size: 65px; font-weight: bold; text-align: start; margin-left: 100px; margin-top: 40px;">Contact Us</h1>
            <h2 style="color:black; font-size: 30px; font-weight: bold; text-align: start; margin-left: 100px;">Bingung dengan fitur, atau dengan konsultasi yang kami berikan
            bisa langsung mengontak kami</h2>
          </div>
          </ion-col>
          <ion-col>
            <div class="ion-text-start" style="color:black">
              <ion-card class="card">
                    <ion-card-content>
                        <h2 class="text" style="font-size: 34px; font-weight: bold;">
                            Nama 
                        </h2>
                        <ion-grid>
                            <ion-row>
                              <ion-col>
                                <div class="textbox">
                                    <ion-input class="text-box" type="name" placeholder="Nama Depan"></ion-input>
                                </div>
                              </ion-col>
                              <ion-col>
                                <div class="textbox">
                                  <ion-input style="margin-left: 20px;" class="text-box" type="name" placeholder="Nama Belakang"></ion-input>
                                </div>
                              </ion-col>
                            </ion-row>
                            <h2 class="text" style="font-size: 34px; font-weight: bold;" >
                                  email
                              </h2>
                            <ion-row>
                              <div class="textbox">
                                  <ion-input class="text-box" type="email" placeholder="...@email.com"></ion-input>
                              </div>
                            </ion-row>
                            <h2 class="text" style="font-size: 34px; font-weight: bold;">
                                  Pertanyaan yang ingin ditanyakan
                              </h2>
                            <ion-row>
                              <div class="textbox2">
                                  <ion-input class="question" type="text" placeholder="ini ini itu"></ion-input>
                              </div>
                            </ion-row>
                          </ion-grid>
                        <ion-button class="btn1" size="large" color="dark">
                            <div class=btn1text>
                                Submit
                            </div>
                        </ion-button>
                    </ion-card-content>
                </ion-card>
              </div>
          </ion-col>
        </ion-row>
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
              <img src="http://seldomsounds.com/images/social/twitter.png" style="height: 24px; margin-top: 61px; padding-left: 5px;">
              <img src="https://pluspng.com/img-png/instagram-logo-eps-png-instagram-logo1-instagram-logo-1915.png" style="height: 24px; margin-top: 61px; padding-left: 5px;">
            </div>
          </ion-col>
        </ion-row>
        </ion-grid>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { IonContent, IonPage,IonToolbar, IonTitle,IonGrid,IonCol,IonRow,IonButtons,IonButton} from '@ionic/vue';
  import { defineComponent } from 'vue';
  
  
  export default defineComponent({
    name: 'ContactUs',
    components: {
      IonContent,
      IonPage,IonToolbar, IonTitle,IonGrid,IonCol,IonRow,IonButtons,IonButton,
    }
  });
  </script>
  <style>
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
.card {
    margin-left: 100px;
    margin-top: 30px;
    width: 900px;
    align-items: left;
    border-radius: 40px;
    margin-bottom: 50px;
}
.title {
    font-weight: 600;
    font-size: 40px;
    line-height: 60px;
    text-align: center;
    color: black;
    padding-top: 20px;
}
.text {
    font-size: 40px;
    padding-top: 15px;
    line-height: 52px;
    color: black;
    padding-left: 41px;
}
.question{
    font-weight: 500;
    font-size: 20px;
    line-height: 52px;
    line-height: 110px;
    margin-left: 20px;
}
.textbox {
    margin: 0px 30px;
    width: auto;
    height: 100px;
    background: linear-gradient(0deg, #EFEFEF, #EFEFEF), linear-gradient(0deg, #EFEFEF, #EFEFEF), #EFEFEF;
    border-radius: 30px;
}
.textbox2 {
    margin: 0px 30px;
    width: 1000px;
    height: 400px;
    background: linear-gradient(0deg, #EFEFEF, #EFEFEF), linear-gradient(0deg, #EFEFEF, #EFEFEF), #EFEFEF;
    border-radius: 30px;
}
.text-box {
    font-weight: 500;
    font-size: 30px;
    line-height: 80px;
    margin-left: 20px;
}
.btn1 {
    --background: #ffffff;
    --color: white;
    --border-radius: 20px;
    margin-top: 40px;
    margin-left: 30px;
    text-transform: none;
    width: 250px;
    height: 100px;
}
.btn1text {
    font-size: 35px;
    line-height: 60px;
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
