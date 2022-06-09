import { ref, onMounted, onUnmounted, watch } from 'vue';

import getDataFromApi from '../utils/getDataFromApi';

export const useCoinData = (coinIdRef) => {
  let coinId = coinIdRef.value;

  watch(coinIdRef, async () => {
    coinId = coinIdRef.value;
    coinData.value = await getDataFromApi(coinId);
  });

  const coinData = ref({});
  let mounted = false;

  const polling = async () => {
    const POLLING_INTERVAL_MS = 30000;

    if (mounted) {
      await new Promise((resolve) => setTimeout(resolve, POLLING_INTERVAL_MS));
      coinData.value = await getDataFromApi(coinId);
      polling();
    }
  };

  onMounted(async () => {
    mounted = true;
    coinData.value = await getDataFromApi(coinId);
    polling();
  });

  onUnmounted(() => {
    mounted = false;
  });

  return coinData;
};
