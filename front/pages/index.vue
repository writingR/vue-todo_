<template>
  <div>
    <todo-form v-if="me" />
    <div>
      <todo  v-for="item in todoList" :key="item.id" :todo="item"/>
    </div>
  </div>
  
</template>

<script>
  import Todo from '../components/Todo';
  import TodoForm from '../components/TodoForm';
export default {
  fetch({store}) {
    store.dispatch('todo/loadTodoList')
  },
  components: {
      Todo,
      TodoForm
  },
  computed: {
    me() {
      return this.$store.state.users.me;
    },
    todoList() {
      return this.$store.state.todo.todoList;
    }
  }
}
</script>

<style>

</style>