<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-col class="center" cols="auto">
        <v-card width="460">
          <v-card-text class="text-center">
            <div class="text-h4 font-weight-black">
              로그인
            </div>
            이메일<input type="text" placeholder="이메일" class="pa-3"><br>
            비밀번호<input type="password" placeholder="비밀번호" class="pa-3"><br>
            <v-text-field class="pa-3" label="이메일" clearable prepend-icon="mdi-email"></v-text-field>
            <v-text-field class="pa-3" label="비밀번호" clearable prepend-icon="mdi-lock-outline">
              <v-btn block class="bg-orange">
                로그인
              </v-btn>
            </v-text-field>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
