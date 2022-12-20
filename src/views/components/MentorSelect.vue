<template>
<a :href="`/booking-consultation/${data?.id}`" class="mentor">
    <section>
        <ul class="booking-type">
            <li>Available</li>
        </ul>
        <div class="text-center">
            <img src="assets/images/placeholder_user.png" alt="" height="200" width="200">
            <h4 class="fw-bold">{{data?.name}}</h4>
            <p>Rp.{{data?.price}}</p>
            <p>({{ data?.duration }} minutes)</p>
        </div>
    </section>
</a>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'MentorSelect',
    props: {
        data: Object
    }   
})
</script>
