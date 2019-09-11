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
          <img :src="weatherIcon" />
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
          <p>{{ weather.main.temp_min }}</p>
          <p>|</p>
          <p>{{ weather.main.temp_max }}</p>
        </div>

        <!-- <p> {{ 1568138400 | moment('dddd') }} </p> -->
      </div>
      <hr>
      <div class="umidity-info">
        <div>
          <p>Chuva: {{weather.rain ? weather.rain['1h'] : 0}}mm</p>
        </div>
        <div>
          <p>Umidade: {{weather.main.umidity}}%</p>
        </div>
      </div>
      <hr>
      <div v-for="day in forecast.list" :key="day.dt" class="forecast-list">
        <p> {{ day.dt | moment('dddd') }} </p>
        <img :src="`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`" />
        <span class="forecast-list-min-max">
          <p> {{ day.main.temp_max }} </p>
          <p> {{ day.main.temp_min }} </p>
        </span>
      </div>

      <hr>
      <div class="additional-info-container">
        <div>
          <p>Wind</p>
          <p>Visibility</p>
          <p>UV index</p>
        </div>
        <div class="additional-info-values">
          <p>West {{weather.wind.speed}}m/s</p>
          <p>{{weather.visibility / 1000}} km</p>
          <p>{{uvi.value}}</p>
        </div>
      </div>

    </div>

    <div class="weather-footer-container">
    </div>
  </div>
</template>

<script>
import axios from '@/services/axios';

export default {
  data() {
    return {
      weather: null,
      forecast: null,
      uvi: null,
    }
  },
  computed: {
    weatherIcon() {
      if (this.weather) {
        return `http://openweathermap.org/img/wn/${this.weather.weather[0].icon}@2x.png`
      }
    }
  },
  created() {
    // axios.get('weather?q=Bauru&APPID=b0018a9b53705318c85a20d24cc0180d&lang=pt&units=metric')
    //   .then(res => {
    //     console.log('res', res)
    //     this.weather = res.data
    //   })
    //   .catch(err => console.log('error', err))

    this.weather = {
      name: "Bauru",
      main: {
        temp: 28.09,
        temp_min: 20,
        temp_max: 30,
        umidity: 32
      },
      visibility: 10000,
      weather: [
        {
          icon: '10d'
        }
      ],
      wind: {
        speed: 2.1,
        deg: 310
      },
      rain: {
        '1h': 5,
        '3h': 20
      }
    }
    this.forecast = {
      list: [
        {
          dt: 1568084400,
          main: {
            temp: 24.39,
            temp_min: 23.45,
            temp_max: 24.39,
            humidity: 43
          },
          weather: [
            {
              icon: "04d"
            }
          ]
        },
        {
          dt: 1568300400,
          main: {
            temp: 22.3,
            temp_min: 21.6,
            temp_max: 22.3,
            humidity: 42
          },
          weather: [
            {
              icon: "10d"
            }
          ]
        },
        {
          dt: 1568106000,
          main: {
            temp: 20.77,
            temp_min: 20.3,
            temp_max: 20.77,
            humidity: 46
          },
          weather: [
            {
              icon: "04d"
            }
          ]
        }
      ]
    },
    this.uvi = {
      value: 10.48
    }
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
    margin: 0 10px;
  }

  .min-max-temp {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .min-max-temp > p {
    margin: 0 3px;
  }

  .umidity-info {
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
