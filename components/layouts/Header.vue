<template>
  <header ref="header" class="l-header">
    <div class="p-header">
      <div class="p-header__logo">
        <nuxt-link to="/">Portfolio</nuxt-link>
      </div>
      <div class="p-header__primary">
        <nav class="p-gnav">
          <ul class="p-gnav__items">
            <li class="p-gnav__item">
              <nuxt-link
                v-scroll-to="{ el: '#post', offset: -headerHeight }"
                to
                class="p-gnav__link"
              >
                <span class="p-gnav__text-ja">ニュース</span>
                <span class="p-gnav__text-en">news</span>
              </nuxt-link>
            </li>
            <li class="p-gnav__item" @click="tabChange('cooking')">
              <nuxt-link
                v-scroll-to="{ el: '#post', offset: -headerHeight }"
                to
                class="p-gnav__link"
              >
                <span class="p-gnav__text-ja">お料理</span>
                <span class="p-gnav__text-en">cooking</span>
              </nuxt-link>
            </li>
            <li class="p-gnav__item" @click="tabChange('rooms')">
              <nuxt-link
                v-scroll-to="{ el: '#post', offset: -headerHeight }"
                to
                class="p-gnav__link"
              >
                <span class="p-gnav__text-ja">客室</span>
                <span class="p-gnav__text-en">rooms</span>
              </nuxt-link>
            </li>
            <li class="p-gnav__item" @click="tabChange('access')">
              <nuxt-link
                v-scroll-to="{ el: '#post', offset: -headerHeight }"
                to
                class="p-gnav__link"
              >
                <span class="p-gnav__text-ja">交通</span>
                <span class="p-gnav__text-en">access</span>
              </nuxt-link>
            </li>
          </ul>
        </nav>
        <div class="p-privacy">
          <ul class="p-privacy__items">
            <li class="p-privacy__item p-privacy__item--login">
              <a href class="p-privacy__link">WEB予約</a>
            </li>
            <li class="p-privacy__item p-privacy__item--register">
              <a href class="p-privacy__link">お問い合わせ</a>
            </li>
          </ul>
        </div>
      </div>
      <l-hamburger :navToggle="navToggle" @toggle="navOpen" />
    </div>
    <transition name="fade">
      <l-sideMenu :headerHeight="headerHeight" @closeMenu="navToggle = false" v-show="navToggle" />
    </transition>
  </header>
</template>

<script>
import lHamburger from '~/components/layouts/Hamburger'
import lSideMenu from '~/components/layouts/SideMenu'
import { mapMutations } from 'vuex'
export default {
  components: {
    lHamburger,
    lSideMenu
  },
  data() {
    return {
      navToggle: false,
      headerHeight: 0
    }
  },
  mounted() {
    this.$nextTick(() => {
      const target = this.$refs.header.offsetHeight
      this.headerHeight = target
    })
  },
  methods: {
    navOpen() {
      this.navToggle = !this.navToggle
    },
    ...mapMutations(['tabChange'])
  }
}
</script>

<style lang="scss" scoped>
.l-header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 50;
}
.p-header {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background-color: rgba($brown-1, 0.8);
  z-index: 100;
  height: 117px;
  @include md {
    height: 90px;
  }
  @include sm {
    height: 70px;
  }
  &__logo {
    font-size: 2.6rem;
    color: #fff;
  }
  &__primary {
    display: flex;
    align-items: center;
    @include lg {
      display: none;
    }
  }
}
.p-gnav {
  &__items {
    display: flex;
    align-items: center;
    margin: auto;
  }
  &__item {
    border-left: 1px solid #fff;
    position: relative;
    &:first-child {
      border-left: none;
    }
    &::before {
      content: '';
      position: absolute;
      width: 60%;
      height: 3px;
      background-color: #fff;
      bottom: -10px;
      left: 50%;
      transform: translate(-50%, 100%);
      transition: all 0.5s;
      opacity: 0;
    }
    @media (min-width: $lg) {
      &:hover::before {
        transform: translate(-50%, 0);
        opacity: 1;
      }
    }
  }
  &__link {
    padding: 0 30px;
    display: block;
    color: #fff;
    text-align: center;
    line-height: 1.4;
  }
  &__text-ja {
    display: block;
    font-size: 1.8rem;
    @include xl {
      font-size: 1.6rem;
    }
  }
  &__text-en {
    display: block;
    font-size: 1.4rem;
    @include xl {
      font-size: 1.2rem;
    }
  }
}
.p-privacy {
  &__items {
    margin: auto;
    display: flex;
    align-items: center;
  }
  &__item {
    width: 100px;
    text-align: center;
    background-color: #fff;
    border-radius: 5px;
    &--login {
    }
    &--register {
      margin-left: 10px;
    }
  }
  &__link {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $brown-1;
    font-size: 1.4rem;
  }
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
</style>
