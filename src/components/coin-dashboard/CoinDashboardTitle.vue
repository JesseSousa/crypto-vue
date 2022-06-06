<template>
  <div class="flex items-center self-center md:self-auto">
    <img :src="props.image" />
    <h1 class="text-3xl ml-2 font-semibold text-gray-800">
      {{ props.name }}
      <span class="text-xl text-gray-600">({{ props.symbol }})</span>
    </h1>
  </div>
</template>

<script setup>
const props = defineProps(['name', 'image', 'symbol']);
</script>
