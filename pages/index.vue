<template>
  <div class="l-wrapper">
    <swiper />
    <div class="l-section l-section--news">
      <div class="l-container">
        <h2 id="post" class="c-heading" data-aos="fade-in">
          <span class="c-heading__textEn">News</span>
          <span class="c-heading__textJa">ニュース</span>
        </h2>
        <post />
      </div>
      <particles />
    </div>
    <div class="l-section l-section--concept">
      <div class="l-container">
        <h2 class="c-heading" data-aos="fade-in">
          <span class="c-heading__textEn">Concept</span>
          <span class="c-heading__textJa">コンセプト</span>
        </h2>
        <concept />
      </div>
    </div>
    <div class="l-section">
      <div class="l-container">
        <h2 id="post" class="c-heading" data-aos="fade-in">
          <span class="c-heading__textEn">Service</span>
          <span class="c-heading__textJa">サービス</span>
        </h2>
        <service />
      </div>
    </div>
    <loading />
  </div>
</template>

<script>
import Swiper from '~/components/Swiper.vue'
import Concept from '~/components/Concept.vue'
import Post from '~/components/Post.vue'
import Particles from '~/components/Particles.vue'
import Service from '~/components/Service.vue'
import Loading from '~/components/layouts/Loading.vue'

export default {
  components: {
    Swiper,
    Concept,
    Post,
    Particles,
    Service,
    Loading
  }
}
</script>

<style lang="scss">
.l-container {
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  @include xl {
    max-width: 1000px;
    padding: 0 20px;
  }
}

.l-section {
  padding: 120px 0 80px;
  @include xl {
    padding: 80px 0 60px;
  }

  &--news {
    position: relative;
  }

  &--concept {
    background-color: #fff;
  }
}

.c-heading {
  text-align: center;
  padding-bottom: 50px;

  &__textEn {
    font-family: 'Noto Sans JP';
    font-size: 1.4rem;
    display: block;
    letter-spacing: 0.1em;
  }

  &__textJa {
    margin-top: 8px;
    font-size: 3.6rem;
    display: block;
  }
}
</style>
