<template>
  <div
    :class="{
      content: true,
      'content-no-overflow': isNavigationSidebarOpen === true
    }"
  >
    <navigation
      :isNavigationSidebarOpen="isNavigationSidebarOpen"
      @toggle-navigation-sidebar="toggleNavigationSidebar"
    />
    <div class="main-section">
      <landing />
      <about />
      <jobs />
      <contact />
    </div>
    <footer class="footer-section">
      <div>
        Built by Ivo Nikić with
        <font-awesome-icon :icon="['fab', 'vuejs']" color="mediumseagreen" />
      </div>
    </footer>
  </div>
</template>

<script>
import ScrollIndicator from "~/components/ScrollIndicator";
import Navigation from "~/components/Navigation";
import Landing from "~/components/Landing";
import About from "~/components/About";
import Jobs from "~/components/Jobs";
import Contact from "~/components/Contact";

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
    About,
    Jobs,
    Contact
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
  font-family: "Quicksand", sans-serif;
  font-size: var(--font-size-md);
}
.content-no-overflow {
  height: 100vh;
  overflow: hidden;
}
.main-section {
  padding: 0 20%;
  overflow: hidden;
}
.footer-section {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  font-family: monospace;
  min-height: 70px;
}
/* Big Desktop */
@media only screen and (max-width: 1200px) {
  .main-section {
    padding: 0 150px;
  }
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
@media only screen and (max-width: 400px) {
  .main-section {
    padding: 0 25px;
  }
}
</style>
