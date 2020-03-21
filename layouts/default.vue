<template>
  <div>
    <l-header />
    <nuxt />
    <l-footer />
  </div>
</template>

<script>
import lHeader from '~/components/Header.vue'
import lFooter from '~/components/Footer.vue'
export default {
  components: {
    lHeader,
    lFooter
  }
}
</script>
