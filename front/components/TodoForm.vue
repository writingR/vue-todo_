<template>
  <v-container>
    <!-- <v-card style="margin-bottom:20px"> -->
    <v-card>
      <v-container >
        <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
          <v-textarea 
            outlined
            auto-grow
            clearable
            v-model="content"
            label="추가할 일정은?"
            :hide-details="hideDetails"
            :success-messages="successMessages"
            :success="success"
            :rules="[v => !!v || '일정을 입력해주세요.']"
            @input="onChangeTextarea"
          />
          <v-btn type="submit" color="#718093">일정추가</v-btn>
        </v-form>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      content:'',
      hideDetails: false,
      successMessages: '',
      success: false,
      valid: false
    }
  },
  computed: {
    me(){
      return this.$store.state.users.me;
    }
  },
  methods: {
    onChangeTextarea(val) {
      if(val.length) {
        this.hideDetails = true;
        this.success = false;
        this.successMessages = '';
      }
    },
    onSubmitForm() {
      if(this.$refs.form.validate()) {
        this.$store.dispatch('todo/add',{
          content: this.content,
          // 작성자 정보
          User: {
            nickname: this.me.nickname,
          },
          createdAt:Date.now(),
          id:Date.now(),
        })
          .then(()=>{
            this.content = '';
            this.hideDetails = false;
            this.success = true;
            this.successMessages = "일정이 등록되었습니다."
          })
          .catch(()=>{
            alert('오류가 발생되었습니다.');
          })
      }
    }
  }
}
</script>

<style>

</style>