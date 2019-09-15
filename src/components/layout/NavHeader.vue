<template>
  <el-row>
    <el-col :span="24">
      <el-button
        type="text"
        class="back-button"
        size="medium"
        icon="el-icon-arrow-left"
        @click="$emit('click')"
      >
      Back
      </el-button>
    </el-col>
  </el-row>
</template>

<script>
export default {

}
</script>

<style scoped>
  .back-button {
    color: #555;
    margin-left: 10px;
    margin-top: 5px;
  }

  .back-button:hover {
    color: #000
  }
</style>