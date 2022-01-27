<template>
  <!-- 초기 페이지 -->
  <div class="darkback" ref="darkback" />
  <div class="firstmain">
    <Draw />
    <div class="wrapper">
      <div class="box1" @mouseenter="infocus1" @mouseleave="outfocus1">
        <img src="@/assets/chicken.png" ref="img1">
        <p>건강한 닭이 낳은 신선한 달걀입니다.</p>
      </div>
      <div class="box2" @mouseenter="infocus2" @mouseleave="outfocus2">
        <img src="@/assets/firstegg.png" ref="img2">
        <p>내 가족이 먹는다는 생각으로 품질에 신경을 쓰고있습니다.</p>
      </div>
    </div>
  </div>

  <div class="secondmain">
    <VH class="vh" @focus="focusVideo" />
  </div>

  <div class="thirdmain">
    <h2>SGG MENU</h2>
    <h6>여러 즐길 거리를 만나보세요.</h6>
    <div class="container">
      <div class="menucard menucard1" @mouseenter="play1" @mouseleave="reverse1">
        <div class="morecover" ref="cover1">
          <p ref="covertext1">계란</p>
        </div>
        <img class="menulist" src="@/assets/egg.png">
      </div>
      <div class="menucard menucard2" @mouseenter="play2" @mouseleave="reverse2">
        <div class="morecover" ref="cover2">
          <p ref="covertext2">반숙란</p>
        </div>
        <img class="menulist" src="@/assets/begg.png">
      </div>
      <div class="menucard menucard3" @mouseenter="play3" @mouseleave="reverse3">
        <div class="morecover" ref="cover3">
          <p ref="covertext3">맥반석 계란</p>
        </div>
        <img class="menulist" src="@/assets/megg.png">
      </div>
    </div>
  </div>

  <div class="fourthmain">
    <p>유기농 사료를 먹인 건강한 닭이 낳은 신선한 달걀을 만나보세요.</p>
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

  <div class="progress" ref="progressbar" />
</template>

<script>
import Draw from '@/components/Drawtext'
import VH from '@/components/VideoHover'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  components: {
    Draw, VH
  },
  setup () {
    const darkback = ref(null)
    const progressbar = ref(null)
    const cover1 = ref(); const covertext1 = ref()
    const cover2 = ref(); const covertext2 = ref()
    const cover3 = ref(); const covertext3 = ref()
    const coverani1 = gsap.timeline({ paused: true }); const covertextani1 = gsap.timeline({ paused: true })
    const coverani2 = gsap.timeline({ paused: true }); const covertextani2 = gsap.timeline({ paused: true })
    const coverani3 = gsap.timeline({ paused: true }); const covertextani3 = gsap.timeline({ paused: true })
    const img1 = ref(); const img2 = ref()
    const infocusani1 = gsap.timeline({ paused: true }); const infocusani2 = gsap.timeline({ paused: true })
    // 비디오 클릭시 배겨여 어둡게, 토글
    const focusVideo = () => {
      darkback.value.style.opacity = ((darkback.value.style.opacity !== '1') ? '1' : '0')
    }

    const router = useRouter()
    const moveToProduct = () => {
      router.push({
        name: 'Product'
      })
    }

    onMounted(() => {
      scrollTo(0, 0)
      // firstmain 이벤트
      gsap.from('.box1', { xPercent: -20, opacity: 0, duration: 1.5, delay: 2 })
      gsap.from('.box2', { xPercent: 20, opacity: 0, duration: 1.5, delay: 2.5 })
      infocusani1.to(img1.value, { filter: 'grayscale(0.8)', scale: 1.05, transformOrigin: 'center center', duration: 0.3, ease: 'none' })
      infocusani2.to(img2.value, { filter: 'grayscale(0.8)', scale: 1.05, transformOrigin: 'center center', duration: 0.3, ease: 'none' })

      // progress
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      window.addEventListener('scroll', () => {
        const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
        progressbar.value.style.width = `${(scrollTop / height) * 100}%`
      })

      gsap.to('.slide1 > img', { xPercent: -200, duration: 100, ease: 'none', repeat: -1 }).progress(0.25)
      gsap.from('.slide2 > img', { xPercent: -200, duration: 100, ease: 'none', repeat: -1 }).progress(0.5)
      gsap.to('.slide3 > img', { xPercent: -200, duration: 100, ease: 'none', repeat: -1 }).progress(0.5)
      gsap.from('.slide4 > img', { xPercent: -200, duration: 100, ease: 'none', repeat: -1 }).progress(0.25)

      // 메뉴 호버 이벤트
      const menucard = gsap.timeline()
      ScrollTrigger.create({
        animation: menucard,
        trigger: '.container',
        start: 'top 50%',
        end: '25% 100%',
        pin: true
      })
      menucard.from('.menucard3', { xPercent: 50, opacity: 0, delay: 0.1, duration: 0.5 })
        .from('.menucard2', { xPercent: 50, opacity: 0, delay: 0.1, duration: 0.5 })
        .from('.menucard1', { xPercent: 50, opacity: 0, delay: 0.1, duration: 0.5 })

      coverani1.from(cover1.value, { background: 'white', duration: 0.4, ease: 'none' })
      covertextani1.to(covertext1.value, { color: 'white', duration: 0.4, ease: 'none' })
      coverani2.from(cover2.value, { background: 'white', duration: 0.4, ease: 'none' })
      covertextani2.to(covertext2.value, { color: 'white', duration: 0.4, ease: 'none' })
      coverani3.from(cover3.value, { background: 'white', duration: 0.4, ease: 'none' })
      covertextani3.to(covertext3.value, { color: 'white', duration: 0.4, ease: 'none' })

      // 텍스트
      const showtext = gsap.timeline()
      ScrollTrigger.create({
        animation: showtext,
        trigger: '.fourthmain',
        start: 'top 30%',
        end: '33% 100%',
        scrub: 1
      })
      showtext.from('.fourthmain > p, .gohome', {
        y: 20, opacity: 0
      })
    })

    const play1 = () => {
      coverani1.play()
      covertextani1.play()
    }
    const reverse1 = () => {
      coverani1.reverse()
      covertextani1.reverse()
    }
    const play2 = () => {
      coverani2.play()
      covertextani2.play()
    }
    const reverse2 = () => {
      coverani2.reverse()
      covertextani2.reverse()
    }
    const play3 = () => {
      coverani3.play()
      covertextani3.play()
    }
    const reverse3 = () => {
      coverani3.reverse()
      covertextani3.reverse()
    }

    const infocus1 = () => infocusani1.play()
    const outfocus1 = () => infocusani1.reverse()
    const infocus2 = () => infocusani2.play()
    const outfocus2 = () => infocusani2.reverse()

    return {
      focusVideo,
      moveToProduct,
      darkback,
      progressbar,
      cover1,
      covertext1,
      cover2,
      covertext2,
      cover3,
      covertext3,
      play1,
      reverse1,
      play2,
      reverse2,
      play3,
      reverse3,
      img1,
      img2,
      infocus1,
      infocus2,
      outfocus1,
      outfocus2
    }
  }
}
</script>

<style lang="scss" scoped>
.progress{
  position: fixed;
  width: 0%;
  height: 7px;
  top: 0px;
  left: 0px;
  background-color: rgb(142, 167, 0);
  z-index: 50;
}
.firstmain {
  position: relative;
  width: 100%;
  height: 100vh;
  text-align: center;
  overflow: hidden;
  .wrapper {
    display: flex;
    align-items: flex-end;
    div {
      width: 35%;
      background: rgb(255, 255, 255);
      border: 2px skyblue solid;
      overflow: hidden;
      p {
        margin-top: 20px;
        color: rgb(156, 57, 0);
        font-size: 1.5em;
        font-weight: 600;
        word-break: keep-all;
      }
      img {
        width: 100%;
      }
    }
    .box1 {
      position: relative;
      left: 7%;
      transform: translate(0, -40%);
    }
    .box2 {
      position: relative;
      left: 23%;
      transform: translate(0, 10%);
      margin-top: 5%;
    }
  }
}
.firstmain::before {
  content: '';
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('~@/assets/firstmainback.png');
  background-repeat: no-repeat;
  background-size: cover;
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
  background-repeat: no-repeat;
  background-size: cover;
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
    border: 2px solid rgba(223,190,106,0);
    background-position: 99% 50%;
  }
}

.darkback {
  opacity: 0;
  position: fixed;
  z-index: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  transition: .5s ease;
}

@media screen and (max-width: 768px) {
  .firstmain {
    .wrapper {
      div {
        p {
          font-size: 1em;
        }
      }
    }
  }
  .fourthmain {
    .imgs {
      top: 0;
      img {
        width: 200%;
      }
    }
  }
}
@media screen and (max-width: 480px) {
  .box2 {
    top: 20%;
  }
}

</style>
