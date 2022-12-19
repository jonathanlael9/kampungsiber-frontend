<template>
    <ion-page>
      <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
      <ion-content :fullscreen="true">
        <ion-row>
          <ion-toolbar style="color:#343A40">
          <ion-title style="color:white; margin-left :20px; font-size: 25px;">Kampung<span style="color:#00DC72; font-size: 25px;">Siber</span></ion-title>
          <ion-buttons class ="button-nav" slot="primary" style="color: white;">
            <ion-button class="ion-text-capitalize" style="font-size: 20px; margin: 20px; margin-left: 30px;" href="/LandingPage">
              Beranda
            </ion-button>
            <ion-button class="ion-text-capitalize" style="font-size: 20px; margin: 20px; margin-left: 30px;" href="/FaqPage">
              FAQ
            </ion-button>
            <ion-button class="ion-text-capitalize" style="font-size: 20px; margin: 20px; margin-left: 30px;" href="/ContactUs">
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
        <div class="ion-text-center" style="color:black">
          <h1 style="color:black">Riwayat</h1>
        </div>
      </ion-col>
      </ion-row>
  </ion-grid>
      </ion-content>
      <ion-footer>
      <ion-toolbar>
        <ion-title class="ion-text-center">KampungSiber22</ion-title>
      </ion-toolbar>
    </ion-footer>
    </ion-page>
  </template>
  
  <script lang="ts">
    import { IonContent, IonPage,IonToolbar, IonTitle,IonGrid,IonCol,IonRow,IonButtons,IonButton} from '@ionic/vue';
  import { defineComponent } from 'vue';
  
  
  export default defineComponent({
    name: 'DashBoard',
    components: {
        IonContent,
        IonPage,IonToolbar, IonTitle,IonGrid,IonCol,IonRow,IonButtons,IonButton,
      }
  });
  </script>
  <style>
   *{
      color: rgb(255, 255, 255);
      font-size: large;
    }
  </style>