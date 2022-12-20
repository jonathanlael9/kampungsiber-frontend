<template>
    <ion-page>
        <ion-content>
            <NavbarVue/>
            <div class="container-fluid bg-light text-dark p-3 clearfix">
                <div class="fw-bold fs-3 mb-3">
                    <img src="assets/images/info.png" alt="" width="30" height="30">
                    Payment
                </div>
                <!-- TODO : rework this to work with xendit integration -->
                <span class="fs-4">Virtual Account</span>
                <div class="d-flex align-bottom flex-column w-50 gap-1 mb-3">
                    <a href="booking-consultation/payment/detail" class="border border-1 border-dark payment-method">
                        <img src="assets/images/mandiri-brand.png" alt=""
                        height="110" width="200">
                        <span class="mx-2 fs-5">Mandiri Virtual Account</span>
                    </a>
                    <a href="booking-consultation/payment/detail" class="border border-1 border-dark payment-method">
                        <img src="assets/images/bni-brand.png" alt="" 
                        height="110" width="200">
                        <span class="mx-2 fs-5">BNI Virtual Account</span>
                    </a>
                    <a href="booking-consultation/payment/detail" class="border border-1 border-dark payment-method">
                        <img src="assets/images/bca-brand.png" alt=""
                        height="110" width="200">
                        <span class="mx-2 fs-5">BCA Virtual Account</span>
                    </a>
                </div>
                <span class="fs-4">Minimarket</span>
                <div class="d-flex align-bottom flex-column w-50 gap-1">
                    <a href="booking-consultation/payment/detail" class="border border-1 border-dark payment-method">
                        <img src="assets/images/indomaret-brand.png" alt="" height="110" width="200">
                        <span class="mx-2 fs-5">Indomaret</span>
                    </a>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>
<style scoped>
.payment-method{
    text-decoration: none;
    color: black;
}
/* .payment-method img{
    height: auto;
} */

</style>
<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent } from '@ionic/vue';
import NavbarVue from './components/Navbar.vue';
export default defineComponent({
    name: "PaymentPage",
    components: {
        NavbarVue,
        IonPage,
        IonContent
    }
});
</script>