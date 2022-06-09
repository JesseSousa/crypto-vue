<script setup>
import AppContainer from './components/AppContainer.vue';
import TheNavbar from './components/TheNavbar.vue';
</script>

<template>
  <div>
    <TheNavbar />
    <app-container>
      <router-view></router-view>
    </app-container>
  </div>
</template>

<style></style>
