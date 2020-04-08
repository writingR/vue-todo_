export const state = () => ({
  me: null
});

// 동기적사용 (비동기적 사용x)
export const mutations = {
  setMe(state, payload) {
    state.me = payload;
  }
}

// 동기, 비동기적 (보통은 비동기적으로 사용)
export const actions = {
  // context 구조분해 가능 => {commit, dispatch, state, rootState, getters, rootGetters 등.... 사용가능}
  signUp({commit,state}, payload) {
    this.$axios.post('http://ec2-3-34-48-184.ap-northeast-2.compute.amazonaws.com:3000/api/signup',{
      email: payload.email,
      nickname: payload.nickname,
      password: payload.password
    })
      .then((res)=> {
        console.log(res.data);
        commit('setMe', payload)
      })
      .catch((e)=>{
        console.log('회원가입 api 작동오류',e);
        
      })
    
  },
  logIn({commit}, payload) {
    this.$axios.post('http://ec2-3-34-48-184.ap-northeast-2.compute.amazonaws.com:3000/api/auth/tokens',{
      user:{
        email: "bing0913@naver.com",
        id: 1
      },
      headers:{
        // Authorization: 
      }
    })
      .then((res)=>{
        console.log(res.data);
        commit('setMe', payload)
      })
      .catch((e)=>{
        console.log('로그인 api오류',e);
      })
  },
  logOut({commit}, payload) {
    this.$axios.post('http://ec2-3-34-48-184.ap-northeast-2.compute.amazonaws.com:3000/api/logout',{})
      .then((res)=>{
        commit('setMe', null)
      })
      .catch((e)=>{
        console.log('로그아웃 api실패',e);
      })
  }
}