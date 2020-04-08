<template>
  <v-container v-if="todo">
    <todo :todo="todo" />
  </v-container>
  <div v-else>
    <v-container>
      일정이 존재하지 않습니다. <br> 
      로그인 후 일정을 등록해주세요.
    </v-container>
  </div>
</template>

<script>
  import Todo from '../../../components/Todo';
export default {
  components:{Todo},
  computed:{
    todo() {
      return this.$store.state.todo.todoList.find(v=> v.id === parseInt(this.$route.params.id, 10));
    }
  }
}
</script>

<style>

</style>