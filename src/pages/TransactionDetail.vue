<template lang="">
  <div v-if="transaction">
    <h1>
      Transition has changed:
      {{ $route.params.id }}
    </h1>
    <h2>Name: {{ transaction.name }}</h2>

    <h3>Price: {{ transaction.price }}</h3>
  </div>

  <div v-else>Loading right now. Please wait for me.</div>
</template>
<script>
export default {
  data() {
    return {
      transaction: null,
    };
  },

  created() {
    fetch("http://localhost:3000/transactions/" + this.$route.params.id)
      .then((response) => response.json())
      .then((data) => (this.transaction = data))
      .then(() => {
        console.log(this.transaction);
      });
  },
};
</script>
<style lang="css">
h1 {
  margin: 20px;
}
</style>
