<template>
  <div id="app">
    <div>
      <router-view :key="$route.fullPath"></router-view>
    </div>
  </div>
</template>

<script>
// import TheDashboard from './components/TheDashboard';

export default {
  name: 'app',
  // components: {
  //   TheDashboard,
  // },
};
</script>

<style>
body {
  margin: 0px;
}
#app {
  background-color: #d1d1d1;
  position: absolute;
  height: 100%;
  width: 100%;
}

.loading {
  width: 100%;
  min-height: 16px;
  animation-duration: 1.8s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: #f6f7f8;
  background: linear-gradient(to right, #ddd 8%, #bfbfbf 38%, #ddd 54%);
  background-size: 936px 640px;
  position: relative;
  border-radius: 8px;
}

@keyframes placeHolderShimmer{
    0%{
        background-position: -468px 0
    }
    100%{
        background-position: 468px 0
    }
}

</style>
