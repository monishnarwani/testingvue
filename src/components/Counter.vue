<template>
    <div>
        <span class="count" v-text="count"></span>
        <button @click="inc()" class="increment">Increment</button>
        <button @click="count--" class="decrement"></button>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                count: 0
            }
        },
        methods: {
            inc () {
                this.count ++
            }
        }
    }
</script>