<template>
  <div class="container">
    <nav class="nav nav-pills nav-fill">
      <router-link class="nav-link" :to="{ name: 'Egg'}">계란</router-link>
      <router-link class="nav-link" :to="{ name: 'Begg'}">반숙란</router-link>
      <router-link class="nav-link" :to="{ name: 'Megg'}">맥반석 계란</router-link>
      <router-link class="nav-link active" aria-current="page" :to="{ name: 'Salad'}">샐러드</router-link>
      <router-link class="nav-link" :to="{ name: 'Sand'}">샌드위치</router-link>
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
