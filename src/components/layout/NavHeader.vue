<template>
  <el-row type="flex" justify="space-between" class="force-top-position">
    <el-col :span="8">
      <el-button
        v-if="showPrevious"
        type="text"
        class="nav-button previous-button"
        size="medium"
        @click="$emit('clickPrevious')"
      >
      <i class="el-icon-arrow-left"/>
      {{ previousLabel }}
      </el-button>
    </el-col>
    <el-col :span="8" class="align-center">
      <el-button
        v-if="showList"
        type="text"
        class="nav-button"
        size="medium"
        @click="$emit('clickList')"
      >
      List
      </el-button>
    </el-col>
    <el-col :span="8" class="align-right">
      <el-button
        v-if="showNext"
        type="text"
        class="nav-button next-button"
        size="medium"
        @click="$emit('clickNext')"
      >
      Next
      <i class="el-icon-arrow-right"/>
      </el-button>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: {
    previousLabel: {
      type: String,
      default: "Previous"
    },
    showPrevious: {
      type: Boolean,
      default: true,
    },
    showList: {
      type: Boolean,
      default: true,
    },
    showNext: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .force-top-position {
    z-index: 1;
  }

  .nav-button {
    color: #FFFFFF;
    margin-top: 5px;

    &:hover {
      color: #FFFFFF;
      text-shadow: #444 0px 4px 5px;
    }
  }

  .previous-button {
    margin-left: 10px;
  }

  .next-button {
    margin-right: 10px;
  }

  .align-center {
    text-align: center;
  }

  .align-right {
    text-align: right;
  }
</style>
