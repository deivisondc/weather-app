<template>
  <div class="weather-container">
    <div class="weather-header-container">
      Voltar
      <br>
      <div class="header-container">
        <div class="header-info">
          <h2>{{ weather.main.temp }} °C</h2>
          <p>{{ weather.name }}</p>
        </div>
        <div class="header-icon">
          <img v-if="weather.weather[0].icon" :src="weatherIcon" />
        </div>
      </div>
    </div>

    <div class="weather-details-container">
      <div class="details-container">
        <div class="day-info">
          <p>Today</p>
          <p> {{ new Date() | moment('dddd') }} </p>
        </div>

        <div class="min-max-temp">
          <p>{{ weather.main.temp_max }}</p>
          <p>|</p>
          <p>{{ weather.main.temp_min }}</p>
        </div>

        <!-- <p> {{ 1568138400 | moment('dddd') }} </p> -->
      </div>
      <hr>
      <div class="humidity-info">
        <div>
          <p>Chuva: {{weather.rain ? weather.rain['1h'] : 0}}mm</p>
        </div>
        <div>
          <p>Umidade: {{weather.main.humidity}}%</p>
        </div>
      </div>
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
      <div class="additional-info-container">
        <div>
          <p>Wind</p>
          <p v-if="weather.visibility">Visibility</p>
          <p>UV index</p>
        </div>
        <div class="additional-info-values">
          <p>{{windDegressFormated}} {{weather.wind.speed}}m/s</p>
          <p v-if="weather.visibility">{{weather.visibility / 1000}} km</p>
          <p>{{weather.uvi.value}}</p>
        </div>
      </div>

    </div>

    <div class="weather-footer-container">
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters('weather', ['weather', 'forecast']),

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

  .weather-header-container {
    // flex: 0 1 100px;
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: 100px;
    padding: 10px 10px;
  }

  .header-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .header-info {
    display: flex;
    flex-direction: column;
  }

  .header-icon {
    display: flex;
    justify-content: center;
    align-items: center;
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

  .additional-info-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  .additional-info-values > p {
    margin-left: 10px;
  }

  .weather-footer-container {
    // flex: 0 1 20px;
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: 20px;
  }
</style>
