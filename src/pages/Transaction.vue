<template lang="">
    <h1>
        Transition is coming
    </h1>

    <div v-for="transaction in transactions" :key="transaction.id">
        <router-link :to="`/transactions/${transaction.id}`" >
            {{transaction.name}}
        </router-link>
        {{transaction.price}}
    </div>


</template>
<script>
export default {
    data() {
        return {
        transactions: [
            {
            "id" :1,
            "name": "Go to something",
            "price": 1000000
        },

        {
            "id" :2,
            "name": "Buy something",
            "price": 2000000
        },

        {
            "id" :3,
            "name": "Say something",
            "price": 500000
        }
        ]
        }
    },

    created() {
        fetch("http://localhost:3000/transactions")
        .then(response => (response.json()))
        .then(data => this.transactions = data);
    }
}
</script>
<style lang="css">
    
</style>