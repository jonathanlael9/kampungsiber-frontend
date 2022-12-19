<template>
  <nav class="navbar navbar-expand-lg" style="background-color: #343A40">
    <div class="container-fluid">
      <a class="navbar-brand text-white fw-bold" href="#">Kampung<strong class="text-success">Siber</strong></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
          <li class="nav-item">
            <a class="nav-link text-white" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="/dashboard">Beranda</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="/booking-consultation">Order</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">Promo</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">Inbox</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: "NavbarVue",
})
</script>