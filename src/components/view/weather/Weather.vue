<template>
  <BaseLayout class="weather-bg">
    <router-view></router-view>
  </BaseLayout>
</template>

<script>
import BaseLayout from "@/components/layout/BaseLayout";

export default {
  components: { BaseLayout },
}
</script>

<style lang="scss" scoped>

  .weather-bg {
    display: flex;
    flex-flow: column;
    height: 100%;
  }

</style>
