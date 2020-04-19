<template>
  <div class="c-burger" :class="{ 'is-open': navToggle }" @click="$emit('toggle')">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  props: ['navToggle']
}
</script>

<style lang="scss" scoped>
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
</style>