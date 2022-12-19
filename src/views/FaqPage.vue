<template>
  <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
  <ion-page>
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
        <h1 style="color:black; font-size: 30px; font-weight: bold;">FAQ</h1>
      </div>
    </ion-col>
    </ion-row>
    <ion-row>
      <ion-col>
      <ion-searchbar style="margin-left: 490px; color:black; width: 1015px; justify-content: center; text-align: center;"></ion-searchbar>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col>
      <div style="height: 100%; display: flex; justify-content: center;">
            <ion-card class="card" style="justify-content: center;">
              <ion-card-content>
                <ion-accordion-group>
                  <ion-accordion value="first">
                    <ion-item slot="header" style="color: black; " color="dark">
                      <ion-label>Lorem ipsum dolor sit amet</ion-label>
                    </ion-item>
                    <div class="ion-padding" slot="content">
                      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                  </ion-accordion>
                  <ion-accordion value="second">
                    <ion-item slot="header" style="color: black;" color="dark">
                      <ion-label>Second Accordion</ion-label>
                    </ion-item>
                    <div class="ion-padding" slot="content">
                      Second Content
                    </div>
                  </ion-accordion>
                  <ion-accordion value="third">
                    <ion-item slot="header" style="color: black;" color="dark">
                      <ion-label>Third Accordion</ion-label>
                    </ion-item>
                    <div class="ion-padding" slot="content">
                      Third Content
                    </div>
                  </ion-accordion>
                  <ion-accordion value="fourth">
                    <ion-item slot="header" style="color: black;" color="dark">
                      <ion-label>Third Accordion</ion-label>
                    </ion-item>
                    <div class="ion-padding" slot="content">
                      Third Content
                    </div>
                  </ion-accordion>
                  <ion-accordion value="fifth">
                    <ion-item slot="header" style="color: black;" color="dark">
                      <ion-label>Third Accordion</ion-label>
                    </ion-item>
                    <div class="ion-padding" slot="content">
                      Third Content
                    </div>
                  </ion-accordion>
                  <ion-accordion value="sixth">
                    <ion-item slot="header" style="color: black;" color="dark">
                      <ion-label>Third Accordion</ion-label>
                    </ion-item>
                    <div class="ion-padding" slot="content">
                      Third Content
                    </div>
                  </ion-accordion>
                  <ion-accordion value="seventh">
                    <ion-item slot="header" style="color: black;" color="dark">
                      <ion-label>Third Accordion</ion-label>
                    </ion-item>
                    <div class="ion-padding" slot="content">
                      Third Content
                    </div>
                  </ion-accordion>
                </ion-accordion-group>
          </ion-card-content>
        </ion-card>
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
  name: 'FaqPage',
  components: {
      IonContent,
      IonPage,IonToolbar, IonTitle,IonGrid,IonCol,IonRow,IonButtons,IonButton,
    }
});
</script>
<style>
.card{
  height: fit-content;
  width:1000px;
}
</style>