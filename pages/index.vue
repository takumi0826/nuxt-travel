<template>
  <div class="l-wrapper">
    <swiper />
    <div class="l-home-content">
      <div class="l-container">
        <h2 id="post" class="c-heading-2" data-aos="fade-in">
          <span class="en">News</span>
          <span class="ja">ニュース</span>
        </h2>
        <post />
      </div>
      <particles />
    </div>
    <div class="l-home-content">
      <div class="l-concept">
        <div class="l-container">
          <h2 class="c-heading-2" data-aos="fade-in">
            <span class="en">Concept</span>
            <span class="ja">コンセプト</span>
          </h2>
          <concept />
        </div>
      </div>
    </div>
    <div class="l-home-content">
      <div class="l-service">
        <div class="l-container">
          <h2 id="post" class="c-heading-2" data-aos="fade-in">
            <span class="en">Service</span>
            <span class="ja">サービス</span>
          </h2>
          <service />
        </div>
      </div>
    </div>
    <!-- <loading /> -->
  </div>
</template>

<script>
import Swiper from '~/components/Swiper.vue'
import Concept from '~/components/Concept.vue'
import Post from '~/components/Post.vue'
import Particles from '~/components/Particles.vue'
import Service from '~/components/Service.vue'

export default {
  components: {
    Swiper,
    Concept,
    Post,
    Particles,
    Service
  }
}
</script>

<style lang="scss">
.l-container {
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  @include xl {
    max-width: 1000px;
    padding: 0 20px;
  }
}
.l-home-content {
  margin-top: 120px;
  position: relative;
  @include xl {
    margin-top: 80px;
  }
}
.l-concept {
  padding: 120px 0 80px;
  background-color: #fff;
  @include xl {
    padding: 80px 0 60px;
  }
}
// .l-service {
//   padding: 120px 0 80px;
//   background-color: #fff;
//   @include xl {
//     padding: 80px 0 60px;
//   }
// }
.c-heading-2 {
  text-align: center;
  padding-bottom: 50px;
  .en {
    font-family: 'Noto Sans JP';
    font-size: 1.4rem;
    display: block;
    letter-spacing: 0.1em;
  }
  .ja {
    margin-top: 8px;
    font-size: 3.6rem;
    display: block;
  }
}
</style>
