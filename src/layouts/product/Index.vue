<template>
  <div>
    <Navbar />
    <ProductView />
    <Footer class="footer" />
  </div>
</template>

<script>
import Navbar from './Navbar'
import ProductView from './View'
import Footer from './Footer'
export default {
  name: 'ProductLayout',
  components: {
    Navbar, ProductView, Footer
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/ProductColor';

</style>
