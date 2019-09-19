<template>
  <el-row :gutter="5">
    <span v-if="isLoading">
      <el-col :span="14">
        <p class="loading"></p>
      </el-col>
      <el-col :span="6" :offset="4">
        <p class="loading"></p>
      </el-col>
    </span>

    <span v-if="!isLoading">
      <el-col :span="5">
        <p class="light-gray">Today</p>
      </el-col>
      <el-col :span="5">
        <p class="dark-gray">{{ new Date() | moment('dddd') }}</p>
      </el-col>

      <el-col :span="3" :offset="8">
        <p class="dark-gray align-right">{{ this.round(this.maxTemperature) }}</p>
      </el-col>
      <el-col :span="3">
        <p class="light-gray align-right">{{ this.round(this.minTemperature) }}</p>
      </el-col>
    </span>
  </el-row>
</template>

<script>
import tools from '@/mixins/tools';

import storeHelper from '@/helpers/storeHelper';

export default {
  mixins: [tools],
  props: {
    maxTemperature: null,
    minTemperature: null,
  },
  computed: {
    ...storeHelper.computed,
  },
};
</script>

<style lang="scss" scoped>

  p {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 0.9em;
    margin: 5px 0px;
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
