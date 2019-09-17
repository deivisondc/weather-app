<template>
  <div :class="weatherDetailClasses">
    <NavHeader>
    </NavHeader>

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
          :rain="weather.rain ? weather.rain['1h'] : 0"
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

    <div class="weather-footer-container">
    </div>
  </div>
</template>

<script>
import tools from '@/mixins/tools';

import storeHelper from '@/helpers/storeHelper';

import NavHeader from '@/components/layout/NavHeader';
import CurrentWeather from '@/components/weatherDetails/CurrentWeather';
import ForecastContainer from '@/components/weatherDetails/ForecastContainer';
import ForecastCurrentDayWeather from '@/components/weatherDetails/ForecastCurrentDayWeather';
import ForecastRainHumidityInfo from '@/components/weatherDetails/ForecastRainHumidityInfo';
import ForecastInfo from '@/components/weatherDetails/ForecastInfo';
import ForecastCurrentDayExtraInfo from '@/components/weatherDetails/ForecastCurrentDayExtraInfo';

export default {
  mixins: [ tools ],
  components: {
    NavHeader,
    CurrentWeather,
    ForecastContainer,
    ForecastCurrentDayWeather,
    ForecastRainHumidityInfo,
    ForecastInfo,
    ForecastCurrentDayExtraInfo,
  },
  computed: {
    ...storeHelper,
    weatherDetailClasses() {
      return {
        'weather-container': true,
        'weather-container-background-day': !this.isNightTime(),
        'weather-container-background-day': this.isNightTime(),
      }
    }
  },
  created() {
    this.$store.dispatch('weather/fetchWeatherFromCity');
  },
};
</script>

<style lang="scss" scoped>
  .weather-container {
    display: flex;
    flex-flow: column;
    height: 100%;
    min-height: 500px;
    max-height: 500px;
    border-radius: 8px;

    &-background-day {
      background: rgb(96,181,206);
      background: linear-gradient(75deg, rgba(96,181,206,1) 65%, rgba(96,181,206,0.6) 66%);
    }

    &-background-night {
      background: rgb(90,111,120);
      background: linear-gradient(75deg, rgba(90,111,120,1) 65%, rgba(90,111,120,0.6) 66%);
    }
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

  .weather-footer-container {
    // flex: 0 1 20px;
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: 20px;
  }
</style>
