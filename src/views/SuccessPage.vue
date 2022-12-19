<template>
    <ion-page>
        <ion-content>
            <NavbarVue />
            <div class="bg-light container-fluid text-dark text-center p-4">
                <img src="assets/images/check_circle.svg" alt="" class="filter-green" height="200" width="200">
                <h1 class="fw-bold">Payment Success</h1>
                <span>Your order successfull, check your orders for the start consultation</span>
            </div>
        </ion-content>
    </ion-page>
</template>
<style scoped>
.filter-green{
    filter: invert(77%) sepia(8%) saturate(3444%) hue-rotate(72deg) brightness(100%) contrast(86%);
}
</style>
<script lang="ts">
import { defineComponent } from 'vue';
import NavbarVue from './components/Navbar.vue';
import { IonContent, IonPage } from '@ionic/vue';
export default defineComponent({
    name: "SuccessPage",
    components: {
        NavbarVue,
        IonPage,
        IonContent
    }
})
</script>