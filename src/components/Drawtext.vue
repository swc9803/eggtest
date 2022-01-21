<template>
  <canvas>
    <div>믿을 수 있는 SGG 달걀</div>
  </canvas>
</template>

<script>
import { onMounted } from 'vue'

export default {
  setup () {
    onMounted(() => {
      var eggtext = document.querySelector('canvas').getContext('2d')
      var dashLen = 200; var dashOffset = dashLen; var speed = 10
      var txt = '믿을 수 있는 SGG 달걀'; var x = 30; var i = 0

      eggtext.font = '1.55em dotum'
      eggtext.strokeStyle = eggtext.fillStyle = 'white';

      (function loop () {
        eggtext.clearRect(x, 0, 60, 150)
        eggtext.setLineDash([dashLen - dashOffset, dashOffset - speed]) // create a long dash mask
        dashOffset -= speed // reduce dash length
        eggtext.strokeText(txt[i], x, 90) // stroke letter

        if (dashOffset > 0) requestAnimationFrame(loop) // animate
        else {
          eggtext.fillText(txt[i], x, 90) // fill final letter
          dashOffset = dashLen // prep next char
          x += eggtext.measureText(txt[i++]).width + eggtext.lineWidth * Math.random()
          if (i < txt.length) requestAnimationFrame(loop)
        }
      })()
    })
  }
}
</script>

<style lang="scss" scoped>
canvas {
  position: relative;
  div {
    left: 50%;
    translate: (-50%);
  }
}
</style>
