import Vue from 'vue';
import router from '@/router';
import axios from '@/services/axios';
import tools from '@/mixins/tools';

export default {
  namespaced: true,

  state: {
    cityId: null,
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
    cityId: state => state.cityId,
    weather: state => state.weather,
    forecast: state => state.forecast,
    isLoading: state => state.isLoading,
  },

  actions: {
    async fetchWeatherFromCity({ commit }, cityId) {
      commit('setIsLoading', true);

      const params = {
        id: cityId,
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

      let cities = [];
      if (localStorage.getItem('cities')) {
        cities = JSON.parse(localStorage.getItem('cities'), true);

        const index = cities.map(m => m.id).indexOf(parseInt(cityId, 10));
        if (index > -1) {
          cities[index].icon = tools.methods.getWeatherIcon(weather.weather[0].icon);
          cities[index].nightTime = Vue.moment().hours() <= 6 || Vue.moment().hours() >= 18;
        }

        localStorage.setItem('cities', JSON.stringify(cities));
      }


      commit('fetchWeatherData', weather);
      commit('fetchForecastData', forecast);
      commit('setIsLoading', false);
    },

    async addNewCity(context, cityName) {
      const params = {
        q: cityName,
        APPID: process.env.VUE_APP_OPENWEATHER_API_KEY,
        lang: 'pt',
        units: 'metric',
      };

      await axios.get('weather', { params })
        .then((res) => {
          let cities = [];
          if (localStorage.getItem('cities')) {
            cities = JSON.parse(localStorage.getItem('cities'), true);
          }

          cities.push({ id: res.data.id, name: res.data.name });
          localStorage.setItem('cities', JSON.stringify(cities));
          router.push({ name: 'WeatherDetail', params: { cityId: res.data.id } });
        });
    },

    changeCity({ commit }, cityId) {
      router.push({ name: 'WeatherDetail', params: { cityId } });
    },
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
