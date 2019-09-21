<template>
  <el-button
    round
    :type="type"
    @click="click">
    {{ innerText }}
  </el-button>
</template>

<script>
export default {
  props: {
    innerText: String,
    type: {
      type: String,
      default: 'success',
    },
  },
  methods: {
    click() {
      this.$emit('click');
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
