
<template>
    <ion-page>
        <ion-content>
            <NavbarVue/>
            <div class="container-fluid bg-light text-dark clearfix p-4">
                <ul>
                    <li class="mb-3">
                        <p class="fw-bolder fs-4">Your Selected Mentors</p>
                        <section class="bg-secondary bg-opacity-25 w-25 p-2 rounded-3">
                            <div class="row">
                                <div class="col-5">
                                    <img src="assets/images/placeholder_user.png" alt="" width="100" height="100">
                                </div>
                                <div class="col-7 align-bottom pt-3">
                                    <p class="fw-bold">Budi</p>
                                    <span>Price Rp.100.000</span>
                                </div>
                            </div>
                        </section>
                    </li>
                    <li class="mb-3">
                        <p class="fw-bolder fs-4">Select The Date</p>
                        <div class="input-group w-25">
                            <input type="datetime-local" name="" id="" class="form-control">
                        </div>
                    </li>
                    <li class="mb-3 ">
                        <p class="fw-bolder fs-4">Appointment Type</p>
                        <div class="row w-50 bg-secondary p-3 rounded-3 bg-opacity-25 text">
                            <div class="col-4 form-check">
                                <input type="radio" name="appointment_type" id="" class="form-check-input">
                                <label for="" class="form-check-label">Video Call</label>
                            </div>
                            <div class="col-4 form-check">
                                <input type="radio" name="appointment_type" id="" 
                                class="form-check-input">
                                <label for="" class="form-check-label">Zoom</label>
                            </div>
                            <div class="col-4 form-check">
                                <input type="radio" name="appointment_type" id="" class="form-check-input">
                                <label for="" class="form-check-label">Gmeet</label>
                            </div>
                        </div>
                    </li>
                </ul>
                <!-- uncomment this when deciding to integrate with web-service -->
                <!-- <input type="submit" value="Next" class="btn btn-success float-end mb-3 w-25"> -->
                <a :href="`/booking-consultation/${$route.params.id}/info`" class="btn btn-success float-end mb-3 w-25">Next</a>
            </div>
        </ion-content>
    </ion-page>
</template>
<style scoped>
</style>
<script lang="ts">
import { IonContent, IonPage } from '@ionic/vue';
import { defineComponent } from 'vue';
import NavbarVue from './components/Navbar.vue';
export default defineComponent({
    name: "SelectMentorPage",
    components: {
        "NavbarVue" : NavbarVue,
        IonContent,
        IonPage
    }
});
</script>