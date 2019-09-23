<template>
<!-- eslint-disable -->
  <svg version="1.1" id="windySunnyIcon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
	 y="0px" viewBox="0 0 70 70" enable-background="new 0 0 70 70" xml:space="preserve">
<g id="sun_1_">
	<g id="outerRepeat">
		<circle id="outer" fill="#FFE499" cx="28" cy="25" r="15.1"/>
	</g>
	<g id="middleRepeat">
		<circle id="middle" fill="#FFD766" cx="28" cy="25" r="11.7"/>
	</g>
	<circle id="inner" fill="#FFBC00" cx="28" cy="25" r="8.8"/>
</g>
<g id="wind">

		<line id="stroke1" fill="none" stroke="#FFFFFF" stroke-width="1.25" stroke-linecap="round" stroke-miterlimit="10" x1="44.2" y1="32.2" x2="50.8" y2="32.2"/>

		<line id="stroke2" fill="none" stroke="#FFFFFF" stroke-width="1.25" stroke-linecap="round" stroke-miterlimit="10" x1="41" y1="35.7" x2="56" y2="35.7"/>

		<line id="stroke3" fill="none" stroke="#FFFFFF" stroke-width="1.25" stroke-linecap="round" stroke-miterlimit="10" x1="37" y1="39.2" x2="52.3" y2="39.2"/>

		<line id="stroke4" fill="none" stroke="#FFFFFF" stroke-width="1.25" stroke-linecap="round" stroke-miterlimit="10" x1="22.6" y1="42.7" x2="52.3" y2="42.7"/>

		<line id="stroke5" fill="none" stroke="#FFFFFF" stroke-width="1.25" stroke-linecap="round" stroke-miterlimit="10" x1="19.9" y1="46.1" x2="56" y2="46.1"/>

		<line id="stroke6" fill="none" stroke="#FFFFFF" stroke-width="1.25" stroke-linecap="round" stroke-miterlimit="10" x1="19.2" y1="49.6" x2="54.7" y2="49.6"/>

		<line id="stroke7" fill="none" stroke="#FFFFFF" stroke-width="1.25" stroke-linecap="round" stroke-miterlimit="10" x1="22.6" y1="53.1" x2="52.3" y2="53.1"/>

		<line id="stroke8" fill="none" stroke="#FFFFFF" stroke-width="1.25" stroke-linecap="round" stroke-miterlimit="10" x1="25.5" y1="56.6" x2="50.7" y2="56.6"/>

		<line id="stroke9" fill="none" stroke="#FFFFFF" stroke-width="1.25" stroke-linecap="round" stroke-miterlimit="10" x1="27.8" y1="60.1" x2="50" y2="60.1"/>
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
        5.5, 5, 0, 1);
    }
    100% {
      transform: matrix3d(
        0.8, 0, 0, 0,
        0, 0.8, 0, 0,
        0, 0, 1, 0,
        5.5, 5, 0, 1);
    }
  }

  #wind line {
    opacity: 0;
  }

  #stroke1 {
    stroke-dasharray: 0%;
    animation: stroke-animation1 5s infinite linear;
  }

  #stroke2 {
    stroke-dasharray: 0px;
    animation: stroke-animation2 5s infinite linear 0.2s;
  }

  #stroke3 {
    stroke-dasharray: 0px;
    animation: stroke-animation3 5s infinite linear 0.3s;
  }

  #stroke4 {
    stroke-dasharray: 0px;
    animation: stroke-animation4 5s infinite linear 0.4s;
  }

  #stroke5 {
    stroke-dasharray: 0px;
    animation: stroke-animation5 5s infinite linear 0.5s;
  }

  #stroke6 {
    stroke-dasharray: 0px;
    animation: stroke-animation6 5s infinite linear 0.6s;
  }

  #stroke7 {
    stroke-dasharray: 0px;
    animation: stroke-animation7 5s infinite linear 0.7s;
  }

  #stroke8 {
    stroke-dasharray: 0px;
    animation: stroke-animation8 5s infinite linear 0.8s;
  }

  #stroke9 {
    stroke-dasharray: 0px;
    animation: stroke-animation9 5s infinite linear 0.9s;
  }

  @keyframes stroke-animation1 {
    0% {
      opacity: 0;
      stroke-dasharray: 0px, 12px;
    }
    50% {
      opacity: 1;
      stroke-dasharray: 6px, 12px;
    }
    100% {
      opacity: 0;
      stroke-dasharray: 0px, 12px;
    }
  }

  @keyframes stroke-animation2 {
    0% {
      opacity: 0;
      stroke-dasharray: 0px, 30px;
    }
    50% {
      opacity: 1;
      stroke-dasharray: 15px, 30px;
    }
    100% {
      opacity: 0;
      stroke-dasharray: 0px, 30px;
    }
  }

  @keyframes stroke-animation3 {
    0% {
      opacity: 0;
      stroke-dasharray: 0px, 30px;
    }
    50% {
      opacity: 1;
      stroke-dasharray: 15px, 30px;
    }
    100% {
      opacity: 0;
      stroke-dasharray: 0px, 30px;
    }
  }

  @keyframes stroke-animation4 {
    0% {
      opacity: 0;
      stroke-dasharray: 0px, 60px;
    }
    50% {
      opacity: 1;
      stroke-dasharray: 30px, 60px;
    }
    100% {
      opacity: 0;
      stroke-dasharray: 0px, 60px;
    }
  }

  @keyframes stroke-animation5 {
    0% {
      opacity: 0;
      stroke-dasharray: 0px, 72.2px;
    }
    50% {
      opacity: 1;
      stroke-dasharray: 36.1px, 72.2px;
    }
    100% {
      opacity: 0;
      stroke-dasharray: 0px, 72.2px;
    }
  }
  @keyframes stroke-animation6 {
    0% {
      opacity: 0;
      stroke-dasharray: 0px, 71px;
    }
    50% {
      opacity: 1;
      stroke-dasharray: 35.5px, 71px;
    }
    100% {
      opacity: 0;
      stroke-dasharray: 0px, 71px;
    }
  }

  @keyframes stroke-animation7 {
    0% {
      opacity: 0;
      stroke-dasharray: 0px, 60px;
    }
    50% {
      opacity: 1;
      stroke-dasharray: 30px, 60px;
    }
    100% {
      opacity: 0;
      stroke-dasharray: 0px, 60px;
    }
  }

  @keyframes stroke-animation8 {
    0% {
      opacity: 0;
      stroke-dasharray: 0px, 50px;
    }
    50% {
      opacity: 1;
      stroke-dasharray: 25px, 50px;
    }
    100% {
      opacity: 0;
      stroke-dasharray: 0px, 50px;
    }
  }

  @keyframes stroke-animation9 {
    0% {
      opacity: 0;
      stroke-dasharray: 0px, 44px;
    }
    50% {
      opacity: 1;
      stroke-dasharray: 22px, 44px;
    }
    100% {
      opacity: 0;
      stroke-dasharray: 0px, 44px;
    }
  }
</style>
