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
                        <ion-card-title class="title">Sign In</ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                        <h2 class="signin">
                            Email
                        </h2>
                        <div class="textbox">
                            <ion-input class="text-box" type="email" placeholder="...@mail.com"></ion-input>
                        </div>
                        <h2 class="signin">
                            Password
                        </h2>
                        <div class="textbox">
                            <ion-input class="text-box" type="password" placeholder="Password..."></ion-input>
                        </div>
                        <ion-button class="btn1" size="large">
                            <div class=btn1text>
                                Sign in
                            </div>
                        </ion-button>
                        <h3 id="password">
                            Lupa Password? <a href="" style="color:#FF5454;text-decoration: none;">Klik disini</a>
                        </h3>
                        <h3 id="signup">
                            Belum punya akun? <a href="" style="color:#FF5454;text-decoration: none;">Registrasi
                                disini</a>
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
    name: 'SignIn',
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
    align-items: left;
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
}

.signin {
    font-weight: 600;
    padding-top: 15px;
    font-size: 35px;
    line-height: 52px;
    color: black;
    padding-left: 41px;
}

.textbox {
    margin: 0px 30px;
    width: auto;
    height: 133px;

    background: linear-gradient(0deg, #EFEFEF, #EFEFEF), linear-gradient(0deg, #EFEFEF, #EFEFEF), #EFEFEF;
    border-radius: 30px;
}

.text-box {
    font-weight: 500;
    font-size: 35px;
    line-height: 52px;
    line-height: 110px;
    margin-left: 20px;

}

.btn1 {
    --background: #F98585;
    --color: white;
    --border-radius: 20px;
    margin-top: 40px;
    margin-left: 30px;
    text-transform: none;
    width: 232px;
    height: 100px;

}

.btn1text {
    font-weight: 400;
    font-size: 40px;
    line-height: 60px;
}

#password,
#signup {
    font-weight: 400;
    font-size: 25px;
    padding-left: 30px;
    padding-top: 20px;
    color: #A7A4A4;
}

#signup {
    padding-bottom: 127px;
}
</style>