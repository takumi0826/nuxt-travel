<template>
  <footer class="l-footer">
    <div class="p-footer">
      <div class="p-sns">
        <font-awesome-icon :icon="['fab', 'twitter']" />
        <font-awesome-icon :icon="['fab', 'github']" />
      </div>
    </div>
    <p class="c-copy">©︎ 2020 PortFolio</p>
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
  .p-sns {
    text-align: center;
    svg {
      &:nth-child(2) {
        margin-left: 10px;
      }
    }
  }
  .c-copy {
    margin-top: 20px;
    text-align: center;
  }
}
</style>
