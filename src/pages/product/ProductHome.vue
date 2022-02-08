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
        <li>[22.01.14]개인정보처리방침 일부 변경 안내</li>
        <li>[22.01.11]고객센터 운영시간 변경 안내</li>
        <li>[22.01.04]맥반석 계란 제품 출시 안내</li>
      </ul>
      <h5 class="more" @click="moveToNotice">More <i class="fas fa-plus-circle"></i></h5>
    </div>
    <div class="event">
      <h4 @click="moveToEvent">EVENT</h4>
      <ul class="eventlist">
        <li>[22.01.11 ~ 22.03.08] 나만의 요리법 공유 이벤트 </li>
        <li>[22.01.04 ~ 22.02.20] 맥반석 계란 후기 이벤트 </li>
        <li>[22.01.01 ~ 22.02.18] 2022 임인년 이벤트 </li>
      </ul>
      <h5 class="more" @click="moveToEvent">More <i class="fas fa-plus-circle"></i></h5>
    </div>
  </div>

  <!-- 메뉴 소개 -->
  <div class="container-fuild menudes">
    <h2>SGG MENU</h2>
    <h6>여러 즐길 거리를 만나보세요.</h6>
    <div class="container">
      <div class="menucard" @mouseenter="play1" @mouseleave="reverse1">
        <div class="morecover" ref="cover1">
          <p ref="covertext1">계란</p>
          <div class="morebox" @click="moveToEgg" ref="box1">
            <h3 ref="boxtext1">More</h3>
          </div>
        </div>
        <img class="menulist" src="@/assets/egg.png">
      </div>
      <div class="menucard" @mouseenter="play2" @mouseleave="reverse2">
        <div class="morecover" ref="cover2">
          <p ref="covertext2">반숙란</p>
          <div class="morebox" @click="moveToBegg" ref="box2">
            <h3 ref="boxtext2">More</h3>
          </div>
        </div>
        <img class="menulist" src="@/assets/begg.png">
      </div>
      <div class="menucard" @mouseenter="play3" @mouseleave="reverse3">
        <div class="morecover" ref="cover3">
          <p ref="covertext3">맥반석 계란</p>
          <div class="morebox" @click="moveToMegg" ref="box3">
            <h3 ref="boxtext3">More</h3>
          </div>
        </div>
        <img class="menulist" src="@/assets/megg.png">
      </div>
      <div class="menucard" @mouseenter="play4" @mouseleave="reverse4">
        <div class="morecover" ref="cover4">
          <p ref="covertext4">사이드 메뉴</p>
          <div class="morebox" @click="moveToSand" ref="box4">
            <h3 ref="boxtext4">More</h3>
          </div>
        </div>
        <img class="menulist" src="@/assets/side.png">
      </div>
    </div>
  </div>

  <!-- information -->
  <h2 class="infotext">SGG INFORMATION</h2>
  <div class="container info">
    <div class="location">
      <img src="@/assets/map.png">
      <h2>Location</h2>
      <p class="hideinfo1">모든 가게의 위치를 확인해보세요.</p>
      <div class="infomore" @click="moveToLocation">
        <h4>More</h4>
      </div>
    </div>
    <div class="recipe">
      <img src="@/assets/recipe.png">
      <h2>Recipe</h2>
      <p class="hideinfo2">쉽게 따라할 수 있는 조리법입니다.</p>
      <div class="infomore" @click="moveToFaq">
        <h4>More</h4>
      </div>
    </div>
    <div class="faq">
      <img src="@/assets/faq.png">
      <h2>FAQ</h2>
      <p class="hideinfo3">고객님께서 자주 묻는 질문들입니다.</p>
      <div class="infomore" @click="moveToFaq">
        <h4>More</h4>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  setup () {
    const cover1 = ref(); const covertext1 = ref()
    const cover2 = ref(); const covertext2 = ref()
    const cover3 = ref(); const covertext3 = ref()
    const cover4 = ref(); const covertext4 = ref()
    const box1 = ref(); const boxtext1 = ref()
    const box2 = ref(); const boxtext2 = ref()
    const box3 = ref(); const boxtext3 = ref()
    const box4 = ref(); const boxtext4 = ref()
    const coverani1 = gsap.timeline({ paused: true }); const covertextani1 = gsap.timeline({ paused: true })
    const coverani2 = gsap.timeline({ paused: true }); const covertextani2 = gsap.timeline({ paused: true })
    const coverani3 = gsap.timeline({ paused: true }); const covertextani3 = gsap.timeline({ paused: true })
    const coverani4 = gsap.timeline({ paused: true }); const covertextani4 = gsap.timeline({ paused: true })
    const boxani1 = gsap.timeline({ paused: true })
    const boxani2 = gsap.timeline({ paused: true })
    const boxani3 = gsap.timeline({ paused: true })
    const boxani4 = gsap.timeline({ paused: true })

    const router = useRouter()
    const moveToNotice = () => {
      router.push({
        name: 'Notice'
      })
    }
    const moveToEvent = () => {
      router.push({
        name: 'Pevent'
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
    const moveToLocation = () => {
      router.push({
        name: 'Location'
      })
    }
    const moveToFaq = () => {
      router.push({
        name: 'Faq'
      })
    }
    onMounted(() => {
      scrollTo(0, 0)
      // 메뉴 호버시 배경색, 글자색 변경 애니메이션
      coverani1.from(cover1.value, { background: 'white', duration: 0.4, ease: 'none' })
      covertextani1.to([covertext1.value, boxtext1.value], { color: 'white', duration: 0.4, ease: 'none' })
      boxani1.to(box1.value, { border: 'white 2px solid', duration: 0.4, ease: 'none' })
      coverani2.from(cover2.value, { background: 'white', duration: 0.4, ease: 'none' })
      covertextani2.to([covertext2.value, boxtext2.value], { color: 'white', duration: 0.4, ease: 'none' })
      boxani2.to(box2.value, { border: 'white 2px solid', duration: 0.4, ease: 'none' })
      coverani3.from(cover3.value, { background: 'white', duration: 0.4, ease: 'none' })
      covertextani3.to([covertext3.value, boxtext3.value], { color: 'white', duration: 0.4, ease: 'none' })
      boxani3.to(box3.value, { border: 'white 2px solid', duration: 0.4, ease: 'none' })
      coverani4.from(cover4.value, { background: 'white', duration: 0.4, ease: 'none' })
      covertextani4.to([covertext4.value, boxtext4.value], { color: 'white', duration: 0.4, ease: 'none' })
      boxani4.to(box4.value, { border: 'white 2px solid', duration: 0.4, ease: 'none' })

      // info 스크롤 시 opacity 0 > 1
      const showInfo = gsap.timeline()
      ScrollTrigger.create({
        animation: showInfo,
        trigger: '.info',
        start: 'top 65%'
      })
      showInfo.from('.info', {
        yPercent: 10, opacity: 0, duration: 1, ease: 'none'
      })
    })

    const play1 = () => {
      coverani1.play()
      covertextani1.play()
      boxani1.play()
    }
    const play2 = () => {
      coverani2.play()
      covertextani2.play()
      boxani2.play()
    }
    const play3 = () => {
      coverani3.play()
      covertextani3.play()
      boxani3.play()
    }
    const play4 = () => {
      coverani4.play()
      covertextani4.play()
      boxani4.play()
    }
    const reverse1 = () => {
      coverani1.reverse()
      covertextani1.reverse()
      boxani1.reverse()
    }
    const reverse2 = () => {
      coverani2.reverse()
      covertextani2.reverse()
      boxani2.reverse()
    }
    const reverse3 = () => {
      coverani3.reverse()
      covertextani3.reverse()
      boxani3.reverse()
    }
    const reverse4 = () => {
      coverani4.reverse()
      covertextani4.reverse()
      boxani4.reverse()
    }

    return {
      moveToNotice,
      moveToEvent,
      moveToEgg,
      moveToBegg,
      moveToMegg,
      moveToSand,
      moveToLocation,
      moveToFaq,
      box1,
      box2,
      box3,
      box4,
      boxtext1,
      boxtext2,
      boxtext3,
      boxtext4,
      cover1,
      cover2,
      cover3,
      cover4,
      covertext1,
      covertext2,
      covertext3,
      covertext4,
      play1,
      play2,
      play3,
      play4,
      reverse1,
      reverse2,
      reverse3,
      reverse4
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
    word-spacing: 10px;
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
        p {
          color: #AE5E00;
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

.infotext {
  word-spacing: 10px;
  text-align: center;
  margin: 60px 0 60px 0;
}
.info {
  display: flex;
  justify-content: center;
  div {
    position: relative;
    top: 0;
    padding: 20px 20px 20px 20px;
    margin: 0 20px 0 20px;
    text-align: center;
    border: 1px rgb(255, 255, 255) solid;
    transition: 0.4s ease-out;
    img {
      width: 90%;
      margin-top: 5%;
    }
    h2 {
      margin: 20px 0 20px 0;
    }
    .hideinfo1, .hideinfo2, .hideinfo3 {
      cursor: default;
      word-break: keep-all;
      opacity: 0;
      transition: .3s ease-out;
    }
    .infomore {
      cursor: pointer;
      border: #AE5E00 2px solid;
      border-radius: 4px;
      h4 {
        margin-top: 6px;
        word-break: keep-all;
        font-size: 1.2em;
        font-weight: 600;
        color: #AE5E00;
      }
    }
  }
  .location:hover, .recipe:hover, .faq:hover {
    border: 1px rgb(55, 55, 55) solid;
    box-shadow: rgba(0, 0, 0, 0.5) 2px 2px;
    top: -10px;
  }
  .location:hover > .hideinfo1, .recipe:hover > .hideinfo2, .faq:hover > .hideinfo3 {
    opacity: 1;
  }
}
@media screen and (max-width: 768px) {
  .mainnotice {
    display: block;
    .notice {
      margin-bottom: 40px;
    }
  }
  .info {
    div {
      padding: 10px 10px 10px 10px;
      margin: 0 8px 0 8px;
    }
  }
}

@media screen and (max-width: 480px) {
  .menudes {
    .container {
      .menucard {
        p {
          font-size: 0.9em;
        }
      }
    }
  }
  .info {
    width: 350px;
    div {
      margin: 0;
    }
  }
}
</style>
