<template>
  <!-- 초기 페이지 -->
  <div id="darkback" />
  <!-- <div class="firstmain">
    계란 떨어지고 옆에 박스 나타나게
  </div> -->
  <div class="secondmain">
    <VH class="vh" @focus="focusVideo" />
  </div>
  <div class="thirdmain">
    메뉴들 수평 슬라이드
    <div class="boxes">
      <div class="box1 box">
        계란
      </div>
      <div class="box2 box">
        반숙란
      </div>
      <div class="box3 box">
        맥반석 계란
      </div>
    </div>
  </div>
  <div class="fourthmain">
    <p>신선한 사료를 사용해 건강한 닭이 낳은 신선한 달걀을 만나보세요.</p>
    <div class="gohome" @click="moveToProduct">
      홈페이지
    </div>
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
import { useRouter } from 'vue-router'
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

    const router = useRouter()
    const moveToProduct = () => {
      router.push({
        name: 'Product'
      })
    }

    onMounted(() => {
      scrollTo(0, 0)
      gsap.to('.slide1 > img', { xPercent: -200, duration: 100, ease: 'none', repeat: -1 }).progress(0.25)
      gsap.from('.slide2 > img', { xPercent: -200, duration: 100, ease: 'none', repeat: -1 }).progress(0.5)
      gsap.to('.slide3 > img', { xPercent: -200, duration: 100, ease: 'none', repeat: -1 }).progress(0.5)
      gsap.from('.slide4 > img', { xPercent: -200, duration: 100, ease: 'none', repeat: -1 }).progress(0.25)

      // 텍스트
      const showtext = gsap.timeline()
      ScrollTrigger.create({
        animation: showtext,
        trigger: '.fourthmain',
        start: 'top 30%',
        end: '35% 100%',
        scrub: 1
      })
      showtext.from('.fourthmain > p', {
        yPercent: 10, opacity: 0
      })
    })
    return {
      focusVideo, moveToProduct
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
  .boxes {
    display: flex;
    .box {
      width: 30%;
      // height: ;
    }
  }
}
.fourthmain {
  position: relative;
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
    // background: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-shadow: 0 0 10px rgb(78, 67, 0);
    font-size: 1.5em;
    font-weight: 600;
    z-index: 6;
    text-align: center;
    word-break: keep-all;
  }
  .gohome {
    cursor: pointer;
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 6;
    border-radius: 50px;
    padding: 20px 80px 20px;
    transition: .7s ease-out;
    color: rgba(0, 0, 0, 0.7);
    background: linear-gradient(270deg, rgba(223, 190, 106, 0.8), rgba(146, 111, 52, 0.8), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8));
    background-position: 1% 50%;
    background-size: 300% 300%;
    border: 2px solid rgb(223, 190, 106);
    margin: auto;
    display: block;
    text-align: center;
    font-size: 1.2em;
    font-weight: 600;
  }
  .gohome:hover {
    color: #fff;
    border: 1px solid rgba(223,190,106,0);
    background-position: 99% 50%;
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
