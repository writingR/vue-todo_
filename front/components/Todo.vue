<template>
    <v-card style="margin:13px">
      <!-- <v-image /> -->
      <v-card-text>
        <div>
          <h5>{{todo.User.nickname}}</h5>
          <nuxt-link :to="'/todo/'+ todo.id" style="text-decoration:none;color:black;font-size:18px;">{{todo.content}}</nuxt-link>
          <p>{{$moment(todo.createdAt).format('YYYY[.]MM[.]DD')}}</p>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn text>
          <v-icon @click="onCompletedTodo">mdi mdi-check</v-icon>
        </v-btn>
        <v-btn text>
          <v-icon @click="onEditTodo">mdi-border-color</v-icon>
        </v-btn>
        <v-btn text>
          <v-icon @click="onRemoveTodo">mdi-close</v-icon>
        </v-btn>
        <v-btn text>
          <v-icon @click="onProfileEdit">mdi-account</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
export default {
  props: {
    todo : {
      type: Object,
      required: true,
    }
  },
  methods:{
    onRemoveTodo() {
      this.$store.dispatch('todo/remove',{
        todoId:this.todo.id,
      })
    },
    onEditTodo() {

    },
    onCompletedTodo() {

    },
    onProfileEdit() {

    }
  }
}
</script>

<style>

</style>