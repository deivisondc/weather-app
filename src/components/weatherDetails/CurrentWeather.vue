<template>
  <el-row type="flex" justify="space-between">
    <el-col :span="16" class="main-weather-info">
      <el-row>
        <p class="current-temp">{{ this.currentTempRounded }}<sup class="degrees-symbol"> °C</sup></p>
        <p class="city-name">{{ this.cityName }}</p>
      </el-row>
    </el-col>

    <el-col :span="8">
      <img :src="weatherIconUrl" />
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: {
    currentTemp: null,
    cityName: null,
    weatherIconUrl: null,
  },
  computed: {
    currentTempRounded() {
      return this.currentTemp ? Math.round(this.currentTemp) : 0;
    },
  },
};
</script>

<style lang="scss" scoped>
  p {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: #FFF;
    text-shadow: #444 0px 5px 6px;
  }

  .main-weather-info {
    margin-left: 40px;
  }

  .current-temp {
    font-size: 4.5em;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 0px;
  }

  .degrees-symbol {
    position: relative;
    bottom: 1ex;
    font-size: 0.3em;
    font-weight: normal;
  }

  .city-name {
    text-transform: capitalize;
    margin-top: -5px;
    margin-bottom: 20px;
  }
</style>
