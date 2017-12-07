<template>
    <div>

        <ul v-if="reminders.length > 0">
            <li v-for="(reminder,key) in reminders">{{reminder}}</li>
        </ul>
        <input type="text" class="new-reminder" ref="newReminder">
        <button @click="addReminder">Add</button>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          reminders: []
        }
      },
      methods: {
        addReminder () {
          var data = this.$refs.newReminder.value
          this.reminders.push(data)
          this.$refs.newReminder.value = ''
        }
      }
    }
</script>