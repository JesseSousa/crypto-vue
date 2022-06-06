<template>
  <div class="w-full p-4 md:px-8 md:py-2">
    <!-- CoinDashboard Header -->
    <div class="flex flex-col md:flex-row md:justify-between">
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
    <!-- CoinDashboard Stats -->
    <CoinDashboardStats
      :marketCap="coin.marketCap"
      :low24h="coin.low24h"
      :high24h="coin.high24h"
      :totalVolume="coin.totalVolume"
      :circulatingSupply="coin.circulatingSupply"
    />
    <!-- CoinDashboard Description -->
    <CoinDashboardDescription :description="coin.description" />
  </div>
</template>

<script setup>
import { useCoinData } from '../../composables/coinData';

import CoinDashboardTitle from './CoinDashboardTitle.vue';
import CoinDashboardPrice from './CoinDashboardPrice.vue';
import CoinDashboardStats from './CoinDashboardStats.vue';
import CoinDashboardDescription from './CoinDescription.vue';

const coin = useCoinData('bitcoin');
</script>
