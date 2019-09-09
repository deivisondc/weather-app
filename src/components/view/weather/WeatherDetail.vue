<template>
  <div class="weather-container">
    <div class="weather-header-container">
      Teste
    </div>

    <div class="weather-details-container">
      <h2> Detail </h2>
    </div>

    <div class="weather-footer-container">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .weather-container {
    background-color: #60B5CE;
    display: flex;
    flex-flow: column;
    height: 100%;
    min-height: 500px;
    max-height: 500px;
    border-radius: 8px;
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
