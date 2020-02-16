<template>
  <div class="content">
    <scroll-indicator />
    <navigation />
    <div class="main-section">
      <landing />
      <about />
    </div>
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
  background-color: #116466;
  height: 100%;
  flex-direction: column;
  font-family: "IBM Plex Serif", serif;
}
.main-section {
  padding: 0 150px;
  /* padding-top: 200px;
  padding-bottom: 200px; */
}
/* Desktop */
@media only screen and (max-width: 1000px) {
  .main-section {
    padding: 0 100px;
  }
}
/* Tablet */
@media only screen and (max-width: 760px) {
  .main-section {
    padding: 0 50px;
  }
}
/* Phone */
@media only screen and (max-width: 370px) {
  .main-section {
    padding: 0 25px;
  }
}
</style>
