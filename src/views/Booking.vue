<template>
    <ion-page>
        <ion-content>
            <NavbarVue />
            <div class="container-fluid bg-light text-dark p-4">
                <div class="text-center mb-5">
                    <h1>Search Mentor, Make An Appointment</h1>
                    <h5>Discover the best mentors</h5>
                </div>
                <div class="row mb-3">
                    <div class="col-2">
                        <a href="#" class="btn btn-secondary d-block">Your name</a>
                    </div>
                    <div class="col-2">
                        <a href="#" class="btn btn-secondary d-block">Phone Or Email</a>
                    </div>
                    <div class="col-2">
                        <a href="#" class="btn btn-success d-block">Submit</a>
                    </div>
                    <div class="col-3"></div>
                    <div class="col">
                        Consultation for :
                        <ul class="booking-type">
                            <li>Myself</li>
                            <li>Other</li>
                        </ul>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <form action="" method="get">
                            <div class="form-group mb-3">
                                <label for="" class="form-label fw-bold">Search</label>
                                <div class="input-group">
                                    <input type="text" placeholder="Search" class="form-control">
                                    <input type="submit" value="&#128269;" class="input-group-text">
                                </div>
                            </div>
                            <div class="form-group mb-3">
                                <label for="" class="form-label fw-bold">Country</label>
                                <select class="form-control" name="" id="">
                                    <option value="">Indonesia</option>
                                </select>
                            </div>
                            <div class="form-group h-25 overflow-auto bg-secondary bg-opacity-25 p-2">
                                <label for="" class="fw-bold form-label">Specialty</label>
                                <div class="form-check">
                                    <input type="checkbox" value="php" name="" id="" class="form-check-input"><label for="" class="form-check-label">PHP</label>
                                </div>
                                <div class="form-check">
                                    <input type="checkbox" value="python" name="" id="" class="form-check-input"><label for="" class="form-check-label">Python</label>
                                </div>
                                <div class="form-check">
                                    <input type="checkbox" value="cpp" name="" id="" class="form-check-input"><label for="" class="form-check-label">C++</label>
                                </div>
                                <div class="form-check">
                                    <input type="checkbox" value="c" name="" id="" class="form-check-input"><label for="" class="form-check-label">C</label>
                                </div>
                                <div class="form-check">
                                    <input type="checkbox" value="java" name="" id="" class="form-check-input"><label for="" class="form-check-label">Java</label>
                                </div>
                            </div>
                        </form>
                    </div>
                    <li class="col-9 d-flex flex-row flex-wrap gap-1" v-for="mentor in collectionOfMentor" :key="mentor.id">
                        <MentorSelect :data="mentor" />        
                    </li>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>
<style scoped>
.box-green{
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: green;
    border-radius: 100%;
}
.box-grey{
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: grey;
    border-radius: 100%;
}
.booking-type{
    display: inline;
}
.booking-type li{
    display: inline;
}
.booking-type li:nth-child(odd)::before{
    content: '\00a0\2022\00a0\00a0';
    color: green;
    font-size: 25px;
    margin-left: -35px;
}
.booking-type li:nth-child(even)::before {
    content: '\00a0\2022\00a0\00a0';
    color: grey;
    font-size: 25px;
    margin-left: 10px;
}
.mentor{
    padding: 16px;
    color: black;
    text-decoration: none;
    border: solid black 1px;
}
.mentor :hover {
    color: rgba(0,0,0,0.8);
    opacity: 0.9;
}
</style>
<script lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';
import NavbarVue from './components/Navbar.vue';
import MentorSelect from './components/MentorSelect.vue';
export default defineComponent({
    name: "BookingPage",
    components: {
        "NavbarVue":NavbarVue,
        IonPage,
        IonContent,
        MentorSelect
    },
    data: function () {
        return {
            collectionOfMentor: [
                {
                    id: 1,
                    name: "Budi",
                    price: 100_000,
                    duration: "4 minutes"
                }
            ]
        }
    }
})
</script>