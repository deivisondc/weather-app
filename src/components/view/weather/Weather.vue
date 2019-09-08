<template>
  <BaseLayout class="weather-bg">
    <div class="weather-header-container">
      Teste
    </div>

    <div class="weather-details-container">
      <router-view />
    </div>

    <div class="weather-footer-container">
    </div>
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
    background-color: #60B5CE;
    display: flex;
    flex-flow: column;
    height: 100%;
  }

  .weather-header-container {
    // flex: 0 1 100px;
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: 100px;
  }

  .weather-details-container {
    background-color: #FFF;
    margin: 0 20px;
    border-radius: 10px;
    padding: 10px;
    // flex: 1 1 auto;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
  }

  .weather-footer-container {
    // flex: 0 1 20px;
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: 20px;
  }

</style>
