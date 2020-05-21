<template>
  <div class="note">
    <div class="note__header">
      <h4 class="note__header_title">{{ note.title }}</h4>
      <div class="note__header_actions">
        <router-link class="edit-btn button" :to="`/note/${note.id}`">
          edit
        </router-link>
        <span @click="deleteNote(note)" class="delete-btn button">delete</span>
      </div>
    </div>
    <Todo v-for="todo in note.todos.slice(0, 3)" :key="todo.id" :todo="todo" />
    <div v-if="note.todos.length > 3" class="dots">
      ...
    </div>
    <ModalComponent v-show="showModal" ref="modalComponent" @closeModal="closeModal"/>
  </div>
</template>

<script>
import Todo from '@/components/TodoComponent'
import ModalComponent from '@/components/ModalComponent'

export default {
  name: 'Note',
  components: {
    Todo,
    ModalComponent
  },
  props: {
    note: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    deleteNote(note) {
      this.$refs.modalComponent.deleteNoteOpenModal(note)
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
      this.$refs.modalComponent.action = ''
      this.$refs.modalComponent.note = {}
    }
  }
}
</script>

<style lang="less" scoped>
  .note{
    width:100%;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
    padding:10px;
    margin:10px;
    &__header{
      display:flex;
      justify-content: space-between;
      align-items: center;
      &_title{
        margin:0;
      }
      &_actions{
        display:flex;
        justify-content: space-between;
        width:135px;
        .button{
          display:flex;
          justify-content: center;
          align-items: center;
          width:60px;
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
          height:30px;
          &:hover{
            cursor: pointer;
            color:#fff;
          }
        }
        .edit-btn{
          color:black;
          text-decoration:none;
          background-color: #C9D6FF;
        }
        .delete-btn{
          color:black;
          background-color: rgba(255, 0, 0, 0.4);
        }
      }
    }
    .dots{
      display:flex;
      font-size:20px;
    }
  }
</style>
