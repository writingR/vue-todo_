export const state = () => ({
  todoList: [],
  hasMoreList: true,
});

const limit = 8;

export const mutations = {
  addTodo(state,payload) {
    state.todoList.unshift(payload);
  },
  removeTodo(state,payload) {
    const index = state.todoList.findIndex(v => v.id === payload.todoId);
    state.todoList.splice(index, 1);
  },
  loadList(state) {
    // const todo = Array(limit).fill().map(v => ({
    //   id: Math.random().toString(),
    //   User: {
    //     id: 1,
    //     nickname: 'test',
    //   },
    //   content: `일정 test ${Math.random()}`,
    // }));
    state.todoList = state.todoList.concat(payload);
    state.hasMoreList = payload.length === limit;
  }
}

export const actions = {
  add({commit}, payload) {
    this.$axios.post('http://ec2-3-34-48-184.ap-northeast-2.compute.amazonaws.com:3000/api/todo',{
      content: payload.content
    })
      .then((res)=>{
        console.log(res.data);
        commit('addTodo', payload);
      })
      .catch((e)=>{
        console.log('추가 api 오류');     
      })
  },
  remove({commit}, payload) {
    this.$axios.delete('http://ec2-3-34-48-184.ap-northeast-2.compute.amazonaws.com:3000/api/todo:todoId',{
      withCredentials:true
    })
      .then((res)=>{
        console.log(res.data);
        commit('removeTodo', payload);
      })
      .catch((e)=>{
        console.log('삭제 api 오류');
      })
  },
  loadTodoList({commit, state}, payload) {
    if (state.hasMoreList) {
      this.$axios.get(`http://ec2-3-34-48-184.ap-northeast-2.compute.amazonaws.com:3000/api/todo?offset=${state.todoList.length}&limit=8`)
      .then((res) => {
          console.log(res.data);
          commit('loadList');
        })
        .catch((e) => {
          console.log('일정 불러오기 에러', e);
        })
      }
    }
      
}