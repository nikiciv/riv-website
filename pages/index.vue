<template>
  <div class="content">
    <scroll-indicator />
    <navigation />
    <landing />
    <about />
  </div>
</template>

<script>
import ScrollIndicator from "~/components/ScrollIndicator";
import Navigation from "~/components/Navigation";
import Landing from "~/components/Landing";
import About from "~/components/About";

export default {
  components: {
    ScrollIndicator,
    Navigation,
    Landing,
    About
  }
};
</script>

<style scoped>
.content {
  display: flex;
  background: linear-gradient(to bottom left, #000000 0%, #666699 100%);
  height: 100%;
  flex-direction: column;
  font-family: "IBM Plex Serif", serif;
}
</style>
