<template>
<!-- eslint-disable -->
  <svg version="1.1" id="sunnyIcon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
      y="0px" viewBox="0 0 70 70" enable-background="new 0 0 70 70" xml:space="preserve">
    <g id="outerRepeat">
      <circle id="outer" fill="#FFE499" cx="35" cy="35" r="23.5"/>
    </g>
    <g id="middleRepeat">
      <circle id="middle" fill="#FFD766" cx="35" cy="35" r="18.1"/>
    </g>
    <circle id="inner" fill="#FFBC00" cx="35" cy="35" r="13.6"/>
  </svg>
<!-- eslint-enable -->
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
  #outerRepeat {
    animation: breathing 5s ease-in-out infinite alternate;
    transform-origin: center;
  }

  #middleRepeat {
    animation: breathing 5s ease-in-out infinite alternate 2.5s;
    transform-origin: center;
  }

  @keyframes breathing {
    0% {
      transform: scale(1);
    }
    95% {
      transform: scale(0.8)
    }
    100% {
      transform: scale(0.8)
    }
  }
</style>
