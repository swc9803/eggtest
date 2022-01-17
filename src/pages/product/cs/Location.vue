<template>
  <div class="container">
    <nav class="nav nav-pills nav-fill">
      <router-link class="nav-link active" aria-current="page" :to="{ name: 'Location'}">가게 정보</router-link>
      <router-link class="nav-link" :to="{ name: 'Faq'}">FAQ</router-link>
    </nav>
  </div>
  <div class="margin">
    <div class="titleinfo">
      <img src="@/assets/egginfo.png">
      <br><br><br><br>
      <b class="title">SGG</b><br><br>
    </div>
    <p>SGG는 신선한 곡물 사료를 먹고 자란 건강한 닭이 낳은 신선한 계란만을 사용합니다.
      <br>어떠한 약물도 사용하지 않고, 자연 친화적인 환경에서 자란 건강한 닭이 낳은 신선한 계란만을 드려 안심할 수 있습니다.
    </p>
    <p class="test">
      * 본 사이트는 테스트용으로 만들었으며 실존하지 않는 가게입니다 *<br><br>
    </p>
    <hr class="mt-5 mb-4">
    <div class="infodetail">
      <i class="fas fa-arrow-circle-right" />
      <span class="tabledetail"> 가게 상세정보</span><br>
      <table style="width: 100%">
        <tbody>
          <tr>
            <th>가게 주소</th>
            <td>서울특별시 석관동</td>
          </tr>
          <tr>
            <th>전화번호</th>
            <td>010 1234 5678</td>
          </tr>
          <tr>
            <th>영업시간</th>
            <td>10:00 ~ 18:30</td>
          </tr><br>
        </tbody>
      </table>
      <div id="map"/>
    </div>
    <p class="test">
      * 본 사이트는 테스트용으로 만들었으며 실존하지 않는 가게입니다 *
    </p>
  </div>
</template>

<script>
export default {
  mounted () {
    window.kakao && window.kakao.maps
      ? this.initMap()
      : this.addKakaoMapScript()
  },
  methods: {
    addKakaoMapScript () {
      const script = document.createElement('script')
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap)
      script.src =
        'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=ab16ad7b4856457ef42931abc7b32e7d'
      document.head.appendChild(script)
    },
    initMap () {
      var container = document.getElementById('map') // 지도를 담을 영역의 DOM 레퍼런스
      var options = {
        center: new kakao.maps.LatLng(37.61287, 127.0585), // 지도의 중심좌표.
        level: 4 // 지도 레벨
      }
      var map = new kakao.maps.Map(container, options) // 지도 생성 및 객체 리턴
      var marker = new kakao.maps.Marker({
        // 지도 중심에 마커
        position: map.getCenter()
      })
      // 지도 마커 표시
      marker.setMap(map)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/CategoryColor';

.margin {
  width: 60%;
  margin: auto;
  .titleinfo {
    img {
      margin-top: 40px;
      float: right;
      width: 40%;
    }
    .title {
      margin-bottom: 40px;
      font-size: 40px;
      color: #AE5E00;
    }
  }
  .infodetail {
    margin-top: 40px;
    i {
      color: #AE5E00;
      font-size: 23px;
    }
    .tabledetail {
      font-size: 23px;
      color: #AE5E00;
      font-weight: 600;
    }
    table {
      width: 420px;
      border-top: 3px solid rgb(230, 230, 230);
      tbody {
        tr {
          border-bottom: 1px solid rgb(107, 107, 107);
          padding: 15px;
          display: block;
          th {
            color: rgb(61, 35, 0);
          }
          td {
            width: 300px;
            text-align: center;
          }
        }
      }
    }
    #map {
      float: right;
      width: 100%;
      height: 400px;
    }
  }
  .test {
    color: red;
    text-align: center;
  }
}

</style>
