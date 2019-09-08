<template>
  <div class="base-layout">
    <slot />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .base-layout {
    margin: 50px auto;
    width: 23%;
    min-height: 500px;
    border-radius: 8px;
    // padding: 20px 20px;
    background-color: #fff;
  }
</style>