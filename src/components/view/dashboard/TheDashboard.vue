<template>
  <BaseLayout>
      <div class="header">
        <div class="clock">
          {{ time | moment("HH:mm:ss") }}
        </div>
      </div>
      <div class="buttons-container">
        <div class="buttons-row">
          <BaseCircleButton
            :disabled="i !== 2"
            :color="i == 2 ? 'primary' : 'info'"
            v-for="i in 3"
            :key="i"
            @click="handleClick"
          />
        </div>
        <div class="buttons-row">
          <BaseCircleButton
            :disabled="true"
            color="info"
            v-for="i in 3"
            :key="i"
          />
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
      this.time = new Date();
    }, 1000);
  },
  methods: {
    handleClick(data) {
      this.$router.push({ name: data });
    },
  },
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
</style>
