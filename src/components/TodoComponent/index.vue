<template>
  <div class="todo">
    <div class="todo__checkbox">
      <img v-if="todo.checked" class="todo__checkbox_img" :src="checkedIcon" alt="checked">
    </div>
    <div class="todo__text">
      {{ todo.text }}
    </div>
  </div>
</template>

<script>
const checkedIcon = require('@/assets/checked.png')
export default {
  name: 'Todo',
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      checkedIcon
    }
  }
}
</script>

<style lang="less" scoped>
    .todo{
        display:flex;
        align-items: center;
        &__checkbox {
            height:20px;
            width:20px;
            &_img{
                width:100%;
            }
        }
        &__text {
            margin-left:10px;
        }
    }
</style>
