<template>
  <div class="wrapper">
    <div class="wrapper_content">
      <h1>Notes</h1>
        <div>
            <router-link class="add-note" to="/note/create">
              <div class="add-note-btn" >
                add note
              </div>
            </router-link>
        </div>
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
  computed: {
    notes() {
      return this.$store.getters.setDefaultNotes
    }
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
    .wrapper{
        &_content{
            max-width: 600px;
            margin: 0 auto;
          .add-note{
            text-decoration:none;
            color:black;
            &-btn{
              box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
              padding:10px;
              margin:10px;
              &:hover{
                cursor:pointer;
              }
            }
          }
        }
        .note_wrapper{
            display: flex;
        }
    }
</style>
