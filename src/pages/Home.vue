<template>
  <!-- 초기 페이지 -->
  <div id="darkback" />
  <div class="firstmain">
    계란 떨어지고 옆에 박스 나타나게
  </div>
  <div class="secondmain">
    <VH class="vh" @focus="focusVideo" />
  </div>
  <div class="thirdmain">
    메뉴들 수평 슬라이드
  </div>
  <div class="fourthmain">
    <p class="p2">신선한 사료를 사용해 건강한 닭이 낳은 신선한 달걀을 만나보세요.</p>
    <div class="imgs slide1">
      <img src="@/assets/main/imgs1.png">
      <img src="@/assets/main/imgs2.png">
      <img src="@/assets/main/imgs1.png">
    </div>
    <div class="imgs slide2">
      <img src="@/assets/main/imgs2.png">
      <img src="@/assets/main/imgs1.png">
      <img src="@/assets/main/imgs2.png">
    </div>
    <div class="imgs slide3">
      <img src="@/assets/main/imgs1.png">
      <img src="@/assets/main/imgs2.png">
      <img src="@/assets/main/imgs1.png">
    </div>
    <div class="imgs slide4">
      <img src="@/assets/main/imgs1.png">
      <img src="@/assets/main/imgs2.png">
      <img src="@/assets/main/imgs1.png">
    </div>
  </div>
</template>

<script>
import VH from '@/components/VideoHover'
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  components: {
    VH
  },
  setup () {
    const focusVideo = () => {
      const darkback = document.getElementById('darkback')
      darkback.style.opacity = ((darkback.style.opacity !== '1') ? '1' : '0')
    }

    onMounted(() => {
      scrollTo(0, 0)
      gsap.to('.slide1 > img', { xPercent: -200, duration: 88, ease: 'none', repeat: -1 }).progress(0.25)
      gsap.from('.slide2 > img', { xPercent: -200, duration: 88, ease: 'none', repeat: -1 }).progress(0.5)
      gsap.to('.slide3 > img', { xPercent: -200, duration: 88, ease: 'none', repeat: -1 }).progress(0.5)
      gsap.from('.slide4 > img', { xPercent: -200, duration: 88, ease: 'none', repeat: -1 }).progress(0.25)

      // 텍스트
      const showtext1 = gsap.timeline()
      ScrollTrigger.create({
        animation: showtext1,
        trigger: '.fourthmain',
        start: 'top top',
        end: '+=50%',
        scrub: 1,
        pin: true
      })
      showtext1.to('.fourthmain > .p1', {
        y: '-70px',
        opacity: 0
      })
    })
    return {
      focusVideo
    }
  }
}
</script>

<style lang="scss" scoped>
.firstmain {
  width: 100%;
  height: 100vh;
}
.thirdmain {
  width: 100%;
  height: 100vh;
  background: rgb(255, 255, 136);
}
.fourthmain {
  width: 100%;
  height: 100vh;
  background: rgb(185, 185, 185);
  overflow: hidden;
  .imgs {
    margin-bottom: 60px;
    position: relative;
    top: -35%;
    left: -10%;
    white-space: nowrap;
    padding: 0px;
    transform: rotate(20deg);
    filter: blur(1px) grayscale(0.6);
    img {
      width: 150%;
      display: inline-block;
    }
  }
  p {
    padding: 10px;
    background: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 1.5em;
    font-weight: 600;
    z-index: 6;
    text-align: center;
    word-break: keep-all;
  }
}
#darkback {
  opacity: 0;
  position: fixed;
  z-index: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  transition: .5s ease;
}
@media screen and (max-width: 768px) {
  .fourthmain {
    .imgs {
      top: 0;
      img {
        width: 200%;
      }
    }
  }
}
</style>
