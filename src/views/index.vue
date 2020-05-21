<template>
  <div class="wrapper">
    <div class="wrapper_content">
      <h1>Notes</h1>
        <div class="note_wrapper" v-for="note in notes" :key="note.id">
            <Note :note="note" />
        </div>
    </div>
  </div>
</template>

<script>
import Note from '@/components/NoteComponent'

export default {
  name: 'Dashboard',
  components: {
    Note
  },
  data() {
    return {
      notes: [
        {
          id: 1,
          title: 'Title - 1',
          todos: [
            { id: 1, text: 'todo-1.1', checked: true },
            { id: 2, text: 'todo-1.2', checked: false },
            { id: 3, text: 'todo-1.3', checked: false },
            { id: 4, text: 'todo-1.4', checked: false }
          ]
        },
        {
          id: 2,
          title: 'Title - 2',
          todos: [
            { id: 1, text: 'todo-2.1', checked: true },
            { id: 2, text: 'todo-2.2', checked: false },
            { id: 3, text: 'todo-2.3', checked: false },
            { id: 4, text: 'todo-2.4', checked: false }
          ]
        },
        {
          id: 3,
          title: 'Title - 3',
          todos: [
            { id: 1, text: 'todo-3.1', checked: true },
            { id: 2, text: 'todo-3.2', checked: false },
            { id: 3, text: 'todo-3.3', checked: false },
            { id: 4, text: 'todo-3.4', checked: false }
          ]
        },
        {
          id: 4,
          title: 'Title - 4',
          todos: [
            { id: 1, text: 'todo-4.1', checked: true },
            { id: 2, text: 'todo-4.2', checked: false },
            { id: 3, text: 'todo-4.3', checked: false },
            { id: 4, text: 'todo-4.4', checked: false }
          ]
        }]
    }
  }
}
</script>

<style lang="less" scoped>
    .wrapper{
        &_content{
            max-width: 600px;
            margin: 0 auto;
        }
        .note_wrapper{
            display: flex;
        }
    }
</style>
