import Vue from 'vue';
import router from '@/router';
import axios from '@/services/axios';
import tools from '@/mixins/tools';
import localStorageHelper from '@/helpers/localStorageHelper';

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
    isSearchingCity: false,
    errorMessage: '',
  },

  getters: {
    cityId: state => state.cityId,
    weather: state => state.weather,
    forecast: state => state.forecast,
    isLoading: state => state.isLoading,
    isSearchingCity: state => state.isSearchingCity,
    errorMessage: state => state.errorMessage,
  },

  actions: {
    async fetchWeatherFromCity({ commit }, cityId) {
      commit('SET_IS_LOADING', true);

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
      if (localStorageHelper.getItem('cities')) {
        cities = JSON.parse(localStorageHelper.getItem('cities'), true);

        const index = cities.map(m => m.id).indexOf(parseInt(cityId, 10));
        if (index > -1) {
          cities[index].icon = tools.methods.getWeatherIcon(weather.weather[0].icon);
          cities[index].nightTime = Vue.moment().hours() <= 6 || Vue.moment().hours() >= 18;
        }

        localStorageHelper.setItem('cities', JSON.stringify(cities));
      }


      commit('FETCH_WEATHER_DATA', weather);
      commit('FETCH_FORECAST_DATA', forecast);
      commit('SET_IS_LOADING', false);
    },

    async addNewCity({ commit }, cityName) {
      commit('SET_IS_SEARCHING_CITY', true);
      const params = {
        q: cityName,
        APPID: process.env.VUE_APP_OPENWEATHER_API_KEY,
        lang: 'pt',
        units: 'metric',
      };

      await axios.get('weather', { params })
        .then((res) => {
          let cities = [];
          if (localStorageHelper.getItem('cities')) {
            cities = JSON.parse(localStorageHelper.getItem('cities'), true);
          }

          cities.push({ id: res.data.id, name: res.data.name });
          localStorageHelper.setItem('cities', JSON.stringify(cities));
          router.push({ name: 'WeatherDetail', params: { cityId: res.data.id } });
          commit('SET_IS_SEARCHING_CITY', false);
        })
        .catch((err) => {
          commit('FETCH_ERROR_MESSAGE', err.response.data.message);
          commit('SET_IS_SEARCHING_CITY', false);
        });
    },

    openNewCityForm({ commit }) {
      commit('FETCH_ERROR_MESSAGE', '');
      router.push({ name: 'WeatherNewCity' });
    },

    changeCity(context, cityId) {
      router.push({ name: 'WeatherDetail', params: { cityId } });
    },
  },

  mutations: {
    SET_IS_LOADING(state, isLoading) {
      state.isLoading = isLoading;
    },
    SET_IS_SEARCHING_CITY(state, isSearchingCity) {
      state.isSearchingCity = isSearchingCity;
    },
    FETCH_ERROR_MESSAGE(state, errorMessage) {
      state.errorMessage = errorMessage;
    },
    FETCH_WEATHER_DATA(state, payload) {
      state.weather = payload;
    },
    FETCH_FORECAST_DATA(state, payload) {
      state.forecast = payload;
    },
  },
};
