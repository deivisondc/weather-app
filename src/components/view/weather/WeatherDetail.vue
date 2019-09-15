<template>
  <div class="weather-container">
    <NavHeader>
    </NavHeader>

    <CurrentWeather
      :currentTemp="weather.main.temp"
      :cityName="weather.name"
      :weatherIcon="weather.weather[0].icon">
    </CurrentWeather>

    <div class="weather-details-container">
      <ForecastCurrentDayWeather
        :maxTemperature="weather.main.temp_max"
        :minTemperature="weather.main.temp_min">
      </ForecastCurrentDayWeather>
      <hr>
      <ForecastRainHumidityInfo
        :rain="weather.rain ? weather.rain['1h'] : 0"
        :humidity="weather.main.humidity">
      </ForecastRainHumidityInfo>
      <hr>
      <ForecastInfo
        :forecastList="forecast.list">
      </ForecastInfo>
      <hr>
      <ForecastCurrentDayExtraInfo
        :windSpeed="weather.wind.speed"
        :windDegrees="weather.wind.deg"
        :visibility="weather.visibility"
        :uvi="weather.uvi.value">
      </ForecastCurrentDayExtraInfo>

    </div>

    <div class="weather-footer-container">
    </div>
  </div>
</template>

<script>
import storeHelper from '@/helpers/storeHelper';

import NavHeader from '@/components/layout/NavHeader';
import CurrentWeather from '@/components/weatherDetails/CurrentWeather';
import ForecastCurrentDayWeather from '@/components/weatherDetails/ForecastCurrentDayWeather';
import ForecastRainHumidityInfo from '@/components/weatherDetails/ForecastRainHumidityInfo';
import ForecastInfo from '@/components/weatherDetails/ForecastInfo';
import ForecastCurrentDayExtraInfo from '@/components/weatherDetails/ForecastCurrentDayExtraInfo';

export default {
  components: {
    NavHeader,
    CurrentWeather,
    ForecastCurrentDayWeather,
    ForecastRainHumidityInfo,
    ForecastInfo,
    ForecastCurrentDayExtraInfo,
  },
  computed: {
    ...storeHelper,
  },
  created() {
    this.$store.dispatch('weather/fetchWeatherFromCity');
  },
};
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

  .weather-details-container {
    background-color: #FFF;
    margin: 0 20px;
    border-radius: 10px;
    padding: 10px;
    // flex: 1 1 auto;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    overflow-y: auto
  }

  .weather-footer-container {
    // flex: 0 1 20px;
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: 20px;
  }
</style>
