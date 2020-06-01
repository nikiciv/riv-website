<template>
  <div :class="{ 'content': true, 'content-no-overflow': isNavigationSidebarOpen === true }">
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
      <div>Built by Ivo Nikić with Vue.js</div>
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
  font-family: "Lato", sans-serif;
}
.content-no-overflow {
  height: 100vh;
  overflow: hidden;
}
.main-section {
  padding: 0 200px;
  /* padding-top: 200px;
  padding-bottom: 200px; */
  overflow: hidden;
}
.footer-section {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  min-height: 70px;
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
