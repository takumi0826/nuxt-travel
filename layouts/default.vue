<template>
  <div id="top">
    <l-header />
    <nuxt />
    <scroll-top />
    <l-footer />
  </div>
</template>

<script>
import lHeader from '~/components/layouts/Header.vue'
import lFooter from '~/components/layouts/Footer.vue'
import ScrollTop from '~/components/ScrollTop.vue'
export default {
  components: {
    lHeader,
    lFooter,
    ScrollTop
  }
}
</script>
