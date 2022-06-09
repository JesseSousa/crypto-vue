<template>
  <div class="w-full flex justify-center pt-4">
    <div>
      <label class="text-gray-700">Choose a coin: </label>
      <select v-model="selectedCoin" class="p-2 rounded">
        <option v-for="coin of coins" :key="coin.id" :value="coin.id">
          {{ coin.symbol }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue';
import supportedCoins from '../utils/supportedCoins';

const coinId = inject('coinId');

const coins = ref(supportedCoins);
const selectedCoin = ref(coinId);
</script>
