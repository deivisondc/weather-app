<template>
<!-- eslint-disable -->
  <svg version="1.1" id="partlyCloudyIcon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
      y="0px" viewBox="0 0 70 70" enable-background="new 0 0 70 70" xml:space="preserve">
    <g id="sun">
      <g id="outerRepeat">
        <circle id="outer" fill="#FFE499" cx="43.5" cy="35" r="21.4"/>
      </g>
      <g id="middleRepeat">
        <circle id="middle" fill="#FFD766" cx="43.5" cy="35" r="16.5"/>
      </g>
      <circle id="inner" fill="#FFBC00" cx="43.5" cy="35" r="12.4"/>
    </g>
    <g id="cloud">
      <circle fill="#D1D3D4" cx="13.4" cy="30" r="8.3"/>
      <circle fill="#FFFFFF" cx="30.6" cy="27.8" r="6.6"/>
      <path fill="#D1D3D4" d="M39.9,34.4c0,2.1-1.7,3.9-3.9,3.9H12.7c-2.1,0-3.9-1.7-3.9-3.9l0,0c0-2.1,16.8-8.4,18.9-8.4
        c0,0,0.7,6.2,5.1,1C34.4,25.2,39.9,32.3,39.9,34.4L39.9,34.4z"/>
      <circle fill="#D1D3D4" cx="37" cy="31.9" r="6.4"/>
      <path fill="#FFFFFF" d="M43.4,31.3c-0.3-3.1-2.7-5.6-5.8-5.8c-2.7,0.3-4.8,2.5-4.8,5.3c0,2.9,2.4,5.3,5.3,5.3
        C40.9,36.1,43.2,34,43.4,31.3z"/>
      <path fill="#FFFFFF" d="M12.6,21.7c-3.9,0.4-7,3.5-7.4,7.4c0.4,3.3,3.2,5.9,6.6,5.9c3.7,0,6.7-3,6.7-6.7
        C18.5,24.9,15.9,22.1,12.6,21.7z"/>
      <circle fill="#D1D3D4" cx="22" cy="22.4" r="8.8"/>
      <path fill="#FFFFFF" d="M29.7,20.2c0-1-0.2-1.9-0.4-2.7c-1.6-2.3-4.3-3.8-7.3-3.8c-4.9,0-8.8,4-8.8,8.8c0,0.8,0.1,1.6,0.3,2.3
        c1.5,2.5,4.3,4.2,7.4,4.2C25.8,28.9,29.7,25,29.7,20.2z"/>
    </g>

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
  }

  #middleRepeat {
    animation: breathing 5s ease-in-out infinite alternate 2.5s;
  }

  @keyframes breathing {
    0% {
      transform: matrix3d(
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1);
    }
    95% {
      transform: matrix3d(
        0.8, 0, 0, 0,
        0, 0.8, 0, 0,
        0, 0, 1, 0,
        8.7, 7, 0, 1);
    }
    100% {
      transform: matrix3d(
        0.8, 0, 0, 0,
        0, 0.8, 0, 0,
        0, 0, 1, 0,
        8.7, 7, 0, 1);
    }
  }

</style>
