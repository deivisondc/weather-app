<template>
<!-- eslint-disable -->
<svg version="1.1" id="clearNightIcon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
	 y="0px" viewBox="0 0 70 70" enable-background="new 0 0 70 70" xml:space="preserve">
<g id="moon">
	<circle fill="#F1E5A1" cx="32.6" cy="36.2" r="20"/>
	<path fill="#F5EEBC" d="M12.7,36.2c0,6.5,3.1,12.2,7.9,15.9c1.5,0.3,3,0.5,4.6,0.5c11,0,20-8.9,20-20c0-6.5-3.1-12.2-7.9-15.9
		c-1.5-0.3-3-0.5-4.6-0.5C21.6,16.2,12.7,25.2,12.7,36.2z"/>
	<circle fill="#DBD093" cx="26.4" cy="26.6" r="2.7"/>
	<circle fill="#DBD093" cx="20.2" cy="36.2" r="3.8"/>
	<circle fill="#DBD093" cx="29.9" cy="36.2" r="2"/>
</g>
<g id="stars">
	<path id="star6" fill="#FFFFFF" d="M11.5,25c-1.3,0.2-1.4,0.3-1.5,1.5c-0.2-1.3-0.3-1.4-1.5-1.5c1.3-0.2,1.4-0.3,1.5-1.5
		C10.1,24.7,10.2,24.9,11.5,25z"/>
	<path id="star5" fill="#FFFFFF" d="M55.7,26.6c-1.3,0.2-1.4,0.3-1.5,1.5c-0.2-1.3-0.3-1.4-1.5-1.5c1.3-0.2,1.4-0.3,1.5-1.5
		C54.3,26.3,54.4,26.4,55.7,26.6z"/>
	<path id="star4" fill="#FFFFFF" d="M61,34.2c-1.6,0.2-1.8,0.4-2,2c-0.2-1.6-0.4-1.8-2-2c1.6-0.2,1.8-0.4,2-2
		C59.2,33.9,59.4,34,61,34.2z"/>
	<path id="star3" fill="#FFFFFF" d="M64.8,26.9c-2.1,0.3-2.3,0.5-2.6,2.6c-0.3-2.1-0.5-2.3-2.6-2.6c2.1-0.3,2.3-0.5,2.6-2.6
		C62.5,26.4,62.7,26.6,64.8,26.9z"/>
	<path id="star2" fill="#FFFFFF" d="M18.6,16.5c-1.6,0.2-1.8,0.4-2,2c-0.2-1.6-0.4-1.8-2-2c1.6-0.2,1.8-0.4,2-2
		C16.8,16.1,17,16.3,18.6,16.5z"/>
	<path id="star1" fill="#FFFFFF" d="M10.5,18.5c-1.6,0.2-1.8,0.4-2,2c-0.2-1.6-0.4-1.8-2-2c1.6-0.2,1.8-0.4,2-2
		C8.6,18.1,8.8,18.3,10.5,18.5z"/>
</g>
</svg>
<!-- eslint-enable -->
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>

  #star1 {
    opacity: 0;
    animation: star-animation 5s infinite linear;
  }

  #star2 {
    opacity: 0;
    animation: star-animation 5s infinite linear 0.1s;
  }
  #star3 {
    opacity: 0;
    animation: star-animation 5s infinite linear 0.2s;
  }
  #star4 {
    opacity: 0;
    animation: star-animation 5s infinite linear 0.3s;
  }
  #star5 {
    opacity: 0;
    animation: star-animation 5s infinite linear 0.4s;
  }
  #star6 {
    opacity: 0;
    animation: star-animation 5s infinite linear 0.5s;
  }
  @keyframes star-animation {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
    60% {
      opacity: 1;
    }
    90% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

</style>
