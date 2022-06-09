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

    <!-- CoinDashboard History -->
    <CoinDashboardHistory :coinId="coinId" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useCoinData } from '../../composables/coinData';
import supportedCoins from '../../utils/supportedCoins';

import CoinDashboardTitle from './CoinDashboardTitle.vue';
import CoinDashboardPrice from './CoinDashboardPrice.vue';
import CoinDashboardStats from './CoinDashboardStats.vue';
import CoinDashboardDescription from './CoinDescription.vue';
import CoinDashboardHistory from './CoinDashboardHistory.vue';

const route = useRoute();

// Get Route from URL params
let idFromParams = route.params.coinId;

// Check if coinId from URL parameter is supported
let idIsSupported = supportedCoins.some((coin) => coin.id === idFromParams);

// If id from params is not supported defaults to 'bitcoin'
const coinId = ref(idIsSupported ? idFromParams : 'bitcoin');

const coin = useCoinData(coinId.value);
</script>
