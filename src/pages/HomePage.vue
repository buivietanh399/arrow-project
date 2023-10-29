<template lang="">
    <h1>
        HomePage is here
    </h1>

    <button @click="onChangeSomething">Click me</button>
</template>
<script>
export default {
  props: {},
  setup() {
    const firstName = "";

    function onChangeSomething() {
      console.log("Running here... ");
    }
    return { firstName, onChangeSomething };
  },
};
</script>
<style lang="">
</style>