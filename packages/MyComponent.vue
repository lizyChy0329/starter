<script lang="ts" setup>
defineProps({
  msg: String,
})
</script>

<template>
  <div>Hello {{ msg }} !</div>
</template>

<style lang="css" scoped>
.foo {
  background-color: #fff;
}
</style>
