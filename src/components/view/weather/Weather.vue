<template>
  <BaseLayout class="weather-bg">
    <div :class="weatherDetailClasses">
      <NavHeader
        :previousLabel="previousLabel"
        @clickPrevious="goPrevious"
        @clickList="goList"
        @clickNext="goNext"
        :showPrevious="showPrevious"
        :showList="showList"
        :showNext="showNext">
      </NavHeader>
      <transition :name="animationName" :mode="animationMode">
        <router-view :key="$route.fullPath"></router-view>
      </transition>
      <div class="weather-footer-container">
      </div>
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from '@/components/layout/BaseLayout';
import NavHeader from '@/components/layout/NavHeader';

import tools from '@/mixins/tools';

export default {
  mixins: [tools],
  components: { BaseLayout, NavHeader },
  data() {
    return {
      animationName: '',
      animationMode: 'out-in',
    };
  },
  computed: {
    weatherDetailClasses() {
      return {
        'weather-container': true,
        'weather-container-background-day': !this.isNightTime(),
        'weather-container-background-night': this.isNightTime(),
      };
    },
    cityIdIndex() {
      const cities = JSON.parse(localStorage.getItem('cities'));
      return cities.map(m => m.id).indexOf(parseInt(this.$route.params.cityId, 10));
    },
    previousLabel() {
      if (!this.$route.params.cityId) {
        if (this.$route.fullPath.includes('new')) {
          return 'Back';
        }
        return 'Exit';
      }
      return 'Previous';
    },
    showPrevious() {
      if (!this.$route.params.cityId) {
        return true;
      }

      if (this.cityIdIndex === 0) {
        return false;
      }
      return true;
    },
    showList() {
      if (!this.$route.params.cityId) {
        return false;
      }
      return true;
    },
    showNext() {
      if (!this.$route.params.cityId) {
        return false;
      }
      if (this.cityIdIndex === this.citiesListLength() - 1) {
        return false;
      }
      return true;
    },
  },
  methods: {
    goPrevious() {
      if (!this.$route.params.cityId) {
        if (this.$route.fullPath.includes('new')) {
          return this.$router.push({ name: 'WeatherList' });
        }
        return this.$router.push({ name: 'Dashboard' });
      }

      this.animationName = 'slide-left';
      this.animationMode = 'out-in';
      const cities = JSON.parse(localStorage.getItem('cities'));
      const index = cities.map(m => m.id).indexOf(parseInt(this.$route.params.cityId, 10));
      return this.$store.dispatch('weather/changeCity', cities[index - 1].id);
    },
    goList() {
      this.animationName = 'zoom-out';
      this.animationMode = 'out-in';
      this.$router.push({ name: 'WeatherList' });
    },
    goNext() {
      this.animationName = 'slide-right';
      this.animationMode = 'out-in';
      const cities = JSON.parse(localStorage.getItem('cities'));
      const index = cities.map(m => m.id).indexOf(parseInt(this.$route.params.cityId, 10));
      this.$store.dispatch('weather/changeCity', cities[index + 1].id);
    },
    citiesListLength() {
      if (!localStorage.getItem('cities')) {
        return 0;
      }
      return JSON.parse(localStorage.getItem('cities')).length;
    },
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      if (!from.params.cityId && (to.params.cityId || to.fullPath.includes('new'))) {
        this.animationName = 'zoom-in';
        this.animationMode = 'out-in';
      }
      next();
    });
  },
};
</script>

<style lang="scss" scoped>

  .weather-bg {
    display: flex;
    flex-flow: column;
    height: 100%;
  }

  .weather-footer-container {
    // flex: 0 1 20px;
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: 20px;
  }

  // SLIDE TRANSITIONS
  .slide-right-leave-to, .slide-left-enter {
    transform: translateX(25px);
    opacity: 0;
  }

  .slide-right-enter, .slide-left-leave-to {
    transform: translateX(-25px);
    opacity: 0;
  }

  .slide-right-enter-active, .slide-right-leave-active,
  .slide-left-enter-active, .slide-left-leave-active {
    transition: all .8s ease
  }
  // END SLIDE TRANSITIONS

  // ZOOM OUT TRANSITIONS
  .zoom-out-enter {
    opacity: 0;
  }
  .zoom-out-enter-to {
    opacity: 1;
  }
  .zoom-out-enter-active {
    transition: opacity .5s ease
  }
  .zoom-out-leave-active {
    animation: zoom 0.5s;
    animation-direction: reverse;
  }
  // END ZOOM OUT TRANSITIONS

  // ZOOM IN TRANSITIONS
  .zoom-in-enter-active {
    animation: zoom 0.5s;
  }
  .zoom-in-leave {
    opacity: 0;
  }
  .zoom-in-leave-to {
    opacity: 1;
  }
  .zoom-in-leave-active {
    transition: opacity .5s ease
  }

  @keyframes zoom {
    from {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
    100% {
      opacity: 1;
    }
  }
  // END ZOOM IN TRANSITIONS
</style>
