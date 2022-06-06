<template>
  <div>
    <div class="py-2">
      <h1 class="text-gray-600 text-lg font-semibold">{{ props.label }}</h1>
      <p class="text-lg px-4">{{ props.value }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['label', 'value']);
</script>
