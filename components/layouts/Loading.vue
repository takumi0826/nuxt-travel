<template>
  <transition name="load">
    <div class="c-loading" v-if="loading">
      <div class="c-loading__block">
        <span class="c-loading__text">{{ text }}</span>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      text: 'Loading...',
      loading: true
    }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.loading = false
      }, 2000)
    })
  }
}
</script>

<style lang="scss">
.c-loading {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 200;
  &::before {
    content: '';
    position: absolute;
    background-color: $brown-1;
    left: 0;
    right: 0;
    top: 50%;
    bottom: 0;
    animation-name: cover-slide1;
    animation-delay: 1.5s;
    animation-duration: 0.3s;
    animation-fill-mode: both;
    animation-iteration-count: 1;
    animation-timing-function: ease-in-out;
  }
  &::after {
    content: '';
    position: absolute;
    background-color: $brown-1;
    left: 0;
    right: 0;
    top: 0;
    bottom: 50%;
    animation-name: cover-slide2;
    animation-delay: 1.5s;
    animation-duration: 0.3s;
    animation-fill-mode: both;
    animation-iteration-count: 1;
    animation-timing-function: ease-in-out;
  }
  &__block {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    animation-name: text-animation;
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-iteration-count: 1;
    animation-timing-function: linear;
    z-index: 200;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      right: 100%;
      bottom: 0;
      height: 4px;
      background-color: #fff;
      animation-name: text-animationAfter;
      animation-duration: 0.8s;
      animation-fill-mode: both;
      animation-iteration-count: 1;
      animation-timing-function: ease-in;
    }
  }
  &__text {
    font-size: 3rem;
    color: #fff;
    opacity: 1;
    display: inline-block;
    margin: 0 2px;
    // @for $i from 1 through 5 {
    //   &:nth-child(#{$i}) {
    //     animation-delay: 0.05s * $i;
    //   }
    // }
    @include sm {
      font-size: 2.4rem;
    }
  }
}

@keyframes text-animation {
  0% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes text-animationAfter {
  0% {
  }
  60% {
    left: 20%;
    right: 50%;
    opacity: 0.8;
  }
  100% {
    opacity: 1;
    left: 100%;
    right: 0;
  }
}

@keyframes cover-slide1 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, 100%);
  }
}

@keyframes cover-slide2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, -100%);
  }
}
</style>