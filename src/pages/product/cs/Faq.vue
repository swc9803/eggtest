<template>
  <div class="container">
    <nav class="nav nav-pills nav-fill">
      <router-link class="nav-link" :to="{ name: 'Location'}">가게 위치</router-link>
      <router-link class="nav-link" :to="{ name: 'Inquire'}">문의하기</router-link>
      <router-link class="nav-link active" aria-current="page" :to="{ name: 'Faq'}">FAQ</router-link>
    </nav>
  </div>
  <div class="container faqinfo">
    <h1>FAQ</h1>
    <h5>자주 하는 질문들입니다.</h5>
  </div>
  <div class="container">
    <table>
      <tbody>
        <tr @click="showanswer1">
          <td class="qna">Q</td>
          <td class="title">실제로 존재하는 가게인가요?</td>
        </tr>
        <tr class="answer" id="ans1" style="display: none">
          <td class="qna">A</td>
          <td class="title">아닙니다.</td>
        </tr>
        <tr  @click="showanswer2">
          <td class="qna">Q</td>
          <td class="title">계란이 정말로 신선한가요?</td>
        </tr>
        <tr class="answer" id="ans2" style="display: none">
          <td class="qna">A</td>
          <td class="title">answer5</td>
        </tr>
        <tr  @click="showanswer3">
          <td class="qna">Q</td>
          <td class="title">test4</td>
        </tr>
        <tr class="answer" id="ans3" style="display: none">
          <td class="qna">A</td>
          <td class="title">answer4</td>
        </tr>
        <tr  @click="showanswer4">
          <td class="qna">Q</td>
          <td class="title">test3</td>
        </tr>
        <tr class="answer" id="ans4" style="display: none">
          <td class="qna">A</td>
          <td class="title">answer3</td>
        </tr>
        <tr  @click="showanswer5">
          <td class="qna">Q</td>
          <td class="title">test2</td>
        </tr>
        <tr class="answer" id="ans5" style="display: none">
          <td class="qna">A</td>
          <td class="title">answer2</td>
        </tr>
        <tr  @click="showanswer6">
          <td class="qna">Q</td>
          <td class="title">test1</td>
        </tr>
        <tr class="answer" id="ans6" style="display: none">
          <td class="qna">A</td>
          <td class="title">answer1</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  setup () {
    const showanswer1 = () => {
      const ans1 = document.getElementById('ans1')
      ans1.style.display = ((ans1.style.display !== 'none') ? 'none' : '')
    }
    const showanswer2 = () => {
      const ans2 = document.getElementById('ans2')
      ans2.style.display = ((ans2.style.display !== 'none') ? 'none' : '')
    }
    const showanswer3 = () => {
      const ans3 = document.getElementById('ans3')
      ans3.style.display = ((ans3.style.display !== 'none') ? 'none' : '')
    }
    const showanswer4 = () => {
      const ans4 = document.getElementById('ans4')
      ans4.style.display = ((ans4.style.display !== 'none') ? 'none' : '')
    }
    const showanswer5 = () => {
      const ans5 = document.getElementById('ans5')
      ans5.style.display = ((ans5.style.display !== 'none') ? 'none' : '')
    }
    const showanswer6 = () => {
      const ans6 = document.getElementById('ans6')
      ans6.style.display = ((ans6.style.display !== 'none') ? 'none' : '')
    }
    return {
      showanswer1, showanswer2, showanswer3, showanswer4, showanswer5, showanswer6
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/CategoryColor';

nav {
  margin-bottom: 25px;
}
.faqinfo {
  color: brown;
  h1 {
    font-weight: 600;
  }
  h5 {
    margin: 20px 0 50px 0;
  }
}
table {
  width: 100%;
  tbody {
    .answer {
      background: rgba(222, 222, 222, 0.4);
    }
    tr {
      cursor: pointer;
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
      td {
        padding: 20px 0 20px 0;
      }
      td:not(.title) {
        text-align: center;
      }
      .qna {
        padding-right: 10px;
      }
    }
    tr:hover {
      background: rgba(222, 222, 222, 0.6);
    }
  }
}
</style>
