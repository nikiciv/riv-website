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
      <div class="logo-wrapper">
        <div class="circ1" v-show="isMounted"></div>
        <div class="circ2" v-show="isMounted"></div>
        <h1 class="logo-text" v-show="isMounted" :style="{ transitionDelay: '200ms' }">IVOENCODE</h1>
      </div>
      <nav class="nav-container">
        <transition name="fadedown" v-for="(navLink, index) in navLinks" :key="index">
          <a
            :href="navLink.url"
            v-smooth-scroll
            v-show="isMounted"
            :style="{ transitionDelay: index * 0.1 + 's' }"
            class="nav-list-item"
          >{{ navLink.name }}</a>
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
import NavigationSidebar from "@/components/NavigationSidebar";

const DELTA = 5;

export default {
  components: {
    NavigationSidebar
  },
  data() {
    return {
      ceva: config.siteTitle,
      navLinks: config.navLinks,
      isMounted: false,
      // menuOpen: false,
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
      } else if (fromTop > this.lastScrollTop && fromTop > 100) {
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
  background-color: var(--bg-color);
  color: var(--main-text-color);
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transform: translateY(0);
  width: 100%;
  height: 70px;
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

.logo-wrapper {
  margin-right: auto;
  cursor: pointer;
}

.circ1 {
  z-index: 2;
  position: absolute;
  margin-left: 40px;
  height: 35px;
  width: 35px;
  margin-top: 5px;
  border-radius: 100%;
  border: solid 3px rgb(44, 45, 90, 0.7);
  opacity: 0.005;
  -webkit-animation: puff-in-center 1s cubic-bezier(0.47, 0, 0.745, 0.715) both;
  animation: puff-in-center 1s cubic-bezier(0.47, 0, 0.745, 0.715) both;
}

.circ2 {
  z-index: 1;
  margin-top: 15px;
  margin-left: 25px;
  height: 25px;
  width: 25px;
  border-radius: 100%;
  background: green;
  -webkit-animation: slide-in-blurred-top 0.6s cubic-bezier(0.23, 1, 0.32, 1)
    both;
  animation: slide-in-blurred-top 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
}

.logo-text {
  text-align: center;
  font-size: 10px;
  margin-top: 10px;
  letter-spacing: 4px;
  font-family: "Nunito", sans-serif;
  animation: tracking-in-expand 1s cubic-bezier(0.215, 0.61, 0.355, 1) both;
}

@keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}

@keyframes puff-in-center {
  0% {
    -webkit-transform: scale(2);
    transform: scale(2);
    -webkit-filter: blur(4px);
    filter: blur(4px);
    opacity: 0;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-filter: blur(0px);
    filter: blur(0px);
    opacity: 1;
  }
}

@keyframes slide-in-blurred-top {
  0% {
    transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
    transform-origin: 50% 0%;
    filter: blur(40px);
    opacity: 0;
  }
  100% {
    transform: translateY(0) scaleY(1) scaleX(1);
    transform-origin: 50% 50%;
    filter: blur(0);
    opacity: 1;
  }
}

.nav-container {
  display: flex;
  position: relative;
  color: #ccd6f6;
  text-transform: uppercase;
  font-weight: 500;
}

.nav-list-item {
  margin-right: 20px;
  cursor: pointer;
  text-decoration: none;
  color: aliceblue;
}

.nav-list-item:hover {
  color: var(--third);
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
  background-color: var(--third);
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
  background-color: var(--third);
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
  background-color: var(--third);
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
  background-color: var(--third);
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
