<template>
  <div class="header">
    <div class="logo">{{ceva}}</div>
    <div v-for="(navLink, index) in navLinks" :key="index" class="navigation">{{navLink.name}}</div>
  </div>
</template>

<script>
import config from "~/assets/config.js";
export default {
  data() {
    return {
      ceva: config.siteTitle,
      navLinks: config.navLinks
    };
  },
  methods: {
    handleScroll: function() {
      console.log("scrolling");
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
  background-color: green;
  color: white;
}

.logo {
  margin-right: auto;
}

.navigation {
  margin-right: 10px;
}
</style>
