<template>
  <div id="app">
    <div>
      <router-view></router-view>
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

<style lang="scss">
body {
  margin: 0px;
}
#app {
  background-color: #d1d1d1;
  position: absolute;
  height: 100%;
  width: 100%;
}

  p {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: #FFF;
  }

  .weather-container {
    display: flex;
    flex-flow: column;
    height: 100%;
    min-height: 500px;
    max-height: 500px;
    border-radius: 8px;
    overflow: hidden;

    &-background-day {
      background: rgb(96,181,206);
      background: linear-gradient(75deg, rgba(96,181,206,1) 65%, rgba(96,181,206,0.6) 66%);
    }

    &-background-night {
      background: rgb(90,111,120);
      background: linear-gradient(75deg, rgba(90,111,120,1) 65%, rgba(90,111,120,0.6) 66%);
    }
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
