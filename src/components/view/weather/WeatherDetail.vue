<template>
  <div v-dragscroll class="container">
    <CurrentWeather
      :currentTemp="weather.main.temp"
      :cityName="weather.name"
      :weatherIcon="weather.weather[0].icon">
    </CurrentWeather>

    <ForecastContainer>
      <template v-slot:currentDayWeather>
        <ForecastCurrentDayWeather
          :maxTemperature="weather.main.temp_max"
          :minTemperature="weather.main.temp_min">
        </ForecastCurrentDayWeather>
      </template>

      <template v-slot:rainHumidityInfo>
        <ForecastRainHumidityInfo
          :rain="rain"
          :humidity="weather.main.humidity">
        </ForecastRainHumidityInfo>
      </template>

      <ForecastInfo
        :forecastList="forecast.list">
      </ForecastInfo>

      <template v-slot:currentDayExtraInfo>
        <ForecastCurrentDayExtraInfo
          :windSpeed="weather.wind.speed"
          :windDegrees="weather.wind.deg"
          :visibility="weather.visibility"
          :uvi="weather.uvi.value">
        </ForecastCurrentDayExtraInfo>
      </template>

    </ForecastContainer>
    <div class="weather-footer-container"></div>
  </div>
</template>

<script>
import { dragscroll } from 'vue-dragscroll';

import tools from '@/mixins/tools';

import storeHelper from '@/helpers/storeHelper';

import CurrentWeather from '@/components/weatherDetails/CurrentWeather';
import ForecastContainer from '@/components/weatherDetails/ForecastContainer';
import ForecastCurrentDayWeather from '@/components/weatherDetails/ForecastCurrentDayWeather';
import ForecastRainHumidityInfo from '@/components/weatherDetails/ForecastRainHumidityInfo';
import ForecastInfo from '@/components/weatherDetails/ForecastInfo';
import ForecastCurrentDayExtraInfo from '@/components/weatherDetails/ForecastCurrentDayExtraInfo';

export default {
  mixins: [tools],
  directives: { dragscroll },
  components: {
    CurrentWeather,
    ForecastContainer,
    ForecastCurrentDayWeather,
    ForecastRainHumidityInfo,
    ForecastInfo,
    ForecastCurrentDayExtraInfo,
  },
  computed: {
    ...storeHelper.computed,
    rain() {
      if (this.weather.rain) {
        if (this.weather.rain['1h']) {
          return this.weather.rain['1h'];
        }
        if (this.weather.rain['3h']) {
          return this.weather.rain['3h'];
        }
      }
      return 0;
    },
    weatherDetailClasses() {
      return {
        'weather-container': true,
        'weather-container-background-day': !this.isNightTime(),
        'weather-container-background-night': this.isNightTime(),
      };
    },
  },
  created() {
    this.$store.dispatch('weather/fetchWeatherFromCity', this.$route.params.cityId);
  },
};
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: column;
    overflow-y: hidden;
  }
  .weather-footer-container {
    // flex: 0 1 20px;
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: 20px;
  }
  .details-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .day-info {
    display: flex;
    flex-direction: row;
    justify-content: flex-start
  }

  .day-info > p {
    margin: 0 5px;
  }

  .min-max-temp {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .min-max-temp > p {
    margin: 0 3px;
  }

  .humidity-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .forecast-list {
    display: flex;
    flex-direction: row;
    justify-content: space-between
  }

  .forecast-list-min-max {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .forecast-list-min-max > p {
    margin-left: 10px;
  }

</style>
