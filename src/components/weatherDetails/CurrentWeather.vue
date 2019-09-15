<template>
  <el-row type="flex" justify="space-between">
    <el-col :span="16" class="main-weather-info">
      <el-row>
        <p class="current-temp">{{ this.round(this.currentTemp) }}<sup class="degrees-symbol"> °C</sup></p>
        <p class="city-name">{{ this.cityName }}</p>
      </el-row>
    </el-col>

    <el-col :span="8">
      <img v-if="weatherIcon" :src="weatherIconUrl" />
    </el-col>
  </el-row>
</template>

<script>
import tools from '@/mixins/tools';

export default {
  mixins: [tools],
  props: {
    currentTemp: null,
    cityName: null,
    weatherIcon: null,
  },
  computed: {
    weatherIconUrl() {
      if (this.weatherIcon) {
        return `${process.env.VUE_APP_OPENWEATHER_BASE_ICON_URL + this.weatherIcon}@2x.png`;
      }
      return null;
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
