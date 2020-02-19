<template>
  <div
    :class="{
      'navigation-sidebar': true,
      'navigation-sidebar-closed': menuOpen === false,
      'navigation-sidebar-opened': menuOpen === true,
    }"
  >
    <div class="sidebar"></div>
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
    menuOpen: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    salut: function() {}
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
  background-color: lightpink;
  padding: 50px;
  width: 50vw;
  height: 100%;
  position: relative;
  right: 0;
  margin-left: auto;

  box-shadow: -10px 0px 30px -15px black;
}
</style>