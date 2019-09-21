<template>
  <div :class="weatherDetailClasses">

    <NavHeader
      @clickBack="goBack"
      @clickList="goList"
      @clickNext="goNext"
      :showBack="showBack"
      :showNext="showNext">
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
  watch: {
    weather(val) {
      console.log('watch', val)
    }
  },
  computed: {
    ...storeHelper.computed,
    rain() {
      if (this.weather.rain) {
        if (this.weather.rain['1h']) {
          return this.weather.rain['1h'];
        }
        if (this.weather.rain['3h']) {
          this.weather.rain['3h'];
        }
      }
      return 0;
    },
    cityIdIndex() {
      const cities = JSON.parse(localStorage.getItem('cities'));
      return cities.map(m => m.id).indexOf(parseInt(this.$route.params.cityId));
    },
    citiesListLength() {
      if (!localStorage.getItem('cities')) {
        return 0;
      }
      return JSON.parse(localStorage.getItem('cities')).length
    },
    showBack() {
      if (this.cityIdIndex == 0) {
        return false;
      }
      return true;
    },
    showNext() {
      if (this.cityIdIndex == this.citiesListLength - 1) {
        return false;
      }
      return true;
    },
    weatherDetailClasses() {
      return {
        'weather-container': true,
        'weather-container-background-day': !this.isNightTime(),
        'weather-container-background-night': this.isNightTime(),
      }
    }
  },
  created() {
    this.$store.dispatch('weather/fetchWeatherFromCity', this.$route.params.cityId);
  },
  methods: {
    goBack() {
      const cities = JSON.parse(localStorage.getItem('cities'));
      const index = cities.map(m => m.id).indexOf(parseInt(this.$route.params.cityId));
      this.$store.dispatch('weather/changeCity', cities[index - 1].id);
    },
    goList() {
      this.$router.push({ name: 'WeatherList' })
    },
    goNext() {
      const cities = JSON.parse(localStorage.getItem('cities'));
      const index = cities.map(m => m.id).indexOf(parseInt(this.$route.params.cityId, 10));
      this.$store.dispatch('weather/changeCity', cities[index + 1].id);
    },
  },
};
</script>

<style lang="scss" scoped>
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
