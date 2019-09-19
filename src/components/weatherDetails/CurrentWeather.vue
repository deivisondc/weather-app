<template>
  <el-row type="flex">
    <el-col :span="10" :offset="2">
      <el-row>
        <p v-if="isLoading" class="current-temp loading"></p>
        <p v-if="isLoading" class="city-name loading"></p>

        <p v-if="!isLoading" class="current-temp">
          {{ this.round(this.currentTemp) }}<sup class="degrees-symbol"> °C</sup>
        </p>
        <p v-if="!isLoading" class="city-name">{{ this.cityName }}</p>
      </el-row>
    </el-col>

    <el-col :span="10" :offset="1">
      <p v-if="isLoading" class="main-icon-placeholder loading"></p>
      <IconWrapper v-if="!isLoading" class="main-icon" :iconName="weatherIconUrl" />
    </el-col>

  </el-row>
</template>

<script>
import tools from '@/mixins/tools';

import storeHelper from '@/helpers/storeHelper';

import IconWrapper from '@/components/icons/IconWrapper';

export default {
  mixins: [tools],
  components: { IconWrapper },
  props: {
    currentTemp: null,
    cityName: null,
    weatherIcon: null,
  },
  computed: {
    ...storeHelper.computed,
    weatherIconUrl() { // ao meu ver nao tem necessidade de ser um computed aqui... perguntar pro helder
      return this.getWeatherIcon(this.weatherIcon);
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

  .main-icon {
    width: 9.5em;
    position: absolute;
    right: 0px;
    top: -25px;
  }

  .main-icon-placeholder {
    font-size: 4.5em;
    margin-top: 10px;
    margin-bottom: 0px;
    height: 1.3em;
    border-radius: 50%;
  }

  .current-temp {
    font-size: 4.5em;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 0px;
    height: 1em;
  }

  .degrees-symbol {
    position: relative;
    bottom: 1ex;
    font-size: 0.3em;
    font-weight: normal;
  }

  .city-name {
    text-transform: capitalize;
    margin-top: 5px;
    margin-bottom: 20px;
  }
</style>
