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
</style>
