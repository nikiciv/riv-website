<template>
  <header class="header">
    <div class="logo">{{ceva}}</div>
    <nav class="nav-container">
      <div v-for="(navLink, index) in navLinks" :key="index" class="nav-list-item">{{navLink.name}}</div>
    </nav>
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
      isMounted: true,
      menuOpen: false,
      scrollDirection: "none",
      lastScrollTop: 0
    };
  },
  methods: {
    handleScroll: function() {
      const fromTop = window.scrollY;
      console.log(this.lastScrollTop);
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
  background-color: #0a192f;
  color: white;
  /* transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1); */
  /* z-index: 11; */
  /* filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important; */
  width: 100%;
  height: 100px;
  box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.7);
  /* height: ${props => (props.scrollDirection === 'none' ? theme.navHeight : theme.navScrollHeight)};
  box-shadow: ${props =>
    props.scrollDirection === 'up' ? `0 10px 30px -10px ${colors.shadowNavy}` : 'none'};
  transform: translateY(
    ${props => (props.scrollDirection === 'down' ? `-${theme.navScrollHeight}` : '0px')}
  );
  ${media.desktop`padding: 0 40px;`};
  ${media.tablet`padding: 0 25px;`}; */
}

.logo {
  margin-right: auto;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* a {
    display: block;
    color: ${colors.green};
    width: 42px;
    height: 42px;
    &:hover,
    &:focus {
      svg {
        fill: ${colors.transGreen};
      }
    }
    svg {
      fill: none;
      transition: ${theme.transition};
      user-select: none;
    }
  } */
}

.nav-container {
  display: flex;
  position: relative;
  color: #ccd6f6;
  /* font-family: ${fonts.SFMono}; */
  /* counter-reset: item 0;
  z-index: 12; */
}

.nav-list-item {
  margin-right: 20px;
}
</style>
