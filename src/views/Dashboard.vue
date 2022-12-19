<template>
    <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
    <ion-page>
        <NavbarVue />
        <ion-content>
            <div v-if="mentorBooked >= 1">
                <div class="bg-white container-fluid dashboard">
                    <br>
                    <h1 class="text-dark">Your upcomming session</h1>
                    <li class="d-inline-flex align-items-center flex-row" 
                    v-for="item in mentorBookedDatas" v-bind:key="item.namaMentor">
                        <MentorAfterVue :data="item"/>
                    </li>
                </div>
            </div>
            <div v-else>
                <div class="bg-white container-fluid dashboard">
                    <h1 class="text-dark">Mentor Available</h1>
                    <li class="d-inline-flex">
                        <MentorBeforeVue />
                    </li>
                    <div class="row mt-5">
                        <div class="col-md-10">
                            <span class="text-dark fw-bold">FOR ORDER CONSULTANT</span>
                            <div>
                                <a href="" class="booking rounded-4 fst-italic">BOOKING NOW!</a>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <a href="" class="text-dark fw-bold fst-italic" 
                            style="text-decoration: none;">Need Help? Call us!</a>
                            <img src="assets/images/cs.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>
<style scoped>
.dashboard{
    padding: 15px 20px;
    height: 100%;
}
.booking{
    padding: 5px 25px;
    color: white;
    text-decoration: none;
    background-color: #343A40;
}
</style>
<script lang="ts">
    import { IonPage, IonContent } from '@ionic/vue';
    import { defineComponent } from 'vue';
    import NavbarVue from './components/Navbar.vue';
    import MentorAfterVue from './components/MentorAfter.vue';
    import MentorBeforeVue from './components/MentorBefore.vue';
    export default defineComponent({
        name: "DashboardPage",
        components: {
            "NavbarVue": NavbarVue,
            "MentorAfterVue": MentorAfterVue,
            "MentorBeforeVue": MentorBeforeVue,
            IonPage,
            IonContent
        },   
        data : function() {
            return {

                // dummy data
                mentorBooked: 1,
                mentorBookedDatas: [
                    {
                        gambarMentor: "assets/images/placeholder_user.png",
                        namaMentor: "John Doe",
                        service: "Laravel, PHP, HTML",
                        appointment: "Monday",
                        time: "09:00-10:00"
                    },
                    {
                        gambarMentor: "assets/images/placeholder_user.png",
                        namaMentor: "John Doe",
                        service: "PHP, CSS, HTML",
                        appointment: "Tuesday",
                        time: "09:00-10:00"
                    },
                    {
                        gambarMentor: "assets/images/placeholder_user.png",
                        namaMentor: "John Doe",
                        service: "Python, Pandas, Excel",
                        appointment: "Wednesday",
                        time: "09:00-10:00"
                    },
                    {
                        gambarMentor: "assets/images/placeholder_user.png",
                        namaMentor: "John Doe",
                        service: "Android, Kotlin, Java",
                        appointment: "Thursday",
                        time: "09:00-10:00"
                    },
                    {
                        gambarMentor: "assets/images/placeholder_user.png",
                        namaMentor: "John Doe",
                        service: "Rest API, Javascript, Flask",
                        appointment: "Friday",
                        time: "09:00-10:00"
                    }
                ]
            }
        }
    })
</script>