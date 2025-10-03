<template>
  <div>{{ msg }}</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const props = defineProps({ msg: String })
</script>
