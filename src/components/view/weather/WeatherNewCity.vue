<template>
  <div class="container">
    <div class="modal" v-if="isSearchingCity">
      <el-row class="loader">
        <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      </el-row>
    </div>

    <el-row type="flex" class="main-row">
      <el-row>
        <p>Select a city</p>
      </el-row>

      <el-row>
        <el-input
          v-model="cityName"
          placeholder="Type here"
          autofocus=true
        >
        </el-input>
      </el-row>
      <el-row>
        <p class="error">{{ this.errorMessage }}</p>
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

import storeHelper from '@/helpers/storeHelper';

import BaseButton from '@/components/utils/BaseButton';

export default {
  mixins: [tools],
  components: {
    BaseButton,
  },
  data() {
    return {
      cityName: '',
    };
  },
  computed: {
    ...storeHelper.computed,

    weatherDetailClasses() {
      return {
        'weather-container': true,
        'weather-container-background-day': !this.isNightTime(),
        'weather-container-background-night': this.isNightTime(),
      };
    },
  },
  methods: {
    confirm() {
      this.$store.dispatch('weather/addNewCity', this.cityName);
    },
  },
};
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
  }

  .error {
    color: #F00;
    min-height: 18px;
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

  .modal {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    left: 0;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: 10;
  }

  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex: 1 0 auto;
  }

  .lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
  }
  .lds-ellipsis div {
    position: absolute;
    top: 27px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: #fff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .lds-ellipsis div:nth-child(1) {
    left: 6px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
    left: 6px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
    left: 26px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
    left: 45px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(19px, 0);
    }
  }
</style>
