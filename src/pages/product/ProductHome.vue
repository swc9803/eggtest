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
          <img src="@/assets/slide1.png" class="d-block w-100">
        </div>
        <div class="carousel-item">
          <img src="@/assets/slide2.png" class="d-block w-100">
        </div>
        <div class="carousel-item">
          <img src="@/assets/slide3.png" class="d-block w-100">
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
  <!-- 메뉴 소개 -->
  <div class="container-fuild menudes">
    <h2>SGG MENU</h2>
    <h6>여러 즐길 거리를 만나보세요.</h6>
    <div class="container">
      <div class="menucard menucard1">
        <div class="morecover morecover1">
          <p>일반란</p>
          <div class="morebox morebox1" @click="moveToEgg">
            <h3>More</h3>
          </div>
        </div>
        <img class="menulist" src="@/assets/egg.png">
      </div>
      <div class="menucard menucard2">
        <div class="morecover morecover2">
          <p>반숙란</p>
          <div class="morebox morebox2" @click="moveToBegg">
            <h3>More</h3>
          </div>
        </div>
        <img class="menulist" src="@/assets/begg.png">
      </div>
      <div class="menucard menucard3">
        <div class="morecover morecover3">
          <p>맥반석 계란</p>
          <div class="morebox morebox3" @click="moveToMegg">
            <h3>More</h3>
          </div>
        </div>
        <img class="menulist" src="@/assets/megg.png">
      </div>
      <div class="menucard menucard4">
        <div class="morecover morecover4">
          <p>사이드 메뉴</p>
          <div class="morebox morebox4" @click="moveToSand">
            <h3>More</h3>
          </div>
        </div>
        <img class="menulist" src="@/assets/side.png">
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { gsap } from 'gsap'

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
    const moveToEgg = () => {
      router.push({
        name: 'Egg'
      })
    }
    const moveToBegg = () => {
      router.push({
        name: 'Begg'
      })
    }
    const moveToMegg = () => {
      router.push({
        name: 'Megg'
      })
    }
    const moveToSand = () => {
      router.push({
        name: 'Sand'
      })
    }
    onMounted(() => {
      // 메뉴 호버 이벤트
      const morecoverhover1 = gsap.from('.morecover1', {
        background: 'white',
        duration: 0.4,
        ease: 'none'
      })
      const moreboxhover1 = gsap.to('.morebox1', {
        border: 'white 2px solid',
        duration: 0.4,
        ease: 'none'
      })
      const moretexthover1 = gsap.to('.morebox1 > h3, .morecover1 > p', {
        color: 'white',
        duration: 0.4,
        ease: 'none'
      })
      moreboxhover1.pause()
      morecoverhover1.pause()
      moretexthover1.pause()
      document.querySelector('.menucard1').addEventListener('mouseenter', function () {
        moreboxhover1.play()
        morecoverhover1.play()
        moretexthover1.play()
      })
      document.querySelector('.menucard1').addEventListener('mouseleave', function () {
        moreboxhover1.reverse()
        morecoverhover1.reverse()
        moretexthover1.reverse()
      })

      const morecoverhover2 = gsap.from('.morecover2', {
        background: 'white',
        duration: 0.4,
        ease: 'none'
      })
      const moreboxhover2 = gsap.to('.morebox2', {
        border: 'white 2px solid',
        duration: 0.4,
        ease: 'none'
      })
      const moretexthover2 = gsap.to('.morebox2 > h3, .morecover2 > p', {
        color: 'white',
        duration: 0.4,
        ease: 'none'
      })
      moreboxhover2.pause()
      morecoverhover2.pause()
      moretexthover2.pause()
      document.querySelector('.menucard2').addEventListener('mouseenter', function () {
        moreboxhover2.play()
        morecoverhover2.play()
        moretexthover2.play()
      })
      document.querySelector('.menucard2').addEventListener('mouseleave', function () {
        moreboxhover2.reverse()
        morecoverhover2.reverse()
        moretexthover2.reverse()
      })

      const morecoverhover3 = gsap.from('.morecover3', {
        background: 'white',
        duration: 0.4,
        ease: 'none'
      })
      const moreboxhover3 = gsap.to('.morebox3', {
        border: 'white 2px solid',
        duration: 0.4,
        ease: 'none'
      })
      const moretexthover3 = gsap.to('.morebox3 > h3, .morecover3 > p', {
        color: 'white',
        duration: 0.4,
        ease: 'none'
      })
      moreboxhover3.pause()
      morecoverhover3.pause()
      moretexthover3.pause()
      document.querySelector('.menucard3').addEventListener('mouseenter', function () {
        moreboxhover3.play()
        morecoverhover3.play()
        moretexthover3.play()
      })
      document.querySelector('.menucard3').addEventListener('mouseleave', function () {
        moreboxhover3.reverse()
        morecoverhover3.reverse()
        moretexthover3.reverse()
      })

      const morecoverhover4 = gsap.from('.morecover4', {
        background: 'white',
        duration: 0.4,
        ease: 'none'
      })
      const moreboxhover4 = gsap.to('.morebox4', {
        border: 'white 2px solid',
        duration: 0.4,
        ease: 'none'
      })
      const moretexthover4 = gsap.to('.morebox4 > h3, .morecover4 > p', {
        color: 'white',
        duration: 0.4,
        ease: 'none'
      })
      moreboxhover4.pause()
      morecoverhover4.pause()
      moretexthover4.pause()
      document.querySelector('.menucard4').addEventListener('mouseenter', function () {
        moreboxhover4.play()
        morecoverhover4.play()
        moretexthover4.play()
      })
      document.querySelector('.menucard4').addEventListener('mouseleave', function () {
        moreboxhover4.reverse()
        morecoverhover4.reverse()
        moretexthover4.reverse()
      })
    })
    return {
      moveToNotice, moveToEvent, moveToEgg, moveToBegg, moveToMegg, moveToSand
    }
  }
}
</script>

<style lang="scss" scoped>
.slide {
  width: 80%;
  position: relative;
  transform: translate(-50%);
  left: 50%;
  .carousel-item {
    transition: transform .5s ease, opacity .5s ease-out
  }
}
.mainnotice {
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  margin-bottom: 50px;
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

.menudes {
  position: relative;
  h2 {
    color: white;
    text-align: center;
    padding-top: 40px;
  }
  h6 {
    color: rgb(222, 222, 222);
    text-align: center;
    padding-top: 8px;
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding-top: 50px;
    padding-bottom: 70px;
    .menucard {
      position: relative;
      width: 23%;
      background: white;
      margin: 20px 1% 60px 1%;
      p {
        margin: 20px 0 20px 0;
        font-size: 1.2em;
        font-weight: 600;
        color: #AE5E00;
        text-align: center;
        line-height: 40px;
      }
      .menulist {
        margin-top: 169px;
        width: 100%;
        height: 70%;
      }
      .morecover {
        position: absolute;
        width: 100%;
        height: 170px;
        background: #AE5E00;
        p {
          color: #AE5E00;
        }
        .morebox {
          cursor: pointer;
          position: relative;
          transform: translate(-50%);
          left: 50%;
          width: 80px;
          height: 40px;
          border: #AE5E00 2px solid;
          border-radius: 4px;
          h3 {
            font-size: 1.2em;
            font-weight: 600;
            color: #AE5E00;
            text-align: center;
            line-height: 40px;
          }
        }
      }
    }
  }
}
.menudes::before {
  content: '';
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('~@/assets/friedegg.png');
  filter: blur(1px);
}

@media screen and (max-width: 768px) {
  .mainnotice {
    display: block;
    .notice {
      margin-bottom: 40px;
    }
  }
}

@media screen and (max-width: 480px) {
  .menudes {
    .container {
      .menu {
        p {
          font-size: 0.8em;
        }
      }
    }
  }
}
</style>
