<template>
  <el-row :gutter="5">

    <el-col :span="12">
      <el-row type="flex" justify="center">
        <p class="light-blue">{{ this.rain }}mm</p>
      </el-row>
      <el-row type="flex" justify="center">
        <p class="light-gray">Rain</p>
      </el-row>
    </el-col>

    <el-col :span="12">
      <el-row type="flex" justify="center">
        <p class="light-blue">{{ this.round(this.humidity) }}%</p>
      </el-row>
      <el-row type="flex" justify="center">
        <p class="light-gray">Humidity</p>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import tools from '@/mixins/tools';

export default {
  mixins: [tools],
  props: {
    rain: null,
    humidity: null,
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

</style>
