<template>
  <div :class="backgroundClasses" style="overflow-y: overlay">
    <NavHeader
      previousLabel="Exit"
      @clickPrevious="goPrevious"
      :showList="false"
      :showNext="false"
    />
    <el-row type="flex" justify="center">
      <p>Select a city or add a new one</p>
    </el-row>
    <el-row type="flex" class="cities-list">
      <button class="weather-buttom weather-buttom-add" @click="addWeather">
        <p>+</p>
        <i/>
      </button>
      <button
        v-for="(value, key) in weatherList"
        :key="key"
        :class="buttomClasses(value.nightTime)"
        @click="weatherDetail(value.id)"
      >
        <IconWrapper
          class="weather-buttom-icon"
          :iconName="value.icon"
        />
        <p class="city-name">{{ value.name }}</p>
        <i></i>
      </button>
    </el-row>
  </div>
</template>

<script>
import tools from '@/mixins/tools';

import NavHeader from '@/components/layout/NavHeader';
import IconWrapper from '@/components/icons/IconWrapper';

export default {
  mixins: [tools],
  components: {
    NavHeader,
    IconWrapper,
  },
  computed: {
    backgroundClasses() {
      return {
        'weather-container': true,
        'weather-container-background-day': !this.isNightTime(),
        'weather-container-background-night': this.isNightTime(),
      };
    },
    weatherList() {
      if (localStorage.getItem('cities')) {
        return JSON.parse(localStorage.getItem('cities'));
      }
      return [];
    },
  },
  methods: {
    goPrevious() {
      this.$router.push({ name: 'Dashboard' });
    },
    addWeather() {
      this.$store.dispatch('weather/openNewCityForm');
    },
    weatherDetail(cityId) {
      // o que é melhor? PUSH - COMMIT? OU COMMIT-PUSH?
      this.$router.push({ name: 'WeatherDetail', params: { cityId } });
    },
    buttomClasses(nightTime) {
      return {
        'weather-buttom': true,
        'weather-buttom-added': true,
        'weather-buttom-added-day-bg': !nightTime,
        'weather-buttom-added-night-bg': nightTime,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
  .cities-list {
    margin: 0 20px;
    justify-content: left;
    flex-wrap: wrap;
  }

  .weather-buttom {
    position: relative;
    margin: 10px 5px;
    padding: 0;
    width: 80px;
    height: 80px;
    border-radius: 5px;
    overflow: hidden;

    &:hover > i {
      position: absolute;
      opacity: 0;
      top: 0;
      left: 0;

      background: linear-gradient(
        to right,
        rgba(255,255,255,0) 0%,
        rgba(255,255,255,0.03) 1%,
        rgba(255,255,255,0.6) 30%,
        rgba(255,255,255,0.85) 50%,
        rgba(255,255,255,0.85) 70%,
        rgba(255,255,255,0.85) 71%,
        rgba(255,255,255,0) 100%
      );
      width: 15%;
      height: 100%;
      transform: skew(15deg,0deg);

      animation: move;
      // animation-delay: 1s;
      animation-duration: 0.4s;
      // animation-iteration-count: infinite;
      animation-timing-function: linear;
    }

    &-add {
      border: 0;
      background-color: rgba(238, 238, 238, 0.7);

      & > p {
        color: #000;
        font-size: 3em;
        margin: 0;
      }
    }

    &-added {
      border: 0;

      &-day-bg {
        background: #FFF;
        background-color: rgb(208, 238, 247);
      }

      &-night-bg {
        background: #FFF;
        background-color: #4e585d;
      }

    }

    &-icon {
      position: absolute;
      top: -30px;
      right: -30px;
      width: 100px;
      opacity: 0.8
    }

  }

  .city-name {
    color: #000;
    position: relative;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 2px 0px;
  }

  /*  */
  @keyframes move {
    0%  { left: 0; opacity: 0; }
    25% {opacity: 1}
    30% {opacity: 1}
    48% {opacity: 1}
    75% {opacity: 0.0; left: 100%}
    100% { left: 100%}
  }

</style>
