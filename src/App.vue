<script setup>
import AppContainer from './components/AppContainer.vue';
import TheNavbar from './components/TheNavbar.vue';
import CoinDashboard from './components/coin-dashboard/CoinDashboard.vue';
</script>

<template>
  <div>
    <TheNavbar />
    <app-container>
      <CoinDashboard />
    </app-container>
  </div>
</template>

<style></style>
