<template>
  <div>
    <el-row :gutter="5" v-for="day in forecastList" :key="day.dt">
      <el-col :span="10">
        <p class="dark-gray">{{ day.dt | moment('dddd') }}</p>
      </el-col>
      <el-col :span="5" :offset="1">
        <IconWrapper class="forecastIcon" :iconName="getWeatherIcon(iconUrlDayOrNight(day.weather[0].icon))"/>
      </el-col>
      <el-col :span="3" :offset="2">
        <p class="dark-gray align-right">{{ round(day.main.temp_max) }}</p>
      </el-col>
      <el-col :span="3">
        <p class="light-gray align-right">{{ round(day.main.temp_min) }}</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import tools from '@/mixins/tools';

import IconWrapper from '@/components/icons/IconWrapper';

export default {
  mixins: [tools],
  components: { IconWrapper },
  props: {
    forecastList: null,
  },
  computed: {
    weatherIconUrl() {
      return process.env.VUE_APP_OPENWEATHER_BASE_ICON_URL;
    },
  },
  methods: {
    iconUrlDayOrNight(icon) {
      if (this.isNightTime()) {
        return icon.replace('d', 'n');
      }
      return icon.replace('n', 'd');
    },
  },
};
</script>

<style lang="scss" scoped>

  p {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 0.9em;
    margin: 5px 0px;
  }

  .forecastIcon {
    max-height: 30px;
    max-width: 30px;
  }

  .light-gray {
    color: #888;
  }

  .dark-gray {
    color: #444;
  }

  .align-right {
    text-align: right;
  }

</style>
