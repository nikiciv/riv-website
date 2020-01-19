<template>
  <div class="container">
    <a href="#div-id" v-smooth-scroll>Anchor</a>
    <div id="div-id"></div>
  </div>
</template>

<script>
export default {
  layout: "home",
  head: {
    title: "Home"
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;

  height: 100%;
  min-height: 300vh;
}

#div-id {
  height: 50px;
  width: 100px;
  background-color: red;
  position: relative;
  top: 200px;
}
</style>
