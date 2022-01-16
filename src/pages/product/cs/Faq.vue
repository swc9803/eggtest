<template>
  <div class="container">
    <nav class="nav nav-pills nav-fill">
      <router-link class="nav-link" :to="{ name: 'Location'}">가게 위치</router-link>
      <router-link class="nav-link" :to="{ name: 'Inquire'}">문의하기</router-link>
      <router-link class="nav-link active" aria-current="page" :to="{ name: 'Faq'}">FAQ</router-link>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/style/CategoryColor';

</style>
