import Vue from 'vue';
import axios from '@/services/axios';

export default {
  namespaced: true,

  state: {
    weather: {
      main: {},
      weather: [
        {
          icon: '',
        },
      ],
      wind: {},
      uvi: {},
    },
    forecast: {},
  },

  getters: {
    weather: state => state.weather,
    forecast: state => state.forecast,
  },

  actions: {
    async fetchWeatherFromCity({ commit }, city) {
      city = {
        id: 123,
        name: 'Bauru',
      };

      const params = {
        q: city.name,
        APPID: process.env.VUE_APP_OPENWEATHER_API_KEY,
        lang: 'pt',
        units: 'metric',
      };

      const forecast = await axios.get('forecast', { params }).then(res => res.data);
      const weather = await axios.get('weather', { params })
        .then(async (res) => {
          params.lat = forecast.city.coord.lat;
          params.lon = forecast.city.coord.lon;

          res.data.uvi = (await axios.get('uvi', { params })).data;
          return res.data;
        });

      // console.log('vuex weather', weather)
      // console.log('vuex forecast', forecast)

      const forecastListFiltered = {};
      if (forecast.list) {
        forecast.list.forEach((element) => {
          const weekday = Vue.moment.unix(element.dt).format('dddd');

          if (!forecastListFiltered[weekday]) {
            forecastListFiltered[weekday] = element;
          } else {
            if (forecastListFiltered[weekday].main.temp_min > element.main.temp_min) {
              forecastListFiltered[weekday].main.temp_min = element.main.temp_min;
            }
            if (forecastListFiltered[weekday].main.temp_max < element.main.temp_max) {
              forecastListFiltered[weekday].main.temp_max = element.main.temp_max;
            }
          }
        });
      }

      forecast.list = [];
      Object.keys(forecastListFiltered).forEach((key) => {
        forecast.list.push(forecastListFiltered[key]);
      });

      commit('fetchWeatherData', weather);
      commit('fetchForecastData', forecast);
    },
  },

  mutations: {
    fetchWeatherData(state, payload) {
      state.weather = payload;
    },
    fetchForecastData(state, payload) {
      state.forecast = payload;
    },
  },
};
