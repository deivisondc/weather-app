<template>
  <div class="weather-details-container">
    <slot name="currentDayWeather" />
    <hr>
    <slot name="rainHumidityInfo" />
    <hr>
    <slot />
    <hr>
    <slot name="currentDayExtraInfo" />
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>

  .weather-details-container {
    background-color: #F6F6F6;
    margin: 0 20px;
    border-radius: 10px;
    padding: 10px;
    // flex: 1 1 auto;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    overflow-y: auto
  }

</style>
