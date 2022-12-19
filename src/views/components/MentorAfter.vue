<template>
  <div class="text-dark p-3">
    <div class="text-center p-2">
      <img
        class="rounded-circle"
        :src="data?.gambarMentor"
        height="200"
        width="200"/>
    </div>
    <div class="detail">
      <p class="">{{ data?.namaMentor }}</p>
    </div>
    <sup class="specs align-baseline">
      {{ data?.service }}
    </sup>
    <div class="detail">
      <img src="assets/images/calendar.png" alt="" />
      <p>{{ data?.appointment }}</p>
    </div>
    <div class="detail mb-1">
      <img src="assets/images/clock.png" alt="" />
      <p>{{ data?.time }}</p>
    </div>
    <a class="text-white bg-success rounded-4 zoomBtn">Join Zoom!</a>
  </div>
</template>
<style scoped>
.zoomBtn {
  padding: 3px 65px;
  text-decoration: none;
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
