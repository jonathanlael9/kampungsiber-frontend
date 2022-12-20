<template>
    <ion-page>
        <ion-content>
            <NavbarVue />
            <div class="container-fluid bg-light text-dark p-4 clearfix">
                <section class="mb-3">
                    <div class="fw-bold">
                        <img src="assets/images/info.png" alt="" width="30" height="30">
                        Booking Info
                    </div>
                    <div class="booking-section">
                        <p class="fw-bold fs-5">Booking detail</p>
                        <div class="info bg-secondary bg-opacity-25 w-25 p-2 mb-3">
                            <img src="assets/images/info.png" alt="" width="30" height="30">
                            <span class="fs">
                                Tap enter waiting Room no earlier 10 minutes
                            </span>
                        </div>
                        <div class="time bg-secondary bg-opacity-25 p-2 rounded w-50">
                            <div class="d-flex mb-2">
                                <img src="assets/images/calendar.png" width="50" height="50" alt="">
                                <div class="mx-2 detail">
                                    <p class="fw-bold">Date & time</p>
                                    <p class="">Monday, 12 July 2022</p>
                                    <p class="">8:00 Am</p>
                                </div>
                            </div>
                            <div class="d-flex">
                                <img src="assets/images/videocam.png" alt="" width="50" height="50">
                                <div class="mx-2 detail">
                                    <p class="fw-bold">Appointment Type</p>
                                    <p>Video Call</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="fw-bold">
                        <img src="assets/images/info.png" alt="" width="30" height="30">
                        Mentors info
                    </div>
                    <div class="booking-section">
                        <div class="fw-bold bg-secondary bg-opacity-25 w-25 rounded p-2 mb-3">
                            <img src="assets/images/account.png" alt="">
                            Budi
                        </div>
                        <span class="fw-bolder">Payment Info</span>
                        <div class="row">
                            <div class="col-2">Total Price</div>
                            <div class="col-10">100.000</div>
                        </div>
                        <div class="row">
                            <div class="col-2">Tax</div>
                            <div class="col-10">10.000</div>
                        </div>
                        <hr class="border bg-dark w-25 opacity-100">
                        <div class="row fw-bold">
                            <div class="col-2">Payment Total</div>
                            <div class="col-10">110.000</div>
                        </div>
                    </div>
                </section>
                <a href="/booking-consultation/payment" class="btn btn-success float-end w-25">Next</a>
            </div>
        </ion-content>
    </ion-page>
</template>
<style scoped>
.booking-section{
    margin-left: 35px;
}
.booking-section .info{
    border-radius: 5px;
    border-left: 4px solid purple;
}
.booking-section .time > div:nth-child(1){
    border-bottom: 1px solid black;
}
.booking-section .time .detail{
    margin-top: 12px;
    line-height: 5px;
}
/* .booking-section > .row :nth-child(2){
    border-bottom: 1px solid black;
} */
</style>
<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent } from '@ionic/vue';
import NavbarVue from './components/Navbar.vue';
export default defineComponent({
    name: 'BookingInfoPage',
    components: {
        NavbarVue,
        IonPage,
        IonContent,
    }
});
</script>