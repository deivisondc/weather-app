<template>
  <div class="base-layout">
    <slot />
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
  .base-layout {
    margin: 50px auto;
    width: 23%;
    min-height: 500px;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 0 1em #000;
  }
</style>
