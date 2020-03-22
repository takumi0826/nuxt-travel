<template>
  <footer class="l-footer">
    <div class="p-footer">
      <div class="p-footer__sns">
        <font-awesome-icon :icon="['fab', 'twitter']" />
        <font-awesome-icon :icon="['fab', 'github']" />
      </div>
    </div>
    <p class="l-footer__copy">©︎ 2020 PortFolio</p>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.l-footer {
  margin-top: 80px;
  padding: 40px 0 20px;
  background-color: $brown-2;
  color: #fff;
  &__copy {
    margin-top: 20px;
    text-align: center;
  }
}
.p-footer {
  &__sns {
    text-align: center;
    svg {
      &:nth-child(2) {
        margin-left: 10px;
      }
    }
  }
}
</style>
