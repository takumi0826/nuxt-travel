<template>
  <footer class="l-footer">
    <div class="p-footer">
      <div class="p-footer__sns">
        <a
          href="https://twitter.com/jpnwtgmd"
          target="_blank"
          rel="noopener noreferrer"
          class="p-footer__icon"
        >
          <font-awesome-icon :icon="['fab', 'twitter']" />
        </a>
        <a
          href="https://github.com/takumi0826/nuxt-travel"
          target="_blank"
          rel="noopener noreferrer"
          class="p-footer__icon"
        >
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
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
    display: flex;
    justify-content: center;
  }
  &__icon {
    display: block;
    &:nth-child(2) {
      margin-left: 10px;
    }
  }
}
</style>
