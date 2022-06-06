<template>
  <div class="w-full p-4 md:px-8 md:py-2">
    <CoinDashboardTitle
      :name="coin.name"
      :image="coin.image"
      :symbol="coin.symbol"
    />
    <CoinDashboardPrice
      :price="coin.price"
      :priceChangePercentage24h="coin.priceChangePercentage24h"
    />
  </div>
</template>

<script setup>
import { useCoinData } from '../../composables/coinData';

import CoinDashboardTitle from './CoinDashboardTitle.vue';
import CoinDashboardPrice from './CoinDashboardPrice.vue';

const coin = useCoinData('bitcoin');
</script>
