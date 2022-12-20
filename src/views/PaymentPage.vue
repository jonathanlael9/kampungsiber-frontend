<template>
    <ion-page>
        <ion-content>
            <NavbarVue />
            <div class="container-fluid bg-light text-dark p-4">
                <div class="fw-bold fs-3 mb-3">
                    <img src="assets/images/info.png" alt="" width="30" height="30">
                    Payment Page
                </div>
                <!-- TODO: rework this page so it can be loaded with the corresponding payment method -->
                <span>Payment Deadline</span>
                <div class="row">
                    <div class="col-11 fw-bold">
                        Sunday, 11 July 2022 10.00 AM
                    </div>
                    <div class="col-1 text-warning opacity-50">23:59:49</div>
                </div>
                <hr class="border border-5 border-secondary bg-secondary opacity-100">
                <div class="row">
                    <div class="col-10 fw-bold fs-4">
                        Mandiri Virtual Account
                    </div>
                    <div class="col-2">
                        <img src="assets/images/mandiri-brand.png" alt="">
                    </div>
                </div>
                <hr class="border bg-dark opacity-100">
                <span>Virtual Account Number</span>
                <div class="row mb-3">
                    <div class="col-10 text-secondary">12345678910</div>
                    <div class="col-2">
                        <button class="bg-light text-dark">
                            copy <img src="assets/images/copy.png" alt="" height="25" width="25">
                        </button>
                    </div>
                </div>
                <span>Total payment</span>
                <div class="row">
                    <div class="col-10 fw-bold">110.000</div>
                    <div class="col-2">
                        <details>
                            <summary>See detail</summary>
                            <p>Empty</p>
                        </details>
                    </div>
                </div>
                <hr class="border bg-dark opacity-100">
                <div class="text-center">
                    <a href="#" class="btn btn-success">See how to pay</a>
                </div>
                <hr class="border border-5 border-secondary bg-secondary opacity-100">
                <div class="text-center">
                    <p>Your order will be forwarded to the system after the payment is verified</p>
                    <a href="/booking-consultation/payment/success" class="btn btn-success w-25">???</a>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';
import NavbarVue from './components/Navbar.vue';
export default defineComponent({
    name: "PaymentPage",
    components: {
        NavbarVue,
        IonPage,
        IonContent
    }
})
</script>