<template>
  <div class="container">
    <nav class="nav nav-pills nav-fill">
      <router-link class="nav-link" :to="{ name: 'Pevent'}">진행중인 이벤트</router-link>
      <router-link class="nav-link active" aria-current="page" :to="{ name: 'Levent'}">지난 이벤트</router-link>
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
