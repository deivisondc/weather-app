<template>
  <component
    :is="iconName"/>
</template>

<script>
import icons from '@/components/icons';

export default {
  components: {
    ...icons,
  },
  props: {
    iconName: String,
  },
};
</script>

<style lang="scss" scoped>

</style>
