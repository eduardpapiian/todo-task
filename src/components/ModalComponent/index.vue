<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">

                    <div class="modal-body">
                        <slot name="body">
                            {{text}}
                        </slot>
                    </div>

                    <div class="modal-footer">
                        <slot name="footer">
                            <span class="cancel-btn button" @click="cancel">Cancel</span>
                            <span @click="confirm" class="confirm-btn button">Ok</span>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
  name: 'ModalComponent',
  data() {
    return {
      text: '',
      action: '',
      note: {}
    }
  },
  methods: {
    deleteNoteOpenModal(note) {
      this.note = note;
      this.action = 'deleteNote';
      this.text = `Delete ${note.title} ?`
    },
    cancelEditNoteOpenModal(note) {
      this.note = note;
      this.action = 'cancelEditNote';
      this.text = `Cancel ?`
    },
    confirm() {
      // if delete note
      if (this.action === 'deleteNote') {
        const notes = JSON.parse(localStorage.getItem('notes'));
        const notesAfterDeletion = notes.filter(val => val.id !== this.note.id);

        this.$store.dispatch('setNotes', notesAfterDeletion).then(notes => {
          localStorage.setItem('notes', JSON.stringify(notes))
        });

        // check if user on main page
        console.log('route', this.$route);
        if (this.$route.name !== 'dashboard') {
          this.$router.push('/')
        }
      }
      if (this.action === 'cancelEditNote') {
        this.$router.push('/')
      }
    },
    cancel() {
      this.$emit('closeModal')
    }
  }
}
</script>

<style lang="less" scoped>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: table;
        transition: opacity 0.3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 300px;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
        transition: all 0.3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-body {
        margin: 20px 0;
    }

    .modal-footer {
        padding: 20px 0;
        display:flex;
        justify-content: space-around;
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
    .confirm-btn{
        background-color: #C9D6FF;
    }
    .cancel-btn{
        background-color: rgba(255, 0, 0, 0.4);
    }
    }
    .modal-default-button {
        float: right;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>
