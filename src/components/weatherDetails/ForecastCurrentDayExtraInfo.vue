<template>
  <div>
    <el-row :gutter="5">
      <el-col :span="8">
        <p class="light-gray">Wind</p>
      </el-col>
      <el-col :span="16">
        <p class="dark-gray">
          <span>
            <img id="windArrow" src="@/assets/arrow.png"/>
          </span>
          {{ round(convertMpsToKmh(this.windSpeed), 1) }} km/h
        </p>
      </el-col>
    </el-row>

    <el-row :gutter="5" v-if="visibility">
      <el-col :span="8">
        <p class="light-gray">Visiblity</p>
      </el-col>
      <el-col :span="16">
        <p class="dark-gray">{{ round((this.visibility || 0, 1) / 1000) }} km</p>
      </el-col>
    </el-row>

    <el-row :gutter="5">
      <el-col :span="8">
        <p class="light-gray">UV Index</p>
      </el-col>
      <el-col :span="16">
        <p class="dark-gray">{{ round(this.uvi, 1) }}</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import tools from '@/mixins/tools';

export default {
  mixins: [tools],
  props: {
    windSpeed: null,
    windDegrees: null,
    visibility: null,
    uvi: null,
  },
  watch: {
    windDegrees(val) {
      document.getElementById('windArrow').setAttribute('style', `transform: rotate(${val}deg)`);
    },
  },
};
</script>

<style lang="scss" scoped>

  p {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 0.9em;
    margin: 5px 0px;
  }

  img {
    max-width: 13px;
    max-height: 13px;
  }

  .light-gray {
    color: #888;
  }

  .dark-gray {
    color: #444;
  }

</style>
