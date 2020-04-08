<template>
  <div>
    <v-container>
      <v-card>
        <v-container>
          <v-subheader>프로필</v-subheader>
          <v-form>
            <v-text-field
              label="닉네임"
              required
            />
            <v-btn type="submit">
              수정
            </v-btn>
          </v-form>
        </v-container>
      </v-card>
      <v-card />
    </v-container>
  </div>
</template>

<script>
  export default {
    middleware: 'authenticated'
  }
</script>

<style>

</style>
