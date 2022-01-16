<template>
  <!-- 로고 마이페이지 -->
  <nav class="logobar">
    <div class="firstnav">
      <svg class="logo" @click="goToProduct"
        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 212 104">
        <g id="logo">
          <g id="top">
            <g id="Rectangle 31" filter="url(#top1_i_45_357)">
              <path fill="#C4C4C4" d="M13 8.7A10 10 0 0 1 23 0h167c5.1 0 9.4 3.8 10 8.9l5.3 47.4c.7 6-4 11.1-10 11.1H16.9a10 10 0 0 1-10-11.3L13 8.7Z"/>
            </g>
            <path id="Rectangle 39" fill="url(#logo1_linear_45_357)" d="M26 13a10 10 0 0 1 9.9-8.7h141c5.1 0 9.4 3.9 10 9l4.3 38.6c.7 6-4 11.2-10 11.2H31A10 10 0 0 1 21 51.8L26 13Z"/>
            <path id="hole1" fill="#fff" d="M64.2 4.3h16.5v7.6H64.2z"/>
            <path id="hole2" fill="#fff" d="M131.3 4.3h16.5v7.6h-16.5z"/>
          </g>
          <g id="egg">
            <path id="foundation" fill="#FFE7D1" d="M58.7 67.7c0 17.9-10.5 24.6-23.4 24.6-12.9 0-23.3-6.7-23.3-24.6 0-18 10.4-37.3 23.3-37.3 13 0 23.4 19.3 23.4 37.3Z"/>
            <path id="Union" fill="#fff" fill-rule="evenodd" d="M42.7 37.7a1 1 0 0 0 .3 1.4c5.4 3.8 7 8.3 8.4 13.3.2.5.9.8 1.3.4.3-.2.4-.5.3-.8-1.3-5.5-2.7-10.5-9-14.5a1 1 0 0 0-1.3.2Zm10.7 20a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.5Z" clip-rule="evenodd"/>
            <text xml:space="preserve" id="S" fill="#CA3939" font-family="BM JUA_TTF" font-size="20" letter-spacing="0em" style="white-space:pre"><tspan x="29.8" y="56.6">S</tspan></text>
          </g>
          <g id="egg_2">
            <path id="foundation_2" fill="#FFD0A5" d="M129.4 67.7c0 17.9-10.5 24.6-23.4 24.6-13 0-23.4-6.7-23.4-24.6 0-18 10.5-37.3 23.4-37.3 13 0 23.4 19.3 23.4 37.3Z"/>
            <path id="Union_2" fill="#fff" fill-rule="evenodd" d="M113.4 37.7a1 1 0 0 0 .2 1.4c5.4 3.8 7 8.3 8.5 13.3a.8.8 0 0 0 1.6-.4c-1.3-5.5-2.7-10.5-9-14.5a1 1 0 0 0-1.3.2Zm10.7 20a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.5Z" clip-rule="evenodd"/>
            <text xml:space="preserve" id="G" fill="#CA3939" font-family="BM JUA_TTF" font-size="20" letter-spacing="0em" style="white-space:pre"><tspan x="100.5" y="56.6">G</tspan></text>
          </g>
          <g id="egg_3">
            <path id="foundation_3" fill="#E3A974" d="M200 67.7c0 17.9-10.4 24.6-23.3 24.6-13 0-23.4-6.7-23.4-24.6 0-18 10.5-37.3 23.4-37.3 12.9 0 23.3 19.3 23.3 37.3Z"/>
            <path id="Union_3" fill="#fff" fill-rule="evenodd" d="M184 37.7a1 1 0 0 0 .3 1.4c5.4 3.8 7 8.3 8.4 13.3a.8.8 0 0 0 1.6-.4c-1.3-5.5-2.7-10.5-9-14.5a1 1 0 0 0-1.2.2Zm10.7 20a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.5Z" clip-rule="evenodd"/>
            <text xml:space="preserve" id="G_2" fill="#CA3939" font-family="BM JUA_TTF" font-size="20" letter-spacing="0em" style="white-space:pre"><tspan x="171.1" y="56.6">G</tspan></text>
          </g>
          <g id="bottom">
            <g id="Rectangle 32" filter="url(#bottom1_i_45_357)">
              <rect width="212" height="9.8" y="64.1" fill="#C4C4C4" rx="4.9"/>
            </g>
            <g id="Rectangle 33" filter="url(#bottom2_i_45_357)">
              <path fill="#C4C4C4" d="M9.1 74.1a1 1 0 0 1 1-1.3h50.5a1 1 0 0 1 1 1.3l-4 12.9-7.3 15.7a1 1 0 0 1-1 .6h-28a1 1 0 0 1-1-.6L13 87 9.1 74Z"/>
            </g>
            <g id="Rectangle 34" filter="url(#bottom3_i_45_357)">
              <path fill="#C4C4C4" d="M79.8 74.1a1 1 0 0 1 1-1.3h50.5a1 1 0 0 1 1 1.3l-4 12.9-7.4 15.7a1 1 0 0 1-.9.6H92a1 1 0 0 1-1-.6L83.8 87l-4-12.9Z"/>
            </g>
            <g id="Rectangle 35" filter="url(#bottom4_i_45_357)">
              <path fill="#C4C4C4" d="M150.4 74.1a1 1 0 0 1 1-1.3h50.5a1 1 0 0 1 1 1.3l-4 12.9-7.3 15.7a1 1 0 0 1-.9.6h-28a1 1 0 0 1-1-.6L154.4 87l-4-12.9Z"/>
            </g>
          </g>
        </g>
        <defs>
          <filter id="top1_i_45_357" width="198.6" height="71.4" x="6.8" y="-4" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="-4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend in2="shape" result="effect1_innerShadow_45_357"/>
          </filter>
          <filter id="bottom1_i_45_357" width="212" height="11.8" x="0" y="62.1" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="-2"/>
            <feGaussianBlur stdDeviation="1"/>
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend in2="shape" result="effect1_innerShadow_45_357"/>
          </filter>
          <filter id="bottom2_i_45_357" width="52.6" height="33.4" x="9.1" y="69.8" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="-3"/>
            <feGaussianBlur stdDeviation="1.5"/>
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend in2="shape" result="effect1_innerShadow_45_357"/>
          </filter>
          <filter id="bottom3_i_45_357" width="52.6" height="33.4" x="79.7" y="69.8" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="-3"/>
            <feGaussianBlur stdDeviation="1.5"/>
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend in2="shape" result="effect1_innerShadow_45_357"/>
          </filter>
          <filter id="bottom4_i_45_357" width="52.6" height="33.4" x="150.4" y="69.8" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="-3"/>
            <feGaussianBlur stdDeviation="1.5"/>
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend in2="shape" result="effect1_innerShadow_45_357"/>
          </filter>
          <linearGradient id="logo1_linear_45_357" x1="187.5" x2="31" y1="63.1" y2="8.2" gradientUnits="userSpaceOnUse">
            <stop stop-color="#929292"/>
            <stop offset="1" stop-color="#929292" stop-opacity=".2"/>
          </linearGradient>
        </defs>
      </svg>
      <div class="menuegg">
        <div class="auth">
          <p class="sign"><i class="fas fa-sign-in-alt"></i>로그인</p>
          <p><i class="fas fa-user-plus"></i>회원가입</p>
        </div>
        <div class="mypage egg">
          <svg class="egguser" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 88 117">
            <g>
              <g id="egg">
                <path id="foundation" fill="#000" d="M87.6 69.8c0 33.6-19.6 46.2-43.8 46.2C19.6 116 0 103.4 0 69.8S19.6 0 43.8 0C68 0 87.6 36.2 87.6 69.8Z"/>
                <path id="Union" fill="#EDE4B4" fill-rule="evenodd" d="M57.7 13.6c-.6.8-.4 2 .4 2.6A40.3 40.3 0 0 1 74 41.1c.3 1 1.7 1.5 2.5.8.5-.4.7-1 .5-1.6-2.4-10.2-5-19.6-16.9-27.1-.7-.5-1.8-.3-2.3.4Zm20 37.6a2.3 2.3 0 1 0 0-4.6 2.3 2.3 0 0 0 0 4.6Z" clip-rule="evenodd"/>
              </g>
              <path id="Union_2" fill="url(#mypage_linear_44_207)" fill-rule="evenodd" d="M50 54.7c4.6-2.2 7.9-6.9 7.9-12.2 0-7.5-6.3-13.6-14-13.6-7.9 0-14.1 6-14.1 13.6 0 5.3 3.2 10 8 12.2A22.7 22.7 0 0 0 21 76.5v14.1h45.4v-14c0-10.5-7-19.3-16.6-22Z" clip-rule="evenodd"/>
            </g>
            <defs>
              <linearGradient id="mypage_linear_44_207" x1="79.9" x2="20.6" y1="12" y2="90.2" gradientUnits="userSpaceOnUse">
                <stop stop-color="#fff"/>
                <stop offset="1" stop-color="#FED468"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div class="cart egg">
          <svg class="eggcart" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 88 117">
            <g >
              <g id="egg">
                <path id="foundation" fill="#000" d="M87.7 69.8c0 33.6-19.6 46.2-43.8 46.2C19.7 116 0 103.4 0 69.8S19.7 0 43.9 0C68 0 87.7 36.2 87.7 69.8Z"/>
                <path id="Union" fill="#EDE4B4" fill-rule="evenodd" d="M57.8 13.6c-.7.8-.5 2 .4 2.6A40.3 40.3 0 0 1 74 41.1c.3 1 1.6 1.5 2.5.8.4-.4.6-1 .5-1.6-2.5-10.2-5-19.6-16.9-27.1-.8-.5-1.8-.3-2.3.4Zm20 37.6a2.3 2.3 0 1 0 0-4.6 2.3 2.3 0 0 0 0 4.6Z" clip-rule="evenodd"/>
              </g>
              <path id="Union_2" fill="url(#cart_linear_44_195)" fill-rule="evenodd" d="M28.6 41h-8v2.2h5.7L28 55.6l2.6 20.9a2 2 0 0 0 2 1.7H59a2 2 0 0 0 2-1.5l5.8-24.1a2 2 0 0 0-2-2.5H29.6l-1-8.5V41Zm12.1 45a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm9 3.6a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" clip-rule="evenodd"/>
            </g>
            <defs>
              <linearGradient id="cart_linear_44_195" x1="77.7" x2="20.1" y1="15" y2="89.1" gradientUnits="userSpaceOnUse">
                <stop stop-color="#fff"/>
                <stop offset="1" stop-color="#FED468"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div class="recent egg">
          <svg class="eggrecent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 88 117">
            <g>
              <path id="foundation" fill="#000" d="M87.8 69.8c0 33.6-19.7 46.2-43.9 46.2S.1 103.4.1 69.8 19.7 0 44 0c24.2 0 43.9 36.2 43.9 69.8Z"/>
              <path id="Union" fill="#EDE4B4" fill-rule="evenodd" d="M57.8 13.6c-.6.8-.4 2 .5 2.6A40.3 40.3 0 0 1 74 41.1c.3 1 1.6 1.5 2.5.8.4-.4.6-1 .5-1.6-2.5-10.2-5-19.6-17-27.1-.7-.5-1.7-.3-2.3.4Zm20 37.6a2.3 2.3 0 1 0 0-4.6 2.3 2.3 0 0 0 0 4.6Z" clip-rule="evenodd"/>
              <g id="recent">
                <path id="Rectangle 16" fill="url(#paint0_linear_44_216)" d="M42.1 57.6h3.4v9.6l3.4 5.7h-3.4l-3.4-5.7v-9.6Z"/>
                <path id="Union_2" fill="url(#recnet_linear_44_216)" fill-rule="evenodd" d="M68.9 65.2a24.3 24.3 0 0 1-45.1 12.6h3.8c3.8 5.5 10 9.1 16.9 9.1A21 21 0 0 0 65 65.4a21 21 0 0 0-20.5-21.6c-7.2 0-13.5 3.9-17.2 9.7l3.4 1c.8.3 1 1.2.4 1.8l-8 7.2a1 1 0 0 1-1.6-.6l-2.2-10.4a1 1 0 0 1 1.2-1.2l3.5 1.1a24.3 24.3 0 0 1 44.9 12.8Z" clip-rule="evenodd"/>
              </g>
            </g>
            <defs>
              <linearGradient id="paint0_linear_44_216" x1="77.2" x2="20.7" y1="14.5" y2="88.1" gradientUnits="userSpaceOnUse">
                <stop stop-color="#fff"/>
                <stop offset="1" stop-color="#FED468"/>
              </linearGradient>
              <linearGradient id="recnet_linear_44_216" x1="76.2" x2="18.9" y1="14.4" y2="89.3" gradientUnits="userSpaceOnUse">
                <stop stop-color="#fff"/>
                <stop offset="1" stop-color="#FED468"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  </nav>

  <!-- 카테고리 네브바 -->
  <div class="container second">
    <ul class="secondnav">
      <li class="toggletext" @click="toggle(), toggledata = !toggledata">
        <svg class="toggle"
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30">
          <path class="toggle1" fill="#3e4043" d="M0 22.8h30V30H0z"/>
          <path class="toggle2" fill="#3e4043" d="M0 11.4h30v7.2H0z"/>
          <path class="toggle3" fill="#3e4043" d="M0 0h30v7.2H0z"/>
        </svg>
        전체 카테고리
      </li>
      <li class="menu">
        <router-link class="move" :to="{ name: 'Egg'}">제품 보기</router-link>
        <ul class="category">
          <li><router-link class="move" :to="{ name: 'Egg'}">계란</router-link></li>
          <li><router-link class="move" :to="{ name: 'Begg'}">반숙란</router-link></li>
          <li><router-link class="move" :to="{ name: 'Salad'}">샐러드</router-link></li>
          <li><router-link class="move" :to="{ name: 'Megg'}">맥반석 계란</router-link></li>
          <li><router-link class="move" :to="{ name: 'Sand'}">샌드위치</router-link></li>
        </ul>
      </li>
      <li class="event">
        <router-link class="move" :to="{ name: 'Pevent'}">이벤트</router-link>
        <ul class="category">
          <li><router-link class="move" :to="{ name: 'Pevent'}">진행 중인 이벤트</router-link></li>
          <li><router-link class="move" :to="{ name: 'Levent'}">지난 이벤트</router-link></li>
        </ul>
      </li>
      <li class="notice">
        <router-link class="move" :to="{ name: 'Notice'}">공지사항</router-link>
      </li>
      <li class="cs">
        <router-link class="move" :to="{ name: 'Faq'}">고객센터</router-link>
        <ul class="category">
          <li><router-link class="move" :to="{ name: 'Location'}">가게 위치</router-link></li>
          <li><router-link class="move" :to="{ name: 'Inquire'}">문의하기</router-link></li>
          <li><router-link class="move" :to="{ name: 'Faq'}">FAQ</router-link></li>
        </ul>
      </li>
    </ul>
  </div>
  <div class="container cover" />
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  setup () {
    const router = useRouter()
    const goToProduct = () => {
      router.push({
        name: 'Product'
      })
    }
    // 토글애니메이션
    const toggledata = ref(false)
    const toggle = () => {
      if (toggledata.value === false) {
        gsap.to('.category, .cover', {
          opacity: 1,
          ease: 'none',
          duration: 0.2
        })
        gsap.to('.category, .cover', {
          display: 'block'
        })

        gsap.to('.toggle1', {
          yPercent: -158,
          ease: 'none',
          duration: 0.1
        })
        gsap.to('.toggle3', {
          yPercent: 158,
          ease: 'none',
          duration: 0.1
        }, '<')
        gsap.to('.toggle2', {
          opacity: 0,
          ease: 'none',
          duration: 0.1
        }, '<')
        gsap.to('.toggle3', {
          rotate: -45,
          transformOrigin: 'center center',
          ease: 'none',
          duration: 0.1
        }, '>')
        gsap.to('.toggle1', {
          rotate: 45,
          transformOrigin: 'center center',
          ease: 'none',
          duration: 0.1
        }, '<')
      } else if (toggledata.value === true) {
        gsap.to('.category, .cover', {
          opacity: 0,
          ease: 'none',
          duration: 0.15
        })
        gsap.to('.category, .cover', {
          display: 'none'
        })

        gsap.to('.toggle1, .toggle3', {
          rotate: 0,
          transformOrigin: 'center center',
          ease: 'none',
          duration: 0.1
        })
        gsap.to('.toggle2', {
          opacity: 1,
          ease: 'none',
          duration: 0.1
        }, '>')
        gsap.to('.toggle3, .toggle1', {
          yPercent: 0,
          ease: 'none',
          duration: 0.1
        }, '<')
      }
    }

    return {
      goToProduct, toggledata, toggle
    }
  }
}
</script>

<style lang="scss" scoped>
.logobar {
  position: fixed;
  z-index: 5;
  background: #ffffff;
  width: 100%;
  padding-left: 10%;
  padding-right: 10%;
  box-shadow: 0px 2px 3px rgb(179, 179, 179);
  .firstnav {
    display: flex;
    justify-content: space-between;
    margin: 20px 0 45px;
    .logo {
      cursor: pointer;
      position: relative;
      top: 20px;
      height: 60px;
    }
    .menuegg {
      display: flex;
      position: relative;
      top: 20px;
        p {
          position: relative;
          top: 20px;
          display: inline-block;
          cursor: pointer;
          margin-bottom: 3rem;
          margin-right: 5px;
        }
        p:hover {
          color: rgb(77, 77, 0);
        }
        .sign::after {
          cursor: default;
          content: '';
          display: inline-block;
          width: 1px;
          height: 10px;
          margin: 7px 5px 0 8px;
          background-color: #ddd;
          vertical-align: top;
        }
        i {
          margin-right: 5px;
        }
      .egg {
        cursor: pointer;
        width: 45px;
        margin-left: 30px;
      }
    }
  }
}

.second {
  padding: 130px 0 20px 0;
  .secondnav {
    margin-top: 30px;
    padding: 25px;
    background: #ffc457;
    display: flex;
    justify-content: space-between;
    list-style: none;
    font-weight: 600;
    .toggletext {
      cursor: pointer;
    }
    .toggle {
      height: 15px;
    }
    li {
      a {
        cursor: pointer;
        color: #000000;
      }
      .category {
        list-style: none;
        position: absolute;
        margin: 24px 0 0 -33px;
        z-index: 3;
        li {
          font-size: 0.95em;
          font-weight: 500;
          margin-top: 20px;
          a {
            color: white;
            transition: .3s ease-out;
          }
          a:hover {
            color: yellow;
          }
        }
      }
    }
  }
}
.cover {
  width: 100%;
  background: rgba(0, 0, 0, 0.9);
  height: 220px;
  z-index: 2;
  position: absolute;
  transform: translate(-50%);
  left: 50%;
  margin-top: -30px;
}

.category, .cover {
  opacity: 0;
  display: none;
}

@media screen and (max-width: 768px) {
  .logobar {
    position: relative;
    box-shadow: none;
    .logo {
      transform: translate(-50%, 0);
      left: 50%;
      margin-top: -20px;
    }
  }
  .menuegg {
    div {
      display: none;
    }
  }

  .second {
    padding: 0;
    // margin-top: 120px;
  }
}

@media screen and (max-width: 480px) {
  .secondnav {
    margin-top: -10px;
    font-size: 0.7em;
  }
  .cover {
    height: 175px;
  }
}
</style>
