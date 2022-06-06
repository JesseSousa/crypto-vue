<template>
  <div class="mt-6">
    <h2 class="text-lg font-semibold text-gray-800 py-2">Description</h2>
    <p v-html="props.description" class="text-gray-700 md:p-2"></p>
  </div>
</template>

<script setup>
const props = defineProps(['description']);
</script>
