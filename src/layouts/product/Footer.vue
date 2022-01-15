<template>
  <div>
    <hr>
    <div class="etc">
      <p>이용약관</p>
      <p>개인정보처리방침</p>
      <p>이메일무단수집거부</p>
    </div>
    <div class="call">
      <p class="title">고객 상담 전화</p> <p>1661-1234</p>
      <p class="title">상담 가능 시간</p> <p>월~금, 공휴일 제외 10:00 ~ 18:30 (점심시간 12:00 ~ 13:00)</p>
    </div>
    <p class="test"><i class="fas fa-exclamation-triangle" /> 본 사이트는 포트폴리오 용으로 제작되었으며 실존하지 않는 가게입니다.</p>
    <p class="caption">Built by Sungwoo</p>
  </div>
</template>

<script>

export default {
  setup () {

  }
}
</script>

<style lang="scss" scoped>
hr {
  margin-bottom: 40px;
}
.etc {
  position: relative;
  transform: translate(-50%);
  left: 50%;
  width: 500px;
  display: flex;
  p {
    flex: 1;
    font-size: 0.95em;
    cursor: pointer;
    color: rgb(90, 90, 90);
  }
  p:hover {
    color: black;
    transition: .3s ease-out;
  }
}
.call {
  position: relative;
  transform: translate(-50%);
  left: 50%;
  display: flex;
  font-size: 0.9em;
  justify-content: center;
  line-height: 40px;
  .title {
    color: rgb(90, 90, 90);
    margin: 0 10px 0 20px;
    font-weight: 600;
  }
}
.test {
  display: inline-block;
  opacity: 0.8;
  padding-top: 0.4rem;
  font-size: 0.8rem;
  border-bottom: 1px rgb(121, 121, 121) solid;
  i {
    color: orange;
  }
}

.caption {
  padding-bottom: 1rem;
  font-size: 0.8rem;
  opacity: 0.8;
}
@media screen and (max-width: 768px) {
  .etc {
    p {
      font-size: 0.7em;
    }
  }
  .call {
    p {
      font-size: 0.7em;
    }
  }
}
</style>>
