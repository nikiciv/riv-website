<template>
  <header
    :class="{
      header: true,
      'header-scroll-direction-none': scrollDirection === 'none',
      'header-scroll-direction-up': scrollDirection === 'up',
      'header-scroll-direction-down': scrollDirection === 'down'
    }"
  >
    <transition name="fade">
      <div class="logo" v-show="isMounted" :style="{transitionDelay: '200ms'}">{{ ceva }}</div>
    </transition>
    <nav class="nav-container">
      <transition name="fadedown" v-for="(navLink, index) in navLinks" :key="index">
        <a
          :href="navLink.url"
          v-smooth-scroll
          v-show="isMounted"
          :style="{transitionDelay: index * 0.1 + 's'}"
          class="nav-list-item"
        >{{ navLink.name }}</a>
      </transition>
    </nav>
    <div class="hamburger">
      <div class="hamburger-box">
        <div class="hamburger-inner"></div>
      </div>
    </div>
  </header>
</template>

<script>
import config from "~/assets/config.js";

const DELTA = 5;

export default {
  data() {
    return {
      ceva: config.siteTitle,
      navLinks: config.navLinks,
      isMounted: false,
      menuOpen: false,
      scrollDirection: "none",
      lastScrollTop: 0
    };
  },
  methods: {
    handleScroll: function() {
      const fromTop = window.scrollY;
      // Make sure it scrolls more than DELTA
      if (
        !this.isMounted ||
        Math.abs(this.lastScrollTop - fromTop) <= DELTA ||
        this.menuOpen
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
    }
  },
  mounted() {
    this.isMounted = true;
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
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
  background-color: #116466;
  color: white;
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

.logo {
  margin-right: auto;
}

.nav-container {
  display: flex;
  position: relative;
  color: #ccd6f6;
}

.nav-list-item {
  margin-right: 20px;
  cursor: pointer;
  text-decoration: none;
  color: aliceblue;
}

.nav-list-item:hover {
  color: #64ffda;
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

@media only screen and (max-width: 760px) {
  .hamburger {
    display: flex;
  }
}

.hamburger-box {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 24px;
}

.hamburger-inner {
}

.fade-enter-active,
.fade-leave-active {
  opacity: 1;
  transition: opacity 500ms cubic-bezier(0.645, 0.045, 0.355, 1);
}
.fade-enter,
.fade-leave-to {
  opacity: 0.01;
  transition: opacity 500ms cubic-bezier(0.645, 0.045, 0.355, 1);
}

.fadedown-enter-active,
.fadedown-leave-active {
  opacity: 1;
  transform: translateY(0px);
  transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1),
    transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
}
.fadedown-enter,
.fadedown-leave-to {
  opacity: 0.01;
  transform: translateY(-20px);
  transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1),
    transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
}
</style>

