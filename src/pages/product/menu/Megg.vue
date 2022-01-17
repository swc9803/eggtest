<template>
  <div class="container">
    <nav class="nav nav-pills nav-fill">
      <router-link class="nav-link" :to="{ name: 'Egg'}">계란</router-link>
      <router-link class="nav-link" :to="{ name: 'Begg'}">반숙란</router-link>
      <router-link class="nav-link active" aria-current="page" :to="{ name: 'Megg'}">맥반석 계란</router-link>
      <router-link class="nav-link" :to="{ name: 'Salad'}">샐러드</router-link>
      <router-link class="nav-link" :to="{ name: 'Sand'}">샌드위치</router-link>
    </nav>
  </div>
  <div class="container egg">
    <div class="eggcard">
      <div class="hoticon">HOT</div>
      <img src="@/assets/megg.png">
      <h5>계란 한 판</h5>
      <h5>12,500원</h5>
    </div>
    <div class="eggcard">
      <div class="hoticon">HOT</div>
      <img src="@/assets/megg.png">
      <h5>계란 한 판</h5>
      <h5>12,500원</h5>
    </div>
    <div class="eggcard">
      <img src="@/assets/megg.png">
      <h5>계란 한 판</h5>
      <h5>12,500원</h5>
    </div>
    <div class="eggcard">
      <img src="@/assets/megg.png">
      <h5>계란 한 판</h5>
      <h5>12,500원</h5>
    </div>
    <div class="eggcard">
      <img src="@/assets/megg.png">
      <h5>계란 한 판</h5>
      <h5>12,500원</h5>
    </div>
    <div class="eggcard">
      <img src="@/assets/megg.png">
      <h5>계란 한 판</h5>
      <h5>12,500원</h5>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/style/CategoryColor';

.egg {
  display: flex;
  flex-wrap: wrap;
  .eggcard {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2) inset;
    margin: 0 1% 1% 0;
    position: relative;
    cursor: pointer;
    padding: 15px;
    width: 31%;
    flex: 0 0 31%;
    .hoticon {
      position: absolute;
      top: 20px;
      left: 20px;
      width: 50px;
      height: 50px;
      border-radius: 50px;
      color: rgb(255, 238, 238);
      background: rgb(255, 0, 0);
      text-align: center;
      line-height: 50px;
      opacity: 0.7;
    }
    img {
      width: 100%;
    }
    h5 {
      text-align: center;
      margin-top: 10px;
      margin-bottom: 0;
      font-size: 1.2em;
      font-weight: 600;
    }
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}

@media screen and (max-width: 768px) {
  .egg {
    .eggcard {
      width: 48%;
      flex: 0 0 48%;
    }
  }
}
@media screen and (max-width: 532px) {
  a {
    font-size: 0.8em;
  }
}
@media screen and (max-width: 480px) {
  .egg {
    .eggcard {
      width: 100%;
      flex: 0 0 100%;
    }
  }
}
</style>
