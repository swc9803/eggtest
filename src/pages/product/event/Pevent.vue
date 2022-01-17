<template>
  <div class="container">
    <nav class="nav nav-pills nav-fill">
      <router-link class="nav-link active" aria-current="page" :to="{ name: 'Pevent'}">진행중인 이벤트</router-link>
      <router-link class="nav-link" :to="{ name: 'Levent'}">지난 이벤트</router-link>
    </nav>
  </div>
  <div class="container eventbody">
    <div class="eventcard">
      <img src="@/assets/event/recipe.png">
      <p class="title">나만의 요리법 공유 이벤트</p>
      <p class="date">[22.01.11 ~ 22.03.08]</p>
    </div>
    <div class="eventcard">
      <img src="@/assets/event/elvan.png">
      <p class="title">맥반석 계란 후기 이벤트</p>
      <p class="date">[22.01.04 ~ 22.02.20]</p>
    </div>
    <div class="eventcard">
      <img src="@/assets/event/newyear.png">
      <p class="title">2022 임인년 이벤트</p>
      <p class="date">[22.01.01 ~ 22.02.18]</p>
    </div>
    <div class="eventcard">
      <img src="@/assets/event/quiz.png">
      <p class="title">계란 상식 퀴즈 이벤트</p>
      <p class="date">[21.12.27 ~ 22.02.01]</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/style/CategoryColor';
.eventbody {
  display: flex;
  flex-wrap: wrap;
  .eventcard {
    cursor: pointer;
    padding: 15px;
    width: calc(100% / 3);
    flex: 0 0 calc(100% / 3);
    img {
      width: 100%;
    }
    .title {
      margin-top: 10px;
      margin-bottom: 0;
      font-size: 1.2em;
      font-weight: 600;
    }
    .date {
      color: rgb(100, 100, 100);
    }
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}

@media screen and (max-width: 768px) {
  .eventbody {
    .eventcard {
      width: 49%;
      flex: 0 0 49%;
    }
  }
}

@media screen and (max-width: 480px) {
  .eventbody {
    .eventcard {
      width: 100%;
      flex: 0 0 100%;
    }
  }
}
</style>
