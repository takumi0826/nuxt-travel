<template>
  <button class="c-scroll" v-scroll-to="'#top'">
    <span class="c-scroll__triangle"></span>
    <span class="c-scroll__text">PAGE TOP</span>
  </button>
</template>

<script>
</script>

<style lang="scss" scoped>
.c-scroll {
  position: fixed;
  right: 20px;
  bottom: 60px;
  width: 80px;
  height: 80px;
  border-radius: 100%;
  background-color: #fff;
  border: 2px solid $brown-1;
  z-index: 50;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @include sm {
    width: 70px;
    height: 70px;
  }

  &__triangle {
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 9px 15.6px 9px;
    border-color: transparent transparent $brown-1 transparent;
    animation-name: scroll-top;
    animation-duration: 1.4s;
    animation-iteration-count: infinite;
    animation-delay: 0;
    animation-timing-function: ease;
    animation-fill-mode: both;
  }

  &__text {
    display: block;
    margin-top: 8px;
    color: $brown-1;
    font-size: 1.4rem;
    @include xl {
      font-size: 1.2rem;
    }
    @include sm {
      font-size: 1rem;
    }
  }
}

@keyframes scroll-top {
  0% {
    transform: translateY(-60%);
  }
  60% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-60%);
  }
}
</style>