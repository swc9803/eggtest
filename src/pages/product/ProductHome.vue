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
  <!-- 메뉴 소개 -->
  <div class="container-fuild menudes">
    <h2>SGG MENU</h2>
    <h6>여러 즐길 거리를 만나보세요.</h6>
    <div class="container">
      <div class="menu">
        <p>일반란</p>
        <svg class="menumore"
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 82 31">
          <g id="morebox">
            <rect id="box" width="81" height="30" x=".5" y=".5" fill="#AE5E00" stroke="#fff" rx="2.5"/>
            <path id="moretext" fill="#fff" d="M25.2 10.3h1.9l2.7 7.9 2.7-7.9h1.9L30.6 21H29l-3.9-10.7Zm-1 0h1.9l.3 7.7v3h-2.2V10.3Zm9.4 0h1.8V21h-2.2v-3l.4-7.7Zm3.4 6.8V17c0-.6.1-1.2.3-1.6.1-.5.4-1 .7-1.3.3-.4.7-.7 1.2-.9a4 4 0 0 1 1.6-.3 4 4 0 0 1 1.6.3c.4.2.8.5 1.1.9.4.3.6.8.8 1.3l.2 1.6v.1a5 5 0 0 1-.2 1.6c-.2.5-.4 1-.8 1.3-.3.4-.7.6-1.1.8a4 4 0 0 1-1.6.3 4 4 0 0 1-1.6-.3 3.3 3.3 0 0 1-2-2A5 5 0 0 1 37 17Zm2.1-.1v.1l.1 1 .3.7.5.5.8.2c.3 0 .5 0 .7-.2l.5-.5c.2-.2.3-.5.3-.8l.1-.9V16l-.4-.7-.5-.5c-.2-.2-.4-.2-.7-.2-.3 0-.6 0-.8.2-.2 0-.4.3-.5.5l-.3.8v.9Zm9-2.2V21H46v-8h2v1.8Zm2.4-1.8v2a5 5 0 0 0-.8 0h-.8l-.5.4-.4.5v.7l-.5-.1.1-1.4.5-1.2.7-.7c.3-.2.6-.3 1-.3a2.3 2.3 0 0 1 .7.1Zm4.6 8.1c-.6 0-1.1 0-1.6-.2a3.6 3.6 0 0 1-2.3-3.6V17c0-.6 0-1.1.2-1.6s.4-1 .8-1.3c.3-.4.7-.7 1.1-.9.5-.2 1-.3 1.6-.3l1.5.3c.4.2.8.5 1 .8.4.3.6.8.7 1.2.2.5.3 1 .3 1.6v.9H52v-1.4h4.2V16c0-.3 0-.5-.2-.8 0-.2-.2-.4-.4-.5-.2-.2-.5-.2-.8-.2-.3 0-.6 0-.8.2-.2 0-.3.3-.4.5-.2.2-.3.5-.3.7l-.1 1v.3l.1.9.4.7.6.4.9.2c.3 0 .7 0 1-.2l.9-.7 1 1.1-.7.7-1 .5c-.4.2-.9.2-1.4.2Z"/>
          </g>
        </svg>
        <img class="menulist" src="@/assets/egg.png">
      </div>
      <div class="menu">
        <p>반숙란</p>
        <svg class="menumore"
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 82 31">
          <g id="morebox">
            <rect id="box" width="81" height="30" x=".5" y=".5" fill="#AE5E00" stroke="#fff" rx="2.5"/>
            <path id="moretext" fill="#fff" d="M25.2 10.3h1.9l2.7 7.9 2.7-7.9h1.9L30.6 21H29l-3.9-10.7Zm-1 0h1.9l.3 7.7v3h-2.2V10.3Zm9.4 0h1.8V21h-2.2v-3l.4-7.7Zm3.4 6.8V17c0-.6.1-1.2.3-1.6.1-.5.4-1 .7-1.3.3-.4.7-.7 1.2-.9a4 4 0 0 1 1.6-.3 4 4 0 0 1 1.6.3c.4.2.8.5 1.1.9.4.3.6.8.8 1.3l.2 1.6v.1a5 5 0 0 1-.2 1.6c-.2.5-.4 1-.8 1.3-.3.4-.7.6-1.1.8a4 4 0 0 1-1.6.3 4 4 0 0 1-1.6-.3 3.3 3.3 0 0 1-2-2A5 5 0 0 1 37 17Zm2.1-.1v.1l.1 1 .3.7.5.5.8.2c.3 0 .5 0 .7-.2l.5-.5c.2-.2.3-.5.3-.8l.1-.9V16l-.4-.7-.5-.5c-.2-.2-.4-.2-.7-.2-.3 0-.6 0-.8.2-.2 0-.4.3-.5.5l-.3.8v.9Zm9-2.2V21H46v-8h2v1.8Zm2.4-1.8v2a5 5 0 0 0-.8 0h-.8l-.5.4-.4.5v.7l-.5-.1.1-1.4.5-1.2.7-.7c.3-.2.6-.3 1-.3a2.3 2.3 0 0 1 .7.1Zm4.6 8.1c-.6 0-1.1 0-1.6-.2a3.6 3.6 0 0 1-2.3-3.6V17c0-.6 0-1.1.2-1.6s.4-1 .8-1.3c.3-.4.7-.7 1.1-.9.5-.2 1-.3 1.6-.3l1.5.3c.4.2.8.5 1 .8.4.3.6.8.7 1.2.2.5.3 1 .3 1.6v.9H52v-1.4h4.2V16c0-.3 0-.5-.2-.8 0-.2-.2-.4-.4-.5-.2-.2-.5-.2-.8-.2-.3 0-.6 0-.8.2-.2 0-.3.3-.4.5-.2.2-.3.5-.3.7l-.1 1v.3l.1.9.4.7.6.4.9.2c.3 0 .7 0 1-.2l.9-.7 1 1.1-.7.7-1 .5c-.4.2-.9.2-1.4.2Z"/>
          </g>
        </svg>
        <img class="menulist" src="@/assets/begg.png">
      </div>
      <div class="menu">
        <p>맥반석 계란</p>
        <svg class="menumore"
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 82 31">
          <g id="morebox">
            <rect id="box" width="81" height="30" x=".5" y=".5" fill="#AE5E00" stroke="#fff" rx="2.5"/>
            <path id="moretext" fill="#fff" d="M25.2 10.3h1.9l2.7 7.9 2.7-7.9h1.9L30.6 21H29l-3.9-10.7Zm-1 0h1.9l.3 7.7v3h-2.2V10.3Zm9.4 0h1.8V21h-2.2v-3l.4-7.7Zm3.4 6.8V17c0-.6.1-1.2.3-1.6.1-.5.4-1 .7-1.3.3-.4.7-.7 1.2-.9a4 4 0 0 1 1.6-.3 4 4 0 0 1 1.6.3c.4.2.8.5 1.1.9.4.3.6.8.8 1.3l.2 1.6v.1a5 5 0 0 1-.2 1.6c-.2.5-.4 1-.8 1.3-.3.4-.7.6-1.1.8a4 4 0 0 1-1.6.3 4 4 0 0 1-1.6-.3 3.3 3.3 0 0 1-2-2A5 5 0 0 1 37 17Zm2.1-.1v.1l.1 1 .3.7.5.5.8.2c.3 0 .5 0 .7-.2l.5-.5c.2-.2.3-.5.3-.8l.1-.9V16l-.4-.7-.5-.5c-.2-.2-.4-.2-.7-.2-.3 0-.6 0-.8.2-.2 0-.4.3-.5.5l-.3.8v.9Zm9-2.2V21H46v-8h2v1.8Zm2.4-1.8v2a5 5 0 0 0-.8 0h-.8l-.5.4-.4.5v.7l-.5-.1.1-1.4.5-1.2.7-.7c.3-.2.6-.3 1-.3a2.3 2.3 0 0 1 .7.1Zm4.6 8.1c-.6 0-1.1 0-1.6-.2a3.6 3.6 0 0 1-2.3-3.6V17c0-.6 0-1.1.2-1.6s.4-1 .8-1.3c.3-.4.7-.7 1.1-.9.5-.2 1-.3 1.6-.3l1.5.3c.4.2.8.5 1 .8.4.3.6.8.7 1.2.2.5.3 1 .3 1.6v.9H52v-1.4h4.2V16c0-.3 0-.5-.2-.8 0-.2-.2-.4-.4-.5-.2-.2-.5-.2-.8-.2-.3 0-.6 0-.8.2-.2 0-.3.3-.4.5-.2.2-.3.5-.3.7l-.1 1v.3l.1.9.4.7.6.4.9.2c.3 0 .7 0 1-.2l.9-.7 1 1.1-.7.7-1 .5c-.4.2-.9.2-1.4.2Z"/>
          </g>
        </svg>
        <svg class="menulist"
          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" viewBox="0 0 112 109">
          <defs>
            <path id="reuse-0" fill-rule="evenodd" d="M75.3 17.9a1 1 0 0 0-.3 1.3 21.5 21.5 0 0 1 3 15.5c0 .6.6 1 1.2.8.3 0 .5-.3.5-.6.8-5.6 1.3-10.8-3.2-16.8a1 1 0 0 0-1.2-.2ZM78 40.4a1.2 1.2 0 1 0 .9-2.3 1.2 1.2 0 0 0-.9 2.3Z" clip-rule="evenodd"/>
            <path id="reuse-1" fill-rule="evenodd" d="M94.6 47.4a1 1 0 0 0 0 1.5c4.6 4.8 5.3 9.5 5.7 14.6 0 .6.8 1 1.3.7.2-.2.4-.5.4-.8-.3-5.6-.7-10.8-6-16a1 1 0 0 0-1.4 0Zm6.7 21.8a1.2 1.2 0 1 0 .4-2.4 1.2 1.2 0 0 0-.4 2.4Z" clip-rule="evenodd"/>
          </defs>
          <g id="elvan egg">
            <g id="egg" filter="url(#megg1_d_90_59)">
              <path id="foundation" fill="#E3A974" stroke="#EBC5C5" d="M79 51.4c-3.3 8.3-7.8 13-13 15s-11.2 1.6-17.1-.7c-6-2.3-10.7-6-13.1-11-2.5-5-2.7-11.5.5-19.8s8.9-16 15.3-21S65 6.8 70.8 9c5.8 2.2 9.5 8.6 10.8 16.6 1.4 8 .5 17.6-2.7 25.9Z"/>
              <g id="Union" fill="#fff">
                <mask id="path-2-inside-1_90_59">
                  <use xlink:href="#reuse-0" fill-rule="evenodd" clip-rule="evenodd"/>
                </mask>
                <use xlink:href="#reuse-0" fill-rule="evenodd" clip-rule="evenodd"/>
                <path d="m75 19.2-.8.6.8-.6Zm.3-1.3.5.8-.5-.8ZM78 34.7h1-1Zm1 .8-.2-1 .3 1Zm.6-.6-1-.2 1 .2ZM76.5 18l-.8.6.8-.6Zm-.7.6-1-1.7a2 2 0 0 0-.6 2.8l1.6-1.1Zm3.3 16c.5-5.1.6-10.2-3.3-16l-1.6 1c3.4 5.3 3.4 9.8 2.9 14.9l2 .1Zm-.2-.1.2.1-2-.1a1.8 1.8 0 0 0 2.4 1.9l-.6-2Zm-.2.1.2-.1.6 1.9c.7-.3 1.1-.8 1.2-1.5l-2-.3Zm-3-16c4.2 5.7 3.8 10.5 3 16l2 .3c.8-5.6 1.3-11.1-3.3-17.5l-1.7 1.2Zm.1 0 1.6-1.2a2 2 0 0 0-2.6-.5l1 1.7Zm2.9 20.6c0 .2-.2.2-.3.2l-.7 1.8c1.1.5 2.4-.1 2.8-1.2l-1.8-.8Zm-.2-.2c.2 0 .2.1.2.2l1.8.8c.5-1.2-.1-2.5-1.2-3l-.8 2Zm-.3 0h.3l.8-2c-1.2-.4-2.5.2-3 1.4l2 .7Zm.2.4a.2.2 0 0 1-.2-.3l-1.8-.7c-.5 1.1.1 2.4 1.3 2.8l.7-1.8Z" mask="url(#path-2-inside-1_90_59)"/>
              </g>
            </g>
            <g id="egg_2" filter="url(#megg2_d_90_59)">
              <path id="foundation_2" fill="#E3A974" stroke="#EBC5C5" d="M59.2 58.6c5 7.3 6.2 13.7 4.9 19.2-1.3 5.5-5 10-10.4 13.6-5.2 3.6-10.9 5.4-16.4 4.5-5.6-.8-11-4.4-16-11.7-5-7.4-8-16.5-8.5-24.6-.4-8.1 1.7-15.2 6.8-18.6 5.2-3.5 12.5-2.9 20 .6a50.5 50.5 0 0 1 19.6 17Z"/>
              <path id="Union_2" fill="#fff" fill-rule="evenodd" d="M29.6 42.4c0 .6.4 1 1 1 6.6.2 10.4 3 14.3 6.3.5.4 1.2.2 1.4-.4 0-.3 0-.6-.3-.8-4-3.8-8-7.2-15.5-7a1 1 0 0 0-1 .9Zm20 10.6a1.2 1.2 0 1 0-1.3-2 1.2 1.2 0 0 0 1.3 2Z" clip-rule="evenodd"/>
            </g>
            <g id="egg_3" filter="url(#megg3_d_90_59)">
              <path id="foundation_3" fill="#E3A974" stroke="#EBC5C5" d="M104.1 79.8c-1.7 8.7-5.4 14.1-10.1 17-4.8 3-10.7 3.6-17 2.4-6.2-1.2-11.5-4-14.8-8.5-3.3-4.5-4.7-11-3-19.6 1.7-8.7 6-17.3 11.4-23.3 5.5-6.1 12-9.6 18-8.4 6.1 1.2 10.9 6.8 13.6 14.5a50.5 50.5 0 0 1 2 26Z"/>
              <g id="Union_3" fill="#fff">
                <mask id="path-7-inside-2_90_59">
                  <use xlink:href="#reuse-1" fill-rule="evenodd" clip-rule="evenodd"/>
                </mask>
                <use xlink:href="#reuse-1" fill-rule="evenodd" clip-rule="evenodd"/>
                <path d="m94.6 48.9-.7.7.7-.7Zm0-1.5.7.8-.7-.8Zm5.7 16.1h1-1Zm1.3.7-.5-1 .5 1Zm.4-.8h-1 1Zm-6-16-.8.8.7-.7Zm-.7.8L94 46.7a2 2 0 0 0-.1 2.9l1.4-1.4Zm6 15.2a22.5 22.5 0 0 0-6-15.2L94 49.6c4.3 4.5 5 9 5.4 14l2-.2Zm-.2-.1.2.1-2 .2a1.8 1.8 0 0 0 2.8 1.4l-1-1.7Zm-.1.1v-.1l1 1.7c.7-.3 1-1 1-1.6h-2Zm-5.8-15.2c5.2 4.9 5.6 9.7 5.8 15.2h2c-.3-5.7-.7-11.2-6.4-16.7l-1.4 1.5Zm.1 0 1.3-1.5a2 2 0 0 0-2.6 0l1.3 1.5Zm6.4 19.8-.2.2-.4 2c1.2.2 2.4-.6 2.6-1.8l-2-.4Zm-.1-.3s.2.2.1.3l2 .4c.2-1.2-.6-2.4-1.8-2.6l-.3 2Zm-.3.2c0-.1.1-.2.3-.2l.3-2c-1.2-.2-2.3.6-2.6 1.8l2 .4Zm.2.3a.2.2 0 0 1-.2-.3l-2-.4c-.2 1.2.6 2.4 1.8 2.6l.4-2Z" mask="url(#path-7-inside-2_90_59)"/>
              </g>
            </g>
          </g>
          <defs>
            <filter id="megg1_d_90_59" width="57.4" height="68.7" x="29.4" y="7.5" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_90_59"/>
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_90_59" result="shape"/>
            </filter>
            <filter id="megg2_d_90_59" width="60.8" height="66.5" x="8.3" y="38.1" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_90_59"/>
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_90_59" result="shape"/>
            </filter>
            <filter id="megg3_d_90_59" width="55.5" height="69.6" x="54" y="38.7" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_90_59"/>
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_90_59" result="shape"/>
            </filter>
          </defs>
        </svg>
      </div>
      <div class="menu">
        <p>사이드 메뉴</p>
        <svg class="menumore"
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 82 31">
          <g id="morebox">
            <rect id="box" width="81" height="30" x=".5" y=".5" fill="#AE5E00" stroke="#fff" rx="2.5"/>
            <path id="moretext" fill="#fff" d="M25.2 10.3h1.9l2.7 7.9 2.7-7.9h1.9L30.6 21H29l-3.9-10.7Zm-1 0h1.9l.3 7.7v3h-2.2V10.3Zm9.4 0h1.8V21h-2.2v-3l.4-7.7Zm3.4 6.8V17c0-.6.1-1.2.3-1.6.1-.5.4-1 .7-1.3.3-.4.7-.7 1.2-.9a4 4 0 0 1 1.6-.3 4 4 0 0 1 1.6.3c.4.2.8.5 1.1.9.4.3.6.8.8 1.3l.2 1.6v.1a5 5 0 0 1-.2 1.6c-.2.5-.4 1-.8 1.3-.3.4-.7.6-1.1.8a4 4 0 0 1-1.6.3 4 4 0 0 1-1.6-.3 3.3 3.3 0 0 1-2-2A5 5 0 0 1 37 17Zm2.1-.1v.1l.1 1 .3.7.5.5.8.2c.3 0 .5 0 .7-.2l.5-.5c.2-.2.3-.5.3-.8l.1-.9V16l-.4-.7-.5-.5c-.2-.2-.4-.2-.7-.2-.3 0-.6 0-.8.2-.2 0-.4.3-.5.5l-.3.8v.9Zm9-2.2V21H46v-8h2v1.8Zm2.4-1.8v2a5 5 0 0 0-.8 0h-.8l-.5.4-.4.5v.7l-.5-.1.1-1.4.5-1.2.7-.7c.3-.2.6-.3 1-.3a2.3 2.3 0 0 1 .7.1Zm4.6 8.1c-.6 0-1.1 0-1.6-.2a3.6 3.6 0 0 1-2.3-3.6V17c0-.6 0-1.1.2-1.6s.4-1 .8-1.3c.3-.4.7-.7 1.1-.9.5-.2 1-.3 1.6-.3l1.5.3c.4.2.8.5 1 .8.4.3.6.8.7 1.2.2.5.3 1 .3 1.6v.9H52v-1.4h4.2V16c0-.3 0-.5-.2-.8 0-.2-.2-.4-.4-.5-.2-.2-.5-.2-.8-.2-.3 0-.6 0-.8.2-.2 0-.3.3-.4.5-.2.2-.3.5-.3.7l-.1 1v.3l.1.9.4.7.6.4.9.2c.3 0 .7 0 1-.2l.9-.7 1 1.1-.7.7-1 .5c-.4.2-.9.2-1.4.2Z"/>
          </g>
        </svg>
        <img class="menulist" src="@/assets/sand.png">
      </div>
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
@media screen and (max-width: 768px) {
  .mainnotice {
    display: block;
    .notice {
      margin-bottom: 40px;
    }
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
    padding-top: 20px;
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    .menu {
      width: 23%;
      background: white;
      margin: 20px 1% 50px 1%;
      p {
        font-size: 1.2em;
        font-weight: 600;
        color: #AE5E00;
        text-align: center;
        line-height: 40px;
      }
      .menumore {
        position: relative;
        left: 25%;
        text-align: center;
        width: 50%;
      }
      .menulist {
        width: 100%;
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

</style>
