import Vue from 'vue';
import router from '@/router';
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
    isLoading: true,
  },

  getters: {
    weather: state => state.weather,
    forecast: state => state.forecast,
    isLoading: state => state.isLoading,
  },

  actions: {
    async fetchWeatherFromCity({ commit }, city) {
      commit('setIsLoading', true);
      if (city == 1) {
        city = {
          id: 123,
          name: 'Bauru',
        };
      } else {
        city = {
          id: 123,
          name: 'New York',
        };
      }

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
      commit('setIsLoading', false);
    },

    changeCity({ commit }, city) {
      router.push({ name: 'WeatherDetail', params: { cityId: city } })
    }
  },

  mutations: {
    setIsLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    fetchWeatherData(state, payload) {
      state.weather = payload;
    },
    fetchForecastData(state, payload) {
      state.forecast = payload;
    },
  },
};
