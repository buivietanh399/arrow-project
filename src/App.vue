<template>
  <base-test />
  <base-nav />
  <router-view />
</template>

<script>
import { getDocs } from "firebase/firestore";
//import Nav from "./components/Nav.vue";
//import Test from "./components/Test.vue";
import { dataTransactions } from "./config/firebase";
export default {
  setup() {
    async function getTransactions() {
      await getDocs(dataTransactions).then((snapshot) => {
        let dataT = [];
        snapshot.docs.forEach((doc) => {
          dataT.push({ ...doc.data(), id: doc.id });
        });

        console.log(dataT);
      });
    }
    getTransactions();
  },
  // name: "App",
  // components: {
  //   BaseNav: Nav,
  //   BaseTest: Test,
  // },
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
