<template>
  <div class="scroll-indicator"></div>
</template>

<script>
export default {
  mounted() {
    var vm = this;
    window.addEventListener("scroll", function(e) {
      var scrollPos = window.scrollY;
      var winHeight = window.innerHeight;
      var docHeight = document.documentElement.scrollHeight;
      var perc = (100 * scrollPos) / (docHeight - winHeight);
      vm.$el.style.width = perc + "%";
    });
  }
};
</script>

<style scoped>
.scroll-indicator {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background-color: var(--color-secondary);
  z-index: 999;
}
</style>
