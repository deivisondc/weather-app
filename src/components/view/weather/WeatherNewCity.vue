<template>
  <div :class="weatherDetailClasses">
    <NavHeader
      @clickBack="back"
      :showList="false"
      :showNext="false">
    </NavHeader>

    <el-row type="flex" class="main-row">
      <el-row class="label">
        <p>Select a city</p>
      </el-row>

      <el-row>
        <el-input
          v-model="cityName"
          placeholder="Type here"
        >
        </el-input>
      </el-row>
    </el-row>

    <el-row
      type="flex"
      class="bottom-row"
    >
      <BaseButton innerText="Confirm" @click="confirm"/>
    </el-row>
  </div>
</template>

<script>
import tools from '@/mixins/tools';

import BaseButton from '@/components/utils/BaseButton';
import NavHeader from '@/components/layout/NavHeader';

export default {
  mixins: [tools],
  components: {
    BaseButton,
    NavHeader,
  },
  data() {
    return {
      cityName: '',
    };
  },
  computed: {
    weatherDetailClasses() {
      return {
        'weather-container': true,
        'weather-container-background-day': !this.isNightTime(),
        'weather-container-background-night': this.isNightTime(),
      };
    },
  },
  methods: {
    back() {
      this.$router.push({ name: 'WeatherList' });
    },
    confirm() {
      this.$store.dispatch('weather/addNewCity', this.cityName);
    },
  },
};
</script>

<style lang="scss" scoped>
  p {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: #FFF;
  }

  .weather-container {
    display: flex;
    flex-flow: column;
    height: 100%;
    min-height: 500px;
    max-height: 500px;
    border-radius: 8px;

    &-background-day {
      background: rgb(96,181,206);
      background: linear-gradient(75deg, rgba(96,181,206,1) 65%, rgba(96,181,206,0.6) 66%);
    }

    &-background-night {
      background: rgb(90,111,120);
      background: linear-gradient(75deg, rgba(90,111,120,1) 65%, rgba(90,111,120,0.6) 66%);
    }
  }

  .main-row {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 3 0 auto;
  }

  .bottom-row {
    justify-content: center;
    align-items: flex-end;
    flex: 1 0 auto;
    margin-bottom: 20px;
  }
</style>
