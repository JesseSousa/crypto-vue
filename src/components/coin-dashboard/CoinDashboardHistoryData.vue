<template>
  <div class="text-center mt-2">
    <div
      data-test="historyData"
      class="sm:flex sm:justify-around"
      v-if="shouldRender"
    >
      <CoinDashboardStatsItem
        label="Market Cap"
        :value="'$' + props.marketCap"
        data-test="historyMarketCap"
      />
      <CoinDashboardStatsItem
        label="Price"
        :value="'$' + props.price"
        data-test="historyPrice"
      />
    </div>

    <p data-test="historyFallbackText" v-else>No Data was found</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CoinDashboardStatsItem from './CoinDashboardStatsItem.vue';

const props = defineProps(['marketCap', 'price', 'date']);

const shouldRender = ref(props.price && props.marketCap);
</script>
