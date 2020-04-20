<template>
  <div class="p-burgerMenu">
    <ul class="p-burgerMenu__items">
      <li class="p-burgerMenu__item">
        <nuxt-link
          @click.native="$emit('closeMenu')"
          v-scroll-to="{ el: '#post', offset: -headerHeight }"
          to
          class="p-burgerMenu__link"
        >ニュース</nuxt-link>
      </li>
      <li class="p-burgerMenu__item">
        <nuxt-link @click.native="tabChange('cooking')" to class="p-burgerMenu__link">お料理</nuxt-link>
      </li>
      <li class="p-burgerMenu__item">
        <nuxt-link @click.native="tabChange('rooms')" to class="p-burgerMenu__link">客室</nuxt-link>
      </li>
      <li class="p-burgerMenu__item">
        <nuxt-link @click.native="tabChange('access')" to class="p-burgerMenu__link">交通</nuxt-link>
      </li>
    </ul>
    <div class="p-burgerMenu__sns">
      <font-awesome-icon :icon="['fab', 'twitter']" />
      <font-awesome-icon :icon="['fab', 'github']" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['headerHeight'],
  methods: {
    tabChange(val) {
      this.$emit('closeMenu')
      this.$store.commit('tabChange', val)
      this.$scrollTo('#post', 500, {
        offset: -this.headerHeight
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.p-burgerMenu {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 80;

  &__items {
    padding: 140px 20px 40px;
  }

  &__item {
    opacity: 0;
    text-align: center;
    animation-name: burger-animation;
    animation-duration: 300ms;
    animation-iteration-count: 1;
    animation-timing-function: ease;
    animation-fill-mode: both;

    @for $i from 1 through 4 {
      &:nth-child(#{$i}) {
        animation-delay: 100ms * $i;
      }
    }
  }

  &__link {
    display: block;
    padding: 40px 0;
    font-size: 2.6rem;
    @include sm {
      padding: 30px 0;
      font-size: 2rem;
    }
  }

  &__sns {
    text-align: center;
    .svg-inline--fa {
      width: 30px;
      height: 30px;
      &:nth-child(1) {
        path {
          fill: #1da1f2;
        }
      }
      &:nth-child(2) {
        margin-left: 10px;
        path {
          fill: #171515;
        }
      }
    }
  }
}

@keyframes burger-animation {
  0% {
    opacity: 0;
    transform: translate(100%, 0);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}
</style>