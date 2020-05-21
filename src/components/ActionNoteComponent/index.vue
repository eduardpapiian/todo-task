<template>
    <div class="edit-note">
        <h1>{{status}} note</h1>
        <router-link class="dashboard-btn" to="/">
            Dashboard
        </router-link>
        <div class="edit-note__title">
            <h3>Title</h3>
            <input class="edit-note__title_input" v-model="note.title" placeholder="Title">
        </div>
        <div class="edit-note__todos">
            <h3>Todos</h3>
            <div class="todo" v-for="todo in note.todos" :key="todo.id">
                <input class="todo_checkbox" type="checkbox" v-model="todo.checked">
                <input class="todo_text" v-model="todo.text" placeholder="Text">
                <img @click="removeTodo(todo.id)" class="delete-todo-icon" :src="deleteIcon"/>
            </div>
            <div>
                <div @click="addTodo" class="btn add-todo-btn">
                    Add
                </div>
            </div>
        </div>
        <div class="edit-note__error-block" v-if="errors.length">
            <div class="error-text" v-for="(error, index) in errors" :key="index">
                {{error}}
            </div>
        </div>
        <div class="edit-note__success-block" v-if="successMessage">
            <div class="success-text">
                {{successMessage}}
            </div>
        </div>
        <div class="edit-note__actions">
            <div @click="saveNote(note)" class="btn save-btn">
                Save
            </div>
            <div v-if="status === 'Edit'" @click="deleteNote(note)" class="btn delete-btn">
                Delete note
            </div>
            <div @click="cancel(note)" class="btn cancel-edit-btn">
                Cancel
            </div>
            <div @click="cancelChanges(note)" v-if="!cancelChange && status === 'Edit'" class="btn cancel-changes-btn">
                Cancel changes
            </div>
            <div @click="repeatCancelChanges(editableNote)" v-if="cancelChange && status === 'Edit'" class="btn repeat-cancel-changes-btn">
                Repeat cancel changes
            </div>
        </div>
        <ModalComponent v-show="showModal" ref="modalComponent" @closeModal="closeModal"/>
    </div>
</template>

<script>
const deleteIcon = require('../../assets/x.svg')
import ModalComponent from '@/components/ModalComponent'

export default {
  name: 'EditNote',
  components: {
    ModalComponent
  },
  data() {
    return {
      status: 'Edit',
      deleteIcon,
      note: {
        title: '',
        id: 0,
        todos: [
          {
            id: 1,
            text: '',
            checked: false
          }
        ]
      },
      editableNote: {},
      // actions
      cancelChange: false,

      // error block
      errors: [],
      // success
      successMessage: '',
      // modal
      showModal: false
    }
  },
  created() {
    this.getCurrentNote(this.$route.params.id)
  },
  methods: {
    getCurrentNote(noteId) {
      const note = JSON.parse(localStorage.getItem('notes')).filter(val => val.id === Number(noteId))[0]
      if (!note) {
        this.status = 'Create'
        // get last unique id
        this.note.id = JSON.parse(localStorage.getItem('notes'))[JSON.parse(localStorage.getItem('notes')).length - 1].id + 1
      } else {
        this.note = note
      }
    },
    removeTodo(todoId) {
      if (this.note.todos.length > 1) {
        this.note.todos = this.note.todos.filter(todo => todo.id !== todoId)
      }
    },
    addTodo() {
      const newTodo = {
        id: this.note.todos[this.note.todos.length - 1].id + 1,
        text: '',
        chacked: false
      }
      this.note.todos.push(newTodo)
    },
    async saveNote(note) {
      try {
        this.errors = await this.validateForm(note)
        if (!this.errors.length) {
          const notesFromStorage = JSON.parse(localStorage.getItem('notes'))
          // handle if edit or create new note
          let newNotes = []
          if (this.status === 'Edit') {
            const changedNotes = notesFromStorage.filter(function(val) {
              if (val.id === note.id) {
                val.title = note.title
                val.todos = note.todos
              }
              return val
            })
            newNotes = changedNotes
          } else {
            notesFromStorage.push(note)
            newNotes = notesFromStorage
          }
          // save new notes
          localStorage.setItem('notes', JSON.stringify(newNotes))
          await this.$store.dispatch('setNotes', newNotes)

          this.successMessage = this.status === 'Edit' ? 'Note successfully changed!' : 'Note successfully created!'
          setTimeout(() => {
            this.successMessage = ''
            if (this.status !== 'Edit') {
              this.$router.push('/')
            }
          }, 2000)
        }
      } catch (err) {
        console.log(err)
      }
    },
    validateForm(note) {
      const errors = []
      // check if empty title
      if (!note.title) {
        errors.push('Title is required!')
      }
      // check if empty text in todo
      const even = (element) => element.text === ''
      const ifEmptyTodo = note.todos.some(even)
      if (ifEmptyTodo) {
        errors.push('Todo Text is required!')
      }
      return errors
    },
    deleteNote(note) {
      this.$refs.modalComponent.deleteNoteOpenModal(note)
      this.showModal = true
    },
    cancel(note) {
      this.$refs.modalComponent.cancelEditNoteOpenModal(note)
      this.showModal = true
    },
    cancelChanges(note) {
      this.editableNote = note
      const oldNote = JSON.parse(localStorage.getItem('notes')).filter(val => val.id === Number(note.id))[0]
      this.note = oldNote
      this.cancelChange = true
    },
    repeatCancelChanges(editableNote) {
      this.note = editableNote
      this.cancelChange = false
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
    .edit-note{
        max-width: 600px;
        margin: 0 auto;
        &__title{
            width:100%;
            &_input{
                border: 1px solid #ccc;
                padding: 8px;
                width:50%;
            }
        }
        &__todos{
            .todo{
                display:flex;
                justify-content: space-around;
                align-items: center;
                margin-bottom: 10px;
                &_text{
                    border: 1px solid #ccc;
                    padding: 8px;
                    width:100%;
                    margin:0 10px;
                }
            }
            .delete-todo-icon{
                width: 20px;
                &:hover{
                    cursor:pointer;
                }
            }
            .btn{
                width:100px;
                margin:0 auto;
                display:flex;
                justify-content: center;
                align-items: center;
                box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
                padding:5px;
                &:hover{
                    cursor: pointer;
                }
            }
        }
        &__error-block{
            color:red;
            .error-text{
                padding:10px;
            }
        }
        &__success-block{
            color:green;
            .success-text{
                padding:10px;
            }
        }
        &__actions{
            margin-top:20px;
            padding:10px;
            display:flex;
            justify-content: space-around;
            .btn{
                display:flex;
                justify-content: center;
                align-items: center;
                box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
                padding:5px;
                &:hover{
                    cursor: pointer;
                }
            }
        }
        .dashboard-btn{
            position:absolute;
            left:50px;
            top: 50px;
        }
    }
</style>
