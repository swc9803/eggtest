<template>
  <!-- 메인 페이지 -->
  <!-- 슬라이드 -->
  <div class="container ">
    <div class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target=".carousel" data-bs-slide-to="0" class="active" aria-current="true"></button>
        <button type="button" data-bs-target=".carousel" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target=".carousel" data-bs-slide-to="2"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/슬라이드1.png" class="d-block w-100">
        </div>
        <div class="carousel-item">
          <img src="@/assets/슬라이드2.png" class="d-block w-100">
        </div>
        <div class="carousel-item">
          <img src="@/assets/슬라이드3.png" class="d-block w-100">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target=".carousel" data-bs-slide="prev">
        <svg class="carousel-control-prev-icon" aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 9 15">
          <g id="Rectangle 43" filter="url(#prev_d_71_10)">
            <path fill="#fff" d="M7.7 11.4a1 1 0 0 1-.8 1.6h-.2a1 1 0 0 1-.8-.4L1.5 7.1a1 1 0 0 1 0-1.2L5.9.4c.2-.3.5-.4.8-.4h.2a1 1 0 0 1 .8 1.6L4.2 6a1 1 0 0 0 0 1.2l3.5 4.3Z"/>
            <path stroke="#8A8A8A" stroke-width=".1" d="M6.9 13h-.2a1 1 0 0 1-.8-.4L1.5 7a1 1 0 0 1 0-1.2L6 .4c.2-.2.5-.3.8-.3h.2a1 1 0 0 1 .7 1.5L4.1 5.8a1 1 0 0 0 0 1.4l3.5 4.2a1 1 0 0 1-.7 1.5Z"/>
          </g>
          <defs>
            <filter id="prev_d_71_10" width="8.6" height="15" x=".3" y="0" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
              <feOffset dy="1"/>
              <feGaussianBlur stdDeviation=".5"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_71_10"/>
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_71_10" result="shape"/>
            </filter>
          </defs>
        </svg>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target=".carousel" data-bs-slide="next">
        <svg class="carousel-control-next-icon" aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 9 15">
          <g id="Rectangle 42" filter="url(#next_d_71_7)">
            <path fill="#fff" d="M1.3 1.6A1 1 0 0 1 2.1 0h.2c.3 0 .6.1.8.4l4.4 5.5c.3.3.3.9 0 1.2l-4.4 5.5a1 1 0 0 1-.8.4h-.2a1 1 0 0 1-.8-1.6L4.8 7a1 1 0 0 0 0-1.2L1.3 1.6Z"/>
            <path stroke="#8A8A8A" stroke-width=".1" d="M2.1 0h.2c.3 0 .6.2.8.4L7.5 6c.2.4.2.8 0 1.2L3 12.6a1 1 0 0 1-.8.3h-.2a1 1 0 0 1-.7-1.5l3.5-4.2c.3-.4.3-1 0-1.4L1.4 1.6A1 1 0 0 1 2 0Z"/>
          </g>
          <defs>
            <filter id="next_d_71_7" width="8.6" height="15" x=".1" y="0" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
              <feOffset dy="1"/>
              <feGaussianBlur stdDeviation=".5"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_71_7"/>
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_71_7" result="shape"/>
            </filter>
          </defs>
        </svg>
      </button>
    </div>
  </div>
  <!-- notice event -->
  <div class="container mainnotice">
    <div class="notice">
      <h4 @click="moveToNotice">NOTICE</h4>
      <ul class="noticelist">
        <li>[21.12.21]일부 메뉴 단종 안내</li>
        <li>[21.12.21]일부 메뉴 단종 안내</li>
        <li>[21.12.21]일부 메뉴 단종 안내</li>
      </ul>
      <h5 class="more" @click="moveToNotice">More <i class="fas fa-plus-circle"></i></h5>
    </div>
    <div class="event">
      <h4 @click="moveToEvent">EVENT</h4>
      <ul class="eventlist">
        <li>[22.01.10 ~ 22.01.26] 엽떡 인증샷 이벤트 </li>
        <li>[22.01.10 ~ 22.01.26] 엽떡 인증샷 이벤트 </li>
        <li>[22.01.10 ~ 22.01.26] 엽떡 인증샷 이벤트 </li>
      </ul>
      <h5 class="more" @click="moveToEvent">More <i class="fas fa-plus-circle"></i></h5>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  setup () {
    const router = useRouter()
    const moveToNotice = () => {
      router.push({
        name: 'Notice'
      })
    }
    const moveToEvent = () => {
      router.push({
        name: 'Eventp'
      })
    }
    return {
      moveToNotice, moveToEvent
    }
  }
}
</script>

<style lang="scss" scoped>
.slide {
  width: 70%;
  position: relative;
  transform: translate(-50%);
  left: 50%;
  .carousel-item {
    transition: transform .5s ease, opacity .5s ease-out
  }
}
.mainnotice {
  width: 55%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  ul {
    list-style: none;
    padding: 0;
  }
  .notice {
    flex: 0 0 50%;
  }
  .event {
    flex: 0 0 50%;
  }
  div {
    h4 {
      display: inline-block;
      cursor: pointer;
    }
  }
  .more {
    display: inline-block;
    cursor: pointer;
  }
}
@media screen and (max-width: 768px) {
  .mainnotice {
    display: block;
    .notice {
      margin-bottom: 40px;
    }
  }
}
</style>
