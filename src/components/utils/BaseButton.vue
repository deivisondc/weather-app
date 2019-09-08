<template>
  <el-button
    circle
    :disabled="disabled"
    :type="color"
    @click="teste">
  </el-button>
</template>

<script>
export default {
  props: {
    color: String,
    disabled: Boolean,
  },
  methods: {
    teste() {
      this.$emit('click', 'WeatherDetail')
    }
  }
};
</script>

<style>
  .el-button {
    width: 80px;
    height: 80px;
  }

</style>
