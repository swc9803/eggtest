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
      var ctx = document.querySelector('canvas').getContext('2d')
      var dashLen = 200; var dashOffset = dashLen; var speed = 10
      var txt = '믿을 수 있는 SGG 달걀'; var x = 30; var i = 0

      ctx.font = '1.55em dotum'
      ctx.strokeStyle = ctx.fillStyle = '#1f2f90';

      (function loop () {
        ctx.clearRect(x, 0, 60, 150)
        ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]) // create a long dash mask
        dashOffset -= speed // reduce dash length
        ctx.strokeText(txt[i], x, 90) // stroke letter

        if (dashOffset > 0) requestAnimationFrame(loop) // animate
        else {
          ctx.fillText(txt[i], x, 90) // fill final letter
          dashOffset = dashLen // prep next char
          x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random()
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
    width: 100%;
    left: 50%;
    translate: (-50%);
  }
}
</style>
