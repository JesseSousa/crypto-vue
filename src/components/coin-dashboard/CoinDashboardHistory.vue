<template>
  <div class="mt-4 p-2 bg-stone-200 rounded">
    <h2 class="text-lg font-semibold text-gray-800">Historical Data</h2>
    <form class="flex flex-col items-center p-4" @submit.prevent="getData()">
      <div class="mb-3">
        <label for="date" class="block mb-2 text-center text-gray-700">
          Choose a Date:
        </label>
        <input
          type="date"
          v-model="date"
          required
          id="date"
          class="border border-gray-500 rounded p-2 text-gray-700 focus:border-emerald-600 outline-none"
          min="2014-12-31"
          :max="today"
        />
      </div>
      <button
        type="submit"
        class="bg-emerald-400 py-1 px-2 rounded text-white font-semibold hover:bg-emerald-600 transition-colors duration-200 ease-in-out"
      >
        Get Data
      </button>
    </form>
    <CoinDashboardHistoryData
      :price="historicalData.price"
      :marketCap="historicalData.marketCap"
      :date="historicalData.date"
      v-if="hasData"
    />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

import getHistoricalDataFromApi from '../../utils/getHistoricalDataFromApi';
import CoinDashboardHistoryData from './CoinDashboardHistoryData.vue';

const props = defineProps(['coinId']);

// Today's date in format YYYY-MM-DD
// used in date input max attribute
const today = new Date().toLocaleDateString('en-ca');

// V-model for date input
const date = ref('');

const historicalData = ref({});
const hasData = ref(false);

watch(
  () => props.coinId,
  (newCoinId) => {
    hasData.value = false;
    getData(newCoinId);
  }
);

const getData = async () => {
  const [year, month, day] = date.value.split('-');

  historicalData.value = await getHistoricalDataFromApi(
    props.coinId,
    `${day}-${month}-${year}`
  );

  hasData.value = true;
};
</script>
