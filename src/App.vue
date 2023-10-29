<template>
  <base-test />
  <base-nav />
  <router-view />
</template>

<script>
import Nav from "./components/Nav.vue";
import Test from "./components/Test.vue";
export default {
  name: "App",
  components: {
    BaseNav: Nav,
    BaseTest: Test,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
