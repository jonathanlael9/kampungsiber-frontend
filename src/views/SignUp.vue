<template>
    <ion-page color="primary" style="background-color: black;">
        <ion-header :translucent="true">
            <ion-toolbar style="color:#343A40; height: 113px;">
                <ion-title style="color:white; padding-top: 20px; margin-left :40px; font-size: 40px;">Kampung<span
                        style="color:#00DC72">Siber</span></ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <div style="height: 100%; display: flex; justify-content: center;">
                <ion-card class="card">
                    <ion-card-header>
                        <ion-card-title class="title">Sign Up</ion-card-title>
                        <ion-card-title class="title">Buat akun sebagai</ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                        <ion-button class="btn" fill="outline">
                            <div class="btn-text">
                                Client
                                <img src="https://i.postimg.cc/1R71cJkC/Rectangle-53.png">
                            </div>
                        </ion-button>
                        <ion-button class="btn" fill="outline">
                            <div class="btn-text">
                                Consultant
                                <img src="https://i.postimg.cc/XqPMjYKS/Rectangle-49.png">
                            </div>
                        </ion-button>
                        <h3 id="beranda">
                            Ingin kembali ke beranda? <a href="" style="color:#FF5454;text-decoration: none;">Klik disini</a>
                        </h3>
                    </ion-card-content>
                </ion-card>
            </div>
        </ion-content>
    </ion-page>
</template>
  
<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SignUp',
    components: {
        IonContent,
        IonHeader,
        IonPage,
        IonTitle,
        IonToolbar,
    },
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

.card {
    margin-top: 30px;
    width: 914px;
    align-items: center;
    border-radius: 40px;
    margin-bottom: auto;
}

.title {
    font-weight: 600;
    font-size: 40px;
    line-height: 60px;
    text-align: center;
    color: black;
    padding-top: 20px;
    padding-bottom: 10px;
}

.btn {
    --background: white;
    --border-color: black;
    --border-radius: 30px;
    --padding-start: 10px;
    --padding-end: 10px;
    --border-width: 1px;
    margin-top: 28px;
    font-weight: 500;
    font-size: 45px;
    height: 290px;
    width: 300px;
    font-family: 'Poppins';
    text-transform: none;
    margin-left: 20px;
    margin-right: 20px;

}

.btn-text{
    display: inline-block;
    text-align: center;
    letter-spacing: normal;
}
.btn-text img{
    display: block;
    padding-top: 18px;
    width: 200px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
}

#beranda{
    font-weight: 400;
font-size: 25px;
line-height: 38px;
color: #A7A4A4;
text-align: center;
padding: 50px 0px;
}
</style>