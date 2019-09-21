<template>
  <BaseLayout>
      <div class="header">
        <div class="clock">
          {{ time | moment("HH:mm:ss") }}
        </div>
      </div>
      <!-- <transition name="grow">
        <div v-show="!showButton" :class="{growMe: showButton, growMeMore: !showButton}" key="divGrow"></div>
      </transition> -->
      <div class="buttons-container">
        <!-- <el-button
          circle
          @click="showButton = !showButton"
          type="primary">
        <el-button> -->
        <div class="buttons-row">
          <BaseCircleButton :disabled="i !== 2" :color="i == 2 ? 'primary' : 'info'" v-for="i in 3" :key="i" @click="handleClick"/>
        </div>
        <div class="buttons-row">
          <BaseCircleButton :disabled="true" color="info" v-for="i in 3" :key="i"/>
        </div>

      </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from '@/components/layout/BaseLayout';
import BaseCircleButton from '@/components/utils/BaseCircleButton';

export default {
  components: { BaseLayout, BaseCircleButton },
  data() {
    return {
      time: new Date(),
    };
  },
  mounted() {
    setInterval(() => {
      this.time = new Date()
    }, 1000);
  },
  methods: {
    handleClick(data) {
      this.$router.push({ name: data })
    }
  }
};
</script>

<style lang="scss" scoped>
  .header {
    min-height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .clock {
    font-size: 4em
  }
  .buttons-container {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .buttons-row {
    margin-top: 20px;
  }

  // .growMe {
  //   position: relative;
  //   top: 50%;
  //   background-color: #990000;
  //   width: 12px;
  //   height: 12px;
  //   border-radius: 50%;
  //   margin: 0 auto;
  //   // transform: translate(-50%, -50%)
  // }

  // .growMeMore {
  //   position: fixed;
  //   top: 50px;
  //   background-color: #990000;
  //   width: 50%;
  //   height: 500px;
  //   border-radius: 8px;
  //   // transform:
  // }

  // .grow-enter-active {
  //   opacity: 1;
  //   // margin: 0 auto;
  // }

  // .grow-enter-active {
  //   transition: width 5s ease, height 5s ease;
  //   animation: growGrowMe 5s;
  // }

  // @keyframes growGrowMe {
  //   0% {
  //     top: 50%;
  //     margin: 0 auto;
  //     width: 0px;
  //     height: 0px;
  //     // margin: 0 0;
  //   }

  //   100% {
  //     width: 50%;
  //     height: 500px;

  //   }
  // }
</style>
