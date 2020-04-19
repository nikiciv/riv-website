<template>
  <div :class="{ 'content': true, 'content-no-overflow': isNavigationSidebarOpen === true }">
    <navigation
      :isNavigationSidebarOpen="isNavigationSidebarOpen"
      @toggle-navigation-sidebar="toggleNavigationSidebar"
    />
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
  data() {
    return {
      isNavigationSidebarOpen: false
    };
  },
  components: {
    ScrollIndicator,
    Navigation,
    Landing,
    About
  },
  methods: {
    toggleNavigationSidebar: function() {
      this.isNavigationSidebarOpen = !this.isNavigationSidebarOpen;
    }
  }
};
</script>

<style scoped>
.content {
  display: flex;
  background-color: var(--bg-color);
  height: 100%;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
}
.content-no-overflow {
  height: 100vh;
  overflow: hidden;
}
.main-section {
  padding: 0 150px;
  /* padding-top: 200px;
  padding-bottom: 200px; */
  overflow: hidden;
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
