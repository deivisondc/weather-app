<template>
  <div class="list-container">
    <div style="margin='0 auto'">
      <button class="weather-item add-weather-city" @click="addWeather">
        <span class="add-button"> + </span>
      </button>
      <button v-for="i in weatherList" :key="i" class="weather-item added-weather-city" @click="weatherDetail(i)">
        {{ i }}
      </button>

    </div>
  </div>
</template>

<script>
import BaseLayout from "@/components/layout/BaseLayout";

export default {
  components: { BaseLayout },
  data() {
    return {
      weatherList: [1,2,3,4,5]
    };
  },
  methods: {
    addWeather() {
      this.weatherList.push("teste");
    },
    weatherDetail(cityId) {
      this.$router.push({ name: "WeatherDetail", params: { cityId } });
    }
  },
}
</script>

<style lang="scss" scoped>
  .list-container {
    background-color: #FFFFFF;
    border-radius: 8px;
    display: flex;
    flex: 1 1 auto;
  }
  .weather-list-container {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .weather-item {
    width: 80px;
    height: 80px;
    border-radius: 5px;
    margin: 10px;
  }

  .add-weather-city {
    border: 1px #000 dotted;
    background-color: #eee;
  }

  .add-button {
    font-weight: bold
  }

  .added-weather-city {
    border: 1px #000 solid;
    background-color: #b9b9ff;
  }
</style>
