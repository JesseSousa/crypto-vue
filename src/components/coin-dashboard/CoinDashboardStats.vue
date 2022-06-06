<template>
  <div
    class="px-4 py-2 rounded bg-slate-200 lg:flex lg:justify-evenly lg:mt-6 lg:px-0"
  >
    <AppCoinDashboardStatsItem
      label="Market Cap"
      :value="`$${props.marketCap}`"
    />
    <AppCoinDashboardStatsItem
      label="24h Low / 24h High"
      :value="`$${props.low24h} / $${props.high24h}`"
    />
    <AppCoinDashboardStatsItem
      label="24h Trading Volume"
      :value="`$${props.totalVolume}`"
    />
    <AppCoinDashboardStatsItem
      label="Circulating Supply"
      :value="`$${props.circulatingSupply}`"
    />
  </div>
</template>

<script setup>
import AppCoinDashboardStatsItem from './CoinDashboardStatsItem.vue';

const props = defineProps([
  'marketCap',
  'low24h',
  'high24h',
  'totalVolume',
  'circulatingSupply',
]);
</script>
