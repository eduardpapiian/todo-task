<template>
  <div>
    <ActionNoteComponent/>
  </div>
</template>

<script>
import ActionNoteComponent from '@/components/ActionNoteComponent'
export default {
  name: 'Note',
  components: {
    ActionNoteComponent
  },
  data() {
    return {
    }
  },
  created() {
    console.log()
  }
}
</script>

<style scoped>

</style>
