<template>
  <particles-bg class="c-particles" type="custom" :config="config" :bg="true" />
</template>

<script>
export default {
  data: function() {
    return {
      config: {
        num: [0, 1],
        rps: 0.1,
        radius: [5, 40],
        life: [1.5, 2],
        v: [2, 0.1],
        tha: [-30, 30],
        // body: icon,
        alpha: [0.6, 0],
        scale: [0.1, 0.4],
        position: 'all',
        cross: 'dead',
        random: 15
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.c-particles {
  height: auto !important;
}
</style>