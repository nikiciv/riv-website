<template>
  <div
    :class="{
      'navigation-sidebar': true,
      'navigation-sidebar-closed': isNavigationSidebarOpen === false,
      'navigation-sidebar-opened': isNavigationSidebarOpen === true
    }"
    @click="toggleNavigationSidebar"
  >
    <div class="sidebar">
      <nav class="navigation-list">
        <a
          v-for="(navLink, index) in navLinks"
          :key="index"
          :href="navLink.url"
          v-smooth-scroll
          class="navigation-list-item"
        >{{ navLink.name }}</a>
      </nav>
    </div>
  </div>
</template>

<script>
import config from "~/assets/config.js";

export default {
  data() {
    return {
      navLinks: config.navLinks
    };
  },
  props: {
    isNavigationSidebarOpen: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    toggleNavigationSidebar: function() {
      this.$emit("toggle-navigation-sidebar");
    }
  }
};
</script>

<style>
.navigation-sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  outline: 0;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  display: none;
}

.navigation-sidebar-closed {
  transform: translateX(100vw);
  visibility: hidden;
}

.navigation-sidebar-opened {
  transform: translateX(0);
  visibility: visible;
}

@media only screen and (max-width: 760px) {
  .navigation-sidebar {
    display: block;
  }
}

.sidebar {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--bg-color);
  padding: 50px;
  height: 100%;
  position: relative;
  right: 0;
  margin-left: auto;
}

.navigation-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-direction: column;
  text-align: center;
  text-transform: uppercase;
  font-size: var(--font-size-lg);
}

.navigation-list-item {
  margin: 10px auto;
  cursor: pointer;
  text-decoration: none;
  color: var(--main-text-color);
  width: 100%;
}
</style>
