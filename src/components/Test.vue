<template lang="">
    <h1>
        Hello guy
    </h1>

    <button v-if=" count<20"  @click="count++"> Click me: {{count}}</button>
    <h2 v-else> Hết rồi</h2>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
};
</script>
<style lang="css">
h1 {
  color: red;
}
</style>