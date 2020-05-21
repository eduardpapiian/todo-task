<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  created() {
    const notes = localStorage.getItem('notes')
    if (!notes) {
      this.$store.dispatch('setDefaultNotes').then(notes => {
        console.log('notes from promise', notes)
        localStorage.setItem('notes', JSON.stringify(notes))
      }).catch(err => {
        console.log(err)
      })
    } else {
      this.$store.dispatch('setNotes', JSON.parse(notes))
    }
  }
}
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
