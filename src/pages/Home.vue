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
    <h2>SGG MENU</h2>
    <h6>여러 즐길 거리를 만나보세요.</h6>
    <div class="container">
      <div class="menucard menucard1">
        <div class="morecover morecover1">
          <p>계란</p>
        </div>
        <img class="menulist" src="@/assets/egg.png">
      </div>
      <div class="menucard menucard2">
        <div class="morecover morecover2">
          <p>반숙란</p>
        </div>
        <img class="menulist" src="@/assets/begg.png">
      </div>
      <div class="menucard menucard3">
        <div class="morecover morecover3">
          <p>맥반석 계란</p>
        </div>
        <img class="menulist" src="@/assets/megg.png">
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

      // 메뉴 호버 이벤트
      const menucard = gsap.timeline()
      ScrollTrigger.create({
        animation: menucard,
        trigger: '.container',
        start: 'top 30%',
        end: '35% 100%',
        pin: true
      })
      menucard.from('.menucard1', { xPercent: 50, opacity: 0 })
      menucard.from('.menucard2', { xPercent: 50, opacity: 0 })
      menucard.from('.menucard3', { xPercent: 50, opacity: 0 })

      const morecoverhover1 = gsap.from('.morecover1', {
        background: 'white',
        duration: 0.4,
        ease: 'none'
      })

      const moretexthover1 = gsap.to('.morecover1 > p', {
        color: 'white',
        duration: 0.4,
        ease: 'none'
      })
      morecoverhover1.pause()
      moretexthover1.pause()
      document.querySelector('.menucard1').addEventListener('mouseenter', function () {
        morecoverhover1.play()
        moretexthover1.play()
      })
      document.querySelector('.menucard1').addEventListener('mouseleave', function () {
        morecoverhover1.reverse()
        moretexthover1.reverse()
      })

      const morecoverhover2 = gsap.from('.morecover2', {
        background: 'white',
        duration: 0.4,
        ease: 'none'
      })
      const moretexthover2 = gsap.to('.morecover2 > p', {
        color: 'white',
        duration: 0.4,
        ease: 'none'
      })
      morecoverhover2.pause()
      moretexthover2.pause()
      document.querySelector('.menucard2').addEventListener('mouseenter', function () {
        morecoverhover2.play()
        moretexthover2.play()
      })
      document.querySelector('.menucard2').addEventListener('mouseleave', function () {
        morecoverhover2.reverse()
        moretexthover2.reverse()
      })

      const morecoverhover3 = gsap.from('.morecover3', {
        background: 'white',
        duration: 0.4,
        ease: 'none'
      })
      const moretexthover3 = gsap.to('.morecover3 > p', {
        color: 'white',
        duration: 0.4,
        ease: 'none'
      })
      morecoverhover3.pause()
      moretexthover3.pause()
      document.querySelector('.menucard3').addEventListener('mouseenter', function () {
        morecoverhover3.play()
        moretexthover3.play()
      })
      document.querySelector('.menucard3').addEventListener('mouseleave', function () {
        morecoverhover3.reverse()
        moretexthover3.reverse()
      })

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
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
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
      width: 30%;
      background: white;
      margin: 20px 1% 60px 1%;
      p {
        margin: 20px 0 20px 0;
        font-size: 1.4em;
        font-weight: 600;
        color: #AE5E00;
        text-align: center;
        line-height: 140px;
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
      }
    }
  }
}
.thirdmain::before {
  content: '';
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('~@/assets/friedegg.png');
  filter: blur(1px);
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
