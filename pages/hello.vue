<template>
  <div>
    <div class="content">Salutare.</div>
    <button @click="show = !show">Toggle</button>
    <transition name="fade">
      <p v-if="show">Ivo Nikic</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  }
};
</script>

<style scoped>
.content {
  color: red;
  font-size: 30px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin: 30px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
