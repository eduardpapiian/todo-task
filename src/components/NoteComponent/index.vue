<template>
  <div class="note">
    <div class="note__header">
      <h4 class="note__header_title">{{ note.title }}</h4>
      <div class="note__header_actions">
        <span class="edit-btn button">edit</span>
        <span class="delete-btn button">delete</span>
      </div>
    </div>
    <Todo v-for="todo in note.todos" :key="todo.id" :todo="todo" />
  </div>
</template>

<script>
import Todo from '@/components/TodoComponent'
export default {
  name: 'Note',
  components: {
    Todo
  },
  props: {
    note: {
      type: Object,
      required: true
    }
  },
  data() {
    return {

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
          background-color: #C9D6FF;
        }
        .delete-btn{
          background-color: rgba(255, 0, 0, 0.4);
        }
      }
    }
  }
</style>
