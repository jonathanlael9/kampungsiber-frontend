<template>
  <div class="text-dark p-3">
    <form action="">
      <div class="bg-secondary text-center p-2">
        <img
          class="rounded-circle"
          src="assets/images/placeholder_user.png"
          height="200"
          width="200"
        />
      </div>
      <div class="detail">
        <img src="assets/images/account.png" alt="" />
        <p class="">Ujang Saepuloh</p>
      </div>
      <sup class="specs align-baseline">Laravel, PHP, HTML</sup>
      <div class="detail">
        <img src="assets/images/calendar.png" alt="" />
        <p>Monday-Friday</p>
      </div>
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
  name: "MentorBeforeVue",
});
</script>
