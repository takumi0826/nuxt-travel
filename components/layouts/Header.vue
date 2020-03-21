<template>
  <header ref="header" class="l-header">
    <div class="p-header">
      <div class="p-header__logo">
        <nuxt-link to="/">Portfolio</nuxt-link>
      </div>
      <div class="p-header__primary">
        <nav class="p-gnav">
          <ul class="p-gnav__list">
            <li class="p-gnav__list-item">
              <nuxt-link
                v-scroll-to="{ el: '#post', offset: -headerHeight }"
                to
                class="p-gnav__link"
              >
                <span class="p-gnav__text-ja">ニュース</span>
                <span class="p-gnav__text-en">news</span>
              </nuxt-link>
            </li>
            <li class="p-gnav__list-item" @click="tabChange(1)">
              <nuxt-link
                v-scroll-to="{ el: '#post', offset: -headerHeight }"
                to
                class="p-gnav__link"
              >
                <span class="p-gnav__text-ja">お料理</span>
                <span class="p-gnav__text-en">cooking</span>
              </nuxt-link>
            </li>
            <li class="p-gnav__list-item" @click="tabChange(2)">
              <nuxt-link
                v-scroll-to="{ el: '#post', offset: -headerHeight }"
                to
                class="p-gnav__link"
              >
                <span class="p-gnav__text-ja">客室</span>
                <span class="p-gnav__text-en">rooms</span>
              </nuxt-link>
            </li>
            <li class="p-gnav__list-item" @click="tabChange(3)">
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
          <ul class="p-privacy__list">
            <li class="p-privacy__list-item p-privacy__list-item--login">
              <a href class="p-privacy__link">WEB予約</a>
            </li>
            <li class="p-privacy__list-item p-privacy__list-item--register">
              <a href class="p-privacy__link">お問い合わせ</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="c-burger" :class="{ 'is-open': navToggle }" @click="navOpen">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <transition name="fade">
      <div class="p-burger-menu" v-if="navToggle">
        <ul class="p-burger-menu__list">
          <li class="p-burger-menu__list-item">
            <nuxt-link
              v-scroll-to="{ el: '#post', offset: -headerHeight }"
              to
              class="p-burger-menu__link"
            >ニュース</nuxt-link>
          </li>
          <li class="p-burger-menu__list-item" @click="tabChange(1)">
            <nuxt-link
              v-scroll-to="{ el: '#post', offset: -headerHeight }"
              to
              class="p-burger-menu__link"
            >お料理</nuxt-link>
          </li>
          <li class="p-burger-menu__list-item" @click="tabChange(2)">
            <nuxt-link
              v-scroll-to="{ el: '#post', offset: -headerHeight }"
              to
              class="p-burger-menu__link"
            >客室</nuxt-link>
          </li>
          <li class="p-burger-menu__list-item" @click="tabChange(3)">
            <nuxt-link
              v-scroll-to="{ el: '#post', offset: -headerHeight }"
              to
              class="p-burger-menu__link"
            >交通</nuxt-link>
          </li>
        </ul>
        <div class="p-sns">
          <font-awesome-icon :icon="['fab', 'twitter']" />
          <font-awesome-icon :icon="['fab', 'github']" />
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
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
  &__list {
    display: flex;
    align-items: center;
    margin: auto;
  }
  &__list-item {
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
    font-size: 1.4rem;
    @include xl {
      font-size: 1.2rem;
    }
    display: block;
  }
}
.p-privacy {
  &__list {
    margin: auto;
    display: flex;
    align-items: center;
  }
  &__list-item {
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
.c-burger {
  display: none;
  @include lg {
    display: block;
    width: 40px;
    height: 22px;
    position: relative;
    z-index: 100;
    > span {
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: #fff;
      transform: translateY(-50%);
      transition: 0.3s;
      &:nth-child(1) {
        top: 0;
      }
      &:nth-child(2) {
        top: 50%;
      }
      &:nth-child(3) {
        top: 100%;
      }
    }
    &.is-open {
      > span {
        &:nth-child(1) {
          top: 50%;
          transform: translate(0, -50%) rotate(45deg);
        }
        &:nth-child(2) {
          opacity: 0;
        }
        &:nth-child(3) {
          top: 50%;
          transform: translate(0, -50%) rotate(135deg);
        }
      }
    }
  }
  @include sm {
    width: 30px;
    height: 18px;
  }
}
.p-burger-menu {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 80;
  // background-color: $brown-1;
  &__list {
    padding: 140px 20px 40px;
  }
  &__list-item {
    opacity: 0;
    text-align: center;
    // color: $brown-1;
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
}
.p-sns {
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
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
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
