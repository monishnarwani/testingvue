export default {
    template: `
        <div>
            <span class="count" v-text="count"></span>
            <button @click="inc()">Increment</button>
        </div>
    `,
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