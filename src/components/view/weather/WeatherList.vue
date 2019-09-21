<template>
  <div :class="backgroundClasses">
    <NavHeader
      @clickBack="back"
      :showList="false"
      :showNext="false"
    />
    <el-row type="flex" justify="center">
      <p>Select a city or add a new one</p>
    </el-row>
    <el-row type="flex" class="cities-list">
      <button class="weather-buttom weather-buttom-add" @click="addWeather">
        <p>+</p>
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
      </button>
    </el-row>
  </div>
</template>

<script>
import tools from "@/mixins/tools";

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
      }
    },
    weatherList() {
      if (localStorage.getItem('cities')) {
        return JSON.parse(localStorage.getItem('cities'));
      }
      return [];
    },
  },
  methods: {
    back() {
      this.$router.push({ name: 'Dashboard' });
    },
    addWeather() {
      this.$router.push({ name: 'WeatherNewCity' });
    },
    weatherDetail(cityId) {
      this.$router.push({ name: 'WeatherDetail', params: { cityId } });
    },
    buttomClasses(nightTime) {
      return {
        'weather-buttom': true,
        'weather-buttom-added': true,
        'weather-buttom-added-day-bg': !nightTime,
        'weather-buttom-added-night-bg': nightTime,
      }
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

    &-add {
      border: 1px #000 dotted;
      background-color: rgba(238, 238, 238, 0.7);

      & > p {
        color: #000;
        font-size: 3em;
        margin: 0;
      }
    }

    &-added {
      border: 1px #000 solid;

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

</style>
