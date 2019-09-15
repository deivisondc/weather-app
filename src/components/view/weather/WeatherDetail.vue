<template>
  <div class="weather-container">
    <NavHeader>
    </NavHeader>

    <CurrentWeather
      :currentTemp="weather.main.temp"
      :cityName="weather.name"
      :weatherIconUrl="weatherIcon">
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
      <div v-for="day in forecast.list" :key="day.dt" class="forecast-list">
        <p> {{ day.dt | moment('dddd') }} </p>
        <img :src="`${weatherIconUrl + day.weather[0].icon}.png`" />
        <span class="forecast-list-min-max">
          <p> {{ day.main.temp_max }} </p>
          <p> {{ day.main.temp_min }} </p>
        </span>
      </div>

      <hr>
      <ForecastCurrentDayExtraInfo
        :wind="weather.wind.speed"
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
import ForecastCurrentDayExtraInfo from '@/components/weatherDetails/ForecastCurrentDayExtraInfo';

export default {
  components: {
    NavHeader,
    CurrentWeather,
    ForecastCurrentDayWeather,
    ForecastRainHumidityInfo,
    ForecastCurrentDayExtraInfo,
  },
  computed: {
    ...storeHelper,

    windDegressFormated() {
      if (this.weather.wind.deg) {
        const deg = this.weather.wind.deg;
        if (deg > 11.25 && deg <= 33.75) return 'NNE'
        if (deg > 33.75 && deg <= 56.25) return 'NE'
        if (deg > 56.25 && deg <= 78.75) return 'ENE'
        if (deg > 78.75 && deg <= 101.25) return 'E'
        if (deg > 101.25 && deg <= 123.75) return 'ESE'
        if (deg > 123.75 && deg <= 146.25) return 'SE'
        if (deg > 146.25 && deg <= 168.75) return 'SSE'
        if (deg > 168.75 && deg <= 191.25) return 'S'
        if (deg > 191.25 && deg <= 213.75) return 'SSW'
        if (deg > 213.75 && deg <= 236.25) return 'SW'
        if (deg > 236.25 && deg <= 258.75) return 'WSW'
        if (deg > 258.75 && deg <= 281.25) return 'W'
        if (deg > 281.25 && deg <= 303.75) return 'WNW'
        if (deg > 303.75 && deg <= 326.25) return 'NW'
        if (deg > 326.25 && deg <= 348.75) return 'NNW'

        return 'N';
      }
    },

    weatherIconUrl() {
      return process.env.VUE_APP_OPENWEATHER_BASE_ICON_URL;
    },
    weatherIcon() {
      if (this.weather) {
        return `${this.weatherIconUrl + this.weather.weather[0].icon}@2x.png`
      }
    }
  },
  created() {
    this.$store.dispatch('weather/fetchWeatherFromCity')
  }
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
