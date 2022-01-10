<template>
  <div>
    <hr>
    <div class="container">
      <p class="space">Wanna connect? <i class="fas fa-phone" /> via:</p>
      <div class="connect">
        <a class="mail mail1" href="mailto:swc9803@naver.com">
          <i class="fas fa-envelope" aria-hidden="true" />
        </a>
        <a class="mail mail2" href="mailto:swc9803@naver.com">
          <i class="fas fa-address-card" aria-hidden="true" />
        </a>
        <a class="mail mail3" href="mailto:swc9803@naver.com">
          <i class="fab fa-google" aria-hidden="true" />
        </a>
      </div>
      <p class="caption">Built by Sungwoo</p>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { gsap } from 'gsap'

export default {
  setup () {
    // connect 호버 이벤트
    onMounted(() => {
      const mailHover1 = gsap.from('.mail1', {
        opacity: 0.4,
        duration: 0.4,
        ease: 'none'
      })
      const mailHoverShadow1 = gsap.to('.mail1', {
        boxShadow: '5px 5px 10px rgba(0, 0, 0, .2)',
        duration: 0.2,
        ease: 'none'
      })
      mailHover1.pause()
      mailHoverShadow1.pause()
      document.querySelector('.mail1').addEventListener('mouseenter', function () {
        mailHover1.play()
        mailHoverShadow1.play()
      })
      document.querySelector('.mail1').addEventListener('mouseleave', function () {
        mailHover1.reverse()
        mailHoverShadow1.reverse()
      })

      const mailHover2 = gsap.from('.mail2', {
        opacity: 0.4,
        duration: 0.4,
        ease: 'none'
      })
      const mailHoverShadow2 = gsap.to('.mail2', {
        boxShadow: '5px 5px 10px rgba(0, 0, 0, .2)',
        duration: 0.2,
        ease: 'none'
      })
      mailHover2.pause()
      mailHoverShadow2.pause()
      document.querySelector('.mail2').addEventListener('mouseenter', function () {
        mailHover2.play()
        mailHoverShadow2.play()
      })
      document.querySelector('.mail2').addEventListener('mouseleave', function () {
        mailHover2.reverse()
        mailHoverShadow2.reverse()
      })

      const mailHover3 = gsap.from('.mail3', {
        opacity: 0.4,
        duration: 0.4,
        ease: 'none'
      })
      const mailHoverShadow3 = gsap.to('.mail3', {
        boxShadow: '5px 5px 10px rgba(0, 0, 0, .2)',
        duration: 0.2,
        ease: 'none'
      })
      mailHover3.pause()
      mailHoverShadow3.pause()
      document.querySelector('.mail3').addEventListener('mouseenter', function () {
        mailHover3.play()
        mailHoverShadow3.play()
      })
      document.querySelector('.mail3').addEventListener('mouseleave', function () {
        mailHover3.reverse()
        mailHoverShadow3.reverse()
      })
    })
  }
}
</script>

<style lang="scss" scoped>
hr {
  margin-bottom: 40px;
}
.container {
  display: flex;
  flex-direction: column;
  .space {
    font-size: 1rem;
    line-height: 1.5rem;
  }
  .connect {
    display: flex;
    justify-content: center;
    font-size: 30px;
    line-height: 70px;
    margin-top: -20px;
    .mail {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      margin: 1.5rem;
      i {
        color: black;
      }
    }
  }
  .caption {
    padding-bottom: 1rem;
    font-size: 0.7rem;
    opacity: 0.8;
  }
}
</style>>
