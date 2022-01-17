<template>
  <div class="container">
    <nav class="nav nav-pills nav-fill">
      <router-link class="nav-link" :to="{ name: 'Pevent'}">진행중인 이벤트</router-link>
      <router-link class="nav-link active" aria-current="page" :to="{ name: 'Levent'}">지난 이벤트</router-link>
    </nav>
  </div>
  <div class="container eventbody">
    <div class="eventcard">
      <img src="@/assets/event/quiz.png">
      <p class="title">test1</p>
      <p class="date">[21.11.27 ~ 22.01.01]</p>
    </div>
    <div class="eventcard">
      <img src="@/assets/event/quiz.png">
      <p class="title">test2</p>
      <p class="date">[21.11.27 ~ 22.01.01]</p>
    </div>
  </div>
</template>

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
