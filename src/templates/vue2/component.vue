<template>
  <div>{{ msg }}</div>
</template>

<script>
export default {
  name: '<%= name %>',
  props: {
    msg: {
      type: String,
      default: ''
    }
  }
}
</script>
