<script lang="ts" setup>
  defineProps<{ msg: string }>();
  function teste(param = true) {
    if (param) {
      return 1;
    } else {
      return 2;
    }
  }
</script>

<template>
  <p>{{ msg }} -- {{ teste(false) }}</p>
  <p v-if="!msg">nada</p>
</template>
