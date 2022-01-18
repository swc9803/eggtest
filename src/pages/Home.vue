<template>
  <!-- 초기 페이지 -->
  <div id="darkback" />
  <div class="firstmain">
    <p>신선한 사료를 사용해 건강한 닭이 낳은 신선한 달걀을 만나보세요.</p>
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
  <div class="secondmain">
    <VH class="vh" @focus="focusVideo"/>
    <h1>초기 페이지</h1>
    <h1>초기 페이지</h1>
    <h1>초기 페이지</h1>
    <h1>초기 페이지</h1>
  </div>
</template>

<script>
import VH from '@/components/VideoHover'
import { onBeforeMount, onMounted } from 'vue'
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
    onBeforeMount(() => {
      window.onload = function () {
        setTimeout(function () {
          scrollTo(0, 0)
        }, 0)
      }
    })
    onMounted(() => {
      gsap.to('.slide1 > img', { xPercent: -200, duration: 72, ease: 'none', repeat: -1 }).progress(0.25)
      gsap.from('.slide2 > img', { xPercent: -200, duration: 72, ease: 'none', repeat: -1 }).progress(0.5)
      gsap.to('.slide3 > img', { xPercent: -200, duration: 72, ease: 'none', repeat: -1 }).progress(0.5)
      gsap.from('.slide4 > img', { xPercent: -200, duration: 72, ease: 'none', repeat: -1 }).progress(0.25)

      // 텍스트
      const showtext = gsap.timeline()
      ScrollTrigger.create({
        animation: showtext,
        trigger: '.firstmain',
        start: 'top top',
        end: '230%',
        scrub: 1,
        pin: true,
        markers: true
      })
      showtext.from('.firstmain > p', {
        yPercent: -20,
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
    background: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    z-index: 6;
    text-align: center;
    word-break: keep-all;
  }
}
#darkback {
  opacity: 0;
  position: fixed;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  transition: .5s ease;
}
@media screen and (max-width: 768px) {
  .firstmain {
    .imgs {
      top: 0;
      img {
        width: 200%;
      }
    }
  }
}
</style>
