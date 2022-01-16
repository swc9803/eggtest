<template>
  <div class="container">
    <table>
      <thead>
        <tr>
          <th class="number">번호</th>
          <th>제목</th>
          <th>작성일</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="number">8</td>
          <td class="title">개인정보처리방침 일부 변경 안내</td>
          <td>2022.01.14</td>
        </tr>
        <tr>
          <td class="number">7</td>
          <td class="title">고객센터 운영시간 변경 안내</td>
          <td>2022.01.11</td>
        </tr>
        <tr>
          <td class="number">6</td>
          <td class="title">맥반석 계란 제품 출시 안내</td>
          <td>2022.01.04</td>
        </tr>
        <tr>
          <td class="number">5</td>
          <td class="title">계란 상식 퀴즈 이벤트 당첨자 안내</td>
          <td>2022.01.02</td>
        </tr>
        <tr>
          <td class="number">4</td>
          <td class="title">test4</td>
          <td>2022.01.02</td>
        </tr>
        <tr>
          <td class="number">3</td>
          <td class="title">test3</td>
          <td>2022.01.02</td>
        </tr>
        <tr>
          <td class="number">2</td>
          <td class="title">test2</td>
          <td>2022.01.02</td>
        </tr>
        <tr>
          <td class="number">1</td>
          <td class="title">test1</td>
          <td>2022.01.02</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>
thead {
  height: 60px;
  padding: 20px 0 20px 0;
  background: #ffc457;
  tr {
    text-align: center;
  }
}
table {
  width: 100%;
  tbody {
    tr {
      cursor: pointer;
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
      td {
        padding: 20px 0 20px 0;
      }
      td:not(.title) {
        text-align: center;
      }
    }
    tr:hover {
      background: rgba(222, 222, 222, 0.6);
    }
  }
}

@media screen and (max-width: 768px) {
  .number {
    display: none;
  }
}
</style>
