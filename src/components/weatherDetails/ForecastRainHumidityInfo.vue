<template>
  <el-row :gutter="5">

    <el-col :span="12">
      <el-row type="flex" justify="center">
        <p v-if="isLoading" class="loading light-blue-placeholder"></p>
        <p v-if="!isLoading" class="light-blue">{{ this.rain }}mm</p>
      </el-row>
      <el-row type="flex" justify="center">
        <p v-if="isLoading" class="loading"></p>
        <p v-if="!isLoading" class="light-gray">Rain</p>
      </el-row>
    </el-col>

    <el-col :span="12">
      <el-row type="flex" justify="center">
        <p v-if="isLoading" class="light-blue-placeholder loading"></p>
        <p v-if="!isLoading" class="light-blue">{{ this.round(this.humidity) }}%</p>
      </el-row>
      <el-row type="flex" justify="center">
        <p v-if="isLoading" class="loading"></p>
        <p v-if="!isLoading" class="light-gray">Humidity</p>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import tools from '@/mixins/tools';

import storeHelper from '@/helpers/storeHelper';

export default {
  mixins: [tools],
  props: {
    rain: null,
    humidity: null,
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

  .light-blue {
    color: #5fb5ce;
    font-size: 1.5em;
    font-weight: bold;
  }

  .light-blue-placeholder {
    width: 60%;
    height: 28px;
  }

</style>
