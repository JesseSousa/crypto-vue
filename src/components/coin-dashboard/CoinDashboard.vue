<template>
  <div class="w-full p-4 md:px-8 md:py-2">
    <CoinDashboardTitle
      :name="coin.name"
      :image="coin.image"
      :symbol="coin.symbol"
    />
  </div>
</template>

<script setup>
import { useCoinData } from '../../composables/coinData';
import CoinDashboardTitle from './CoinDashboardTitle.vue';

const coin = useCoinData('bitcoin');
</script>
