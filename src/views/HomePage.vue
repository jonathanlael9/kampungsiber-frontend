<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-toolbar style="color:#343A40">
        <ion-title style="color:white">Kampung<span style="color:#00DC72">Siber</span></ion-title>
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
    <ion-col>
      
    </ion-col>
    <ion-col class="back1">
      <span class="title1">Kampung<span style="color:#00DC72">Siber</span></span>
    </ion-col>
  </ion-row>
</ion-grid>
      <!-- <ion-grid class="first">
          <ion-img src="https://cdn.discordapp.com/attachments/908419630467530823/1043603725970837594/unknown.png" alt="The Wisconsin State Capitol building in Madison, WI at night"></ion-img>
      </ion-grid>
      <div>
        <h3 style="color:black;text-align: center;">Pembelajaran  bahasa pemrograman yang tersedia</h3>
      </div> -->

      <!-- <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> -->
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
    IonPage,IonToolbar, IonTitle, IonButton, IonButtons,IonGrid,IonCol,IonRow 
  }
});
</script>

<style scoped>
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
width: 1920px;
height: 840px;
left: 0px;


background: linear-gradient(180deg, #000D18 0%, #021C35 100%);
}
</style>
