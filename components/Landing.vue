<template>
  <div class="landing">
    <transition name="fadeup">
      <div v-show="isMounted" class="greeting" :style="{transitionDelay: '100ms'}">Hello.</div>
    </transition>
    <transition name="fadeup">
      <div
        class="title-primary"
        :style="{transitionDelay: '200ms'}"
        v-show="isMounted"
      >I am Ivo Nikić.</div>
    </transition>
    <transition name="fadeup">
      <div
        class="title-secondary"
        :style="{transitionDelay: '300ms'}"
        v-show="isMounted"
      >I make magic on the Web.</div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMounted: false
    };
  },
  mounted() {
    this.isMounted = true;
  }
};
</script>

<style>
.landing {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
}

.greeting {
  color: greenyellow;
  font-size: 30px;
}

.title-primary {
  font-size: 80px;
  margin: 0;
}

.title-secondary {
  font-size: 80px;
  margin: 0;
}

/* Desktop */
@media only screen and (max-width: 1000px) {
  .greeting {
    font-size: 20px;
  }
  .title-primary {
    font-size: 70px;
    margin: 0;
  }

  .title-secondary {
    font-size: 70px;
    margin: 0;
  }
}
/* Tablet */
@media only screen and (max-width: 760px) {
  .greeting {
    font-size: 20px;
  }
  .title-primary {
    font-size: 50px;
    margin: 0;
  }

  .title-secondary {
    font-size: 50px;
    margin: 0;
  }
}
/* Phone */
/* @media only screen and (max-width: 370px) {
  .main-section {
    padding: 0 25px;
  }
} */
</style>