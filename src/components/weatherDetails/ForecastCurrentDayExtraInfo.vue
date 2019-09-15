<template>
  <div>
    <el-row :gutter="5">
      <el-col :span="8">
        <p class="light-gray">Wind</p>
      </el-col>
      <el-col :span="16">
        <p class="dark-gray">{{ this.round(this.wind, 1) }} m/s</p>
      </el-col>
    </el-row>

    <el-row :gutter="5" v-if="visibility">
      <el-col :span="8">
        <p class="light-gray">Visiblity</p>
      </el-col>
      <el-col :span="16">
        <p class="dark-gray">{{ this.round((this.visibility || 0, 1) / 1000) }} km</p>
      </el-col>
    </el-row>

    <el-row :gutter="5">
      <el-col :span="8">
        <p class="light-gray">UV Index</p>
      </el-col>
      <el-col :span="16">
        <p class="dark-gray">{{ this.round(this.uvi, 1) }}</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import tools from '@/mixins/tools';

export default {
  mixins: [tools],
  props: {
    wind: null,
    visibility: null,
    uvi: null,
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

</style>
