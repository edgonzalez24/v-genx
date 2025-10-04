<template>
  <div>{{ msg }}</div>
</template>

<script lang="ts" setup>
interface Props {
  msg: string
}

const props = defineProps<Props>()
</script>
