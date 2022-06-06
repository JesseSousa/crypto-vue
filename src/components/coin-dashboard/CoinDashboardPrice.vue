<template>
  <div class="flex items-start flex-col py-4">
    <h2 class="text-gray-600 text-lg">Current Price:</h2>
    <h3 class="font-semibold text-gray-800 text-2xl flex items-center">
      ${{ props.price }}
      <span
        class="text-base bg-gray-200 p-1 rounded flex items-center justify-around ml-2"
        :class="{
          'text-green-600': priceChangeIsPositive,
          'text-red-600': !priceChangeIsPositive,
        }"
        data-test="priceChangeBadge"
      >
        <i
          class="fa-solid mr-1 text-2xl"
          :class="{
            'fa-caret-up': priceChangeIsPositive,
            'fa-caret-down': !priceChangeIsPositive,
          }"
          data-test="priceChangeIcon"
        ></i>
        {{ Math.abs(props.priceChangePercentage24h).toFixed(1) }}%
      </span>
    </h3>
  </div>
</template>

<script setup>
import { ref, onUpdated } from 'vue';
const props = defineProps(['price', 'priceChangePercentage24h']);

const priceChangeIsPositive = ref(
  parseFloat(props.priceChangePercentage24h) >= 0
);

onUpdated(() => {
  priceChangeIsPositive.value = parseFloat(props.priceChangePercentage24h) >= 0;
});
</script>
