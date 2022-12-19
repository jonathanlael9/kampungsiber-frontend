<template>
  <div class="text-dark p-3">
    <form action="">
      <div class="bg-secondary text-center p-2">
        <img
          class="rounded-circle"
          :src="data?.gambarMentor"
          height="200"
          width="200"/>
      </div>
      <div class="detail">
        <img src="assets/images/account.png" alt="" />
        <p class="">{{ data?.namaMentor }}</p>
      </div>
      <sup class="specs align-baseline">{{ data?.service }}</sup>
      <div class="detail">
        <img src="assets/images/calendar.png" alt="" />
        <p>{{ data?.appointment }}</p>
      </div>
      <div class="detail">
        <img src="assets/images/clock.png" alt="" />
        <p>{{ data?.time }}</p>
      </div>
      <input
        class="mt-3 text-white rounded-4 zoomBtn"
        type="submit"
        value="Join Zoom!"
      />
    </form>
  </div>
</template>
<style scoped>
.zoomBtn {
  padding: 0 30px;
  background-color: #000d18;
}
.specs {
  font-size: 11px;
  color: rgba(0, 0, 0, 0.4);
}
.detail p,
img {
  display: inline;
}
.detail img {
  height: 30px;
  width: 30px;
  margin-right: 5px;
  margin-left: -3px;
}
</style>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "MentorVue",
  props: {
    data: Object
  }
});
</script>
