<template>
  <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
  <ion-page>
    <ion-header>
      <ion-row>
        <ion-toolbar style="color:#343A40">
          <ion-title style="color:white; margin-left :20px; font-size: 25px;">Kampung<span
              style="color:#00DC72; font-size: 25px;">Siber</span></ion-title>
          <ion-buttons class="button-nav" slot="primary" style="color: white;">
            <ion-button class="ion-text-capitalize" style="font-size: 20px; margin: 20px; margin-left: 30px;"
              href="/homePage">
              Beranda
            </ion-button>
            <ion-button class="ion-text-capitalize" style="font-size: 20px; margin: 20px; margin-left: 30px;"
              href="/FaqPage">
              FAQ
            </ion-button>
            <ion-button class="ion-text-capitalize" style="font-size: 20px; margin: 20px; margin-left: 30px;"
              href="/ContactUs">
              Contact Us
            </ion-button>
            <ion-button class="ion-text-capitalize" style="font-size: 20px; margin: 20px; margin-left: 30px;"
              href="/profile">
              Profile
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-row>
    </ion-header>
    <ion-content>
      <ion-grid>
        <h style="color: black; margin-left: 240px; font-size: 40px; font-weight: bold;">Profile</h>
        <ion-row>
          <div style="height: 50%; display: flex; justify-content: start; margin-left: 100px;">
            <ion-card class="card" style="justify-content: flex-start; align-items: center;">
              <ion-card-header>
                <ion-card-title class="title"
                  style="color: black; margin-top: 10px; font-size: 25px; font-weight: bold;">Profile
                  Picture</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <img src="https://i.postimg.cc/T2zvDWwt/profile.png" style="height: 200px; width: 200px; margin: 40px;">
              </ion-card-content>
              <ion-card-content style="text-align: center;">
                <ion-button class="ion-text-capitalize" expand="block" fill="outline" color="light">Ganti
                  Gambar</ion-button>
                <h style="color: grey;">Besar file: maksimum 10 MB. <br>Ekstensi file yang diperbolehkan: .JPG .JPEG
                  .PNG</h>
              </ion-card-content>
            </ion-card>
          </div>
          <div style="height: 50%; display: flex; justify-content: flex-end; margin-left: 100px;">
            <ion-card class="card" style="justify-content: flex-start; align-items: center;">
              <ion-card-header>
                <ion-card-title class="title"
                  style="color: black; font-size: 25px; font-weight: bold; margin-left: 40px;">Ubah
                  Biodata</ion-card-title>
              </ion-card-header>
              <ion-grid>
                <ion-row>
                  <ion-card-content style="font-size:20px; justify-content: center; padding: px; color: grey;">
                    <ion-row>
                      <ion-col style="width: 300px; font-size:20px; justify-content: center; color: grey;">
                        Nama {{ firstname }} {{ lastname }}
                      </ion-col>
                      <ion-col>
                        <ion-button class="ion-text-capitalize" fill="clear" style="color: #00DC72;">Ubah</ion-button>
                      </ion-col>
                    </ion-row>
                    <ion-row>
                      <ion-col style="width: 450px; font-size:20px; justify-content: center; color: grey;">
                        Tanggal lahir {{ date }}
                      </ion-col>
                      <ion-col>
                        <ion-button class="ion-text-capitalize" fill="clear" style="color: #00DC72;">Ubah</ion-button>
                      </ion-col>
                    </ion-row>
                    <ion-row>
                      <ion-col style="font-size:20px; justify-content: center; color: grey;">
                        Gender {{ gender }}
                      </ion-col>
                      <ion-col>
                        <ion-button class="ion-text-capitalize" fill="clear" style="color: #00DC72;">Ubah</ion-button>
                      </ion-col>
                    </ion-row>
                  </ion-card-content>
                </ion-row>
                <ion-card-header>
                  <ion-card-title class="title"
                    style="text-align: center; color: black; margin-top: 10px; font-size: 25px; font-weight: bold; justify-content: center;">Ubah
                    Kontak</ion-card-title>
                </ion-card-header>
                <ion-row>
                  <ion-card-content style="font-size:20px; justify-content: center; padding:34px 50px; color: grey;">
                    <ion-col style="font-size:20px; justify-content: center; color: grey;">
                      Email
                    </ion-col>
                    <ion-col style="font-size:20px; justify-content: center; color: grey;">
                      {{ email }}
                    </ion-col>
                    <ion-col>
                      <ion-button class="ion-text-capitalize" fill="clear" style="color: #00DC72;">Ubah</ion-button><br>
                    </ion-col>
                    <ion-col style="font-size:20px; justify-content: center; color: grey;">
                      No Telp
                    </ion-col>
                    <ion-col style="font-size:20px; justify-content: center; color: grey;">
                      {{ notelp }}
                    </ion-col>
                    <ion-col>
                      <ion-button class="ion-text-capitalize" fill="clear" style="color: #00DC72;">Ubah</ion-button><br>
                    </ion-col>
                    <ion-button fill="outline" style="color:grey; --border-color: grey;" shape="round">Ubah
                      Sandi</ion-button><br>
                    <ion-button fill="outline" style="color:grey; --border-color: grey;" shape="round"
                      v-on:click="logout()">Logout</ion-button>
                  </ion-card-content>
                </ion-row>
              </ion-grid>
            </ion-card>
          </div>
        </ion-row>
      </ion-grid>
    </ion-content>
    <ion-footer>
    </ion-footer>
  </ion-page>
</template>
  
<script>
import { IonContent, IonPage, IonToolbar, IonTitle, IonRow, IonButtons, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProfilePage',
  components: {
    IonContent,
    IonPage, IonToolbar, IonTitle, IonRow, IonButtons, IonButton,
  },
  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      date: '',
      gender: '',
      notelp: '',
      image: '',
      password: '',
    }
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "LandingPage" })
    }
  },
  mounted() {
    let user = localStorage.getItem('user');
    this.firstname = JSON.parse(user).firstname;
    this.lastname = JSON.parse(user).lastname;
    this.email = JSON.parse(user).email;
    this.date = JSON.parse(user).date;
    this.gender = JSON.parse(user).gender;
    this.notelp = JSON.parse(user).notelp;
    this.image = JSON.parse(user).image;
    this.password = JSON.parse(user).password;
    if (!user) {
      this.$router.push({ name: 'LandingPage' })
    }
  }
});
</script>
<style>
* {
  margin: 0;
  padding: 0;
  color: rgb(255, 255, 255);
  font-size: large;
}

.ion-content {
  color: black;
}

/* iOS places the subtitle above the title */
ion-card-header.ios {
  display: flex;
  flex-flow: column-reverse;
}
</style>