<template>
  <header
    :class="{
      header: true,
      'header-scroll-direction-none': scrollDirection === 'none',
      'header-scroll-direction-up': scrollDirection === 'up',
      'header-scroll-direction-down': scrollDirection === 'down'
    }"
  >
    <div class="header-elements-container">
      <logo :isMounted="isMounted" />
      <nav class="nav-container">
        <transition
          name="fadedown"
          v-for="(navLink, index) in navLinks"
          :key="index"
        >
          <a
            :href="navLink.url"
            v-smooth-scroll
            v-show="isMounted"
            :style="{ transitionDelay: index * 0.1 + 's' }"
            class="nav-list-item"
            >{{ navLink.name }}</a
          >
        </transition>
      </nav>
      <div class="hamburger" @click="toggleNavigationSidebar">
        <div class="hamburger-box">
          <div
            :class="{
              'hamburger-inner': isNavigationSidebarOpen === false,
              'hamburger-inner-menu-open': isNavigationSidebarOpen === true
            }"
          ></div>
        </div>
      </div>
      <navigation-sidebar
        :isNavigationSidebarOpen="isNavigationSidebarOpen"
        @toggle-navigation-sidebar="toggleNavigationSidebar"
      />
    </div>
  </header>
</template>

<script>
import config from "~/assets/config.js";
import Logo from "@/components/Logo";
import NavigationSidebar from "@/components/NavigationSidebar";

const DELTA = 5;
const NAV_HEIGHT = 100;

const { navLinks } = config;

export default {
  components: {
    NavigationSidebar,
    Logo
  },
  data() {
    return {
      navLinks,
      isMounted: false,
      scrollDirection: "none",
      lastScrollTop: 0
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
    },
    handleScroll: function() {
      const fromTop = window.scrollY;
      // Make sure it scrolls more than DELTA
      if (
        !this.isMounted ||
        Math.abs(this.lastScrollTop - fromTop) <= DELTA ||
        this.isNavigationSidebarOpen
      ) {
        return;
      }
      if (fromTop < DELTA) {
        this.scrollDirection = "none";
        // change 100 to navHeight in config
      } else if (fromTop > this.lastScrollTop && fromTop > NAV_HEIGHT) {
        if (this.scrollDirection !== "down") {
          this.scrollDirection = "down";
        }
      } else if (fromTop + window.innerHeight < document.body.scrollHeight) {
        if (this.scrollDirection !== "up") {
          this.scrollDirection = "up";
        }
      }

      this.lastScrollTop = fromTop;
    },
    handleResize: function() {
      if (window.innerWidth > 768 && this.isNavigationSidebarOpen) {
        this.toggleNavigationSidebar();
      }
    },
    handleKeydown: function(e) {
      if (!this.isNavigationSidebarOpen) {
        return;
      }

      if (e.which === 27 || e.key === "Escape") {
        this.toggleNavigationSidebar();
      }
    }
  },
  mounted() {
    this.isMounted = true;
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleResize);
    window.addEventListener("keydown", e => this.handleKeydown(e));
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("keydown", e => this.handleKeydown(e));
  }
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  padding: 0px 50px;
  background-color: var(--color-primary);
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transform: translateY(0);
  width: 100%;
  height: 70px;
  z-index: 100;
}
.header-scroll-direction-none {
  height: 100px;
}
.header-scroll-direction-up {
  box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.7);
}
.header-scroll-direction-down {
  transform: translateY(-70px);
}
.header-elements-container {
  display: flex;
  align-items: center;
  width: 100%;
  z-index: 12;
}
.nav-container {
  display: flex;
  position: relative;
  text-transform: uppercase;
}
.nav-list-item {
  margin-right: 20px;
  cursor: pointer;
  text-decoration: none;
  color: var(--color-txt-secondary);
}
.hamburger {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible;
  margin: 0 -12px 0 0;
  padding: 15px;
  cursor: pointer;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  text-transform: none;
  color: inherit;
  border: 0;
  background-color: transparent;
  display: none;
}
/* Tablet */
@media only screen and (max-width: 760px) {
  .hamburger {
    display: flex;
  }
  .nav-container {
    display: none;
  }
}
.hamburger-box {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 24px;
}
.hamburger-inner {
  position: absolute;
  width: 30px;
  height: 2px;
  border-radius: 3px;
  background-color: var(--color-txt-secondary);
  top: 50%;
  left: 0;
  right: 0;
  transition-duration: 0.22s;
  transition-property: transform;
  transition-delay: 0s;
  transform: rotate(0deg);
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
.hamburger-inner::before,
.hamburger-inner::after {
  content: "";
  display: block;
  background-color: var(--color-txt-secondary);
  position: absolute;
  left: auto;
  right: 0;
  width: 30px;
  height: 2px;
  transition-timing-function: ease;
  transition-duration: 0.15s;
  transition-property: transform;
  border-radius: 4px;
}
.hamburger-inner::before {
  width: 120%;
  top: -10px;
  opacity: 1;
  transition: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
}
.hamburger-inner::after {
  width: 80%;
  bottom: -10px;
  transform: rotate(0);
  transition: bottom 0.1s ease-in 0.25s,
    transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.hamburger-inner-menu-open {
  background-color: var(--color-txt-secondary);
  position: absolute;
  width: 30px;
  height: 2px;
  border-radius: 3px;
  top: 50%;
  left: 0;
  right: 0;
  transition-duration: 0.22s;
  transition-property: transform;
  transition-delay: 0.12s;
  transform: rotate(225deg);
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  z-index: 99;
}
.hamburger-inner-menu-open::before,
.hamburger-inner-menu-open::after {
  content: "";
  display: block;
  background-color: var(--color-txt-secondary);
  position: absolute;
  left: auto;
  right: 0;
  width: 30px;
  height: 2px;
  transition-timing-function: ease;
  transition-duration: 0.15s;
  transition-property: transform;
  border-radius: 4px;
}
.hamburger-inner-menu-open::before {
  width: 100%;
  top: 0;
  opacity: 0;
  transition: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
}
.hamburger-inner-menu-open::after {
  width: 100%;
  bottom: 0;
  transform: rotate(-90deg);
  transition: bottom 0.1s ease-out,
    transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
}
</style>
