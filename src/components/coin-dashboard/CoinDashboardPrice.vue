<template>
  <div class="flex items-start flex-col py-4">
    <h2 class="text-gray-600 text-lg">Current Price:</h2>
    <h3 class="font-semibold text-gray-800 text-2xl flex items-center">
      ${{ props.price }}
      <span
        class="text-base bg-gray-200 p-1 text-green-600 rounded flex items-center justify-around ml-2"
      >
        <i class="fa-solid fa-caret-up mr-1 text-2xl"></i>
        {{ props.priceChangePercentage24h }}%
      </span>
    </h3>
  </div>
</template>

<script setup>
const props = defineProps(['price', 'priceChangePercentage24h']);
</script>
