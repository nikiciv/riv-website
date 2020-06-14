<template>
  <div class="landing">
    <section-wrapper>
      <transition name="fadeup">
        <div
          class="title-overline"
          :style="{ transitionDelay: '100ms' }"
          v-show="isMounted"
        >
          Hi, my name is
        </div>
      </transition>
      <transition name="fadeup">
        <div
          class="title title-primary"
          :style="{ transitionDelay: '200ms' }"
          v-show="isMounted"
        >
          Ivo Nikić.
        </div>
      </transition>
      <transition name="fadeup">
        <div
          class="title title-secondary"
          :style="{ transitionDelay: '300ms' }"
          v-show="isMounted"
        >
          <vue-typed-js
            :strings="['code', 'JS', 'React', 'Vue', 'CSS', 'Node']"
            :loop="true"
          >
            <div>
              I write
              <span class="typing"></span>.
            </div>
          </vue-typed-js>
        </div>
      </transition>
      <transition name="fadeup">
        <p
          class="landing-description"
          :style="{ transitionDelay: '400ms' }"
          v-show="isMounted"
        >
          I'm a software engineer specialized in building high-quality web
          applications.
        </p>
      </transition>
      <transition name="fadeup">
        <div class="button-wrapper" v-show="isMounted">
          <link-button :href="emailLink" target="_blank"
            >Get In Touch</link-button
          >
        </div>
      </transition>
    </section-wrapper>
  </div>
</template>

<script>
import config from "~/assets/config.js";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";

const { email } = config;

export default {
  components: {
    SectionWrapper,
    "link-button": Button
  },
  data() {
    return {
      isMounted: false,
      emailLink: `mailto:${email}`
    };
  },
  mounted() {
    this.isMounted = true;
  }
};
</script>

<style scoped>
.landing {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
}
.title-overline {
  color: var(--color-secondary);
  margin-left: 5px;
  font-size: var(--font-size-lg);
}
.title {
  font-size: var(--font-size-title-big-desktop);
  margin: 0;
}
.title-primary {
  color: var(--color-txt-primary);
}
.title-secondary {
  color: var(--color-txt-secondary);
}
.landing-description {
  margin-top: 25px;
  max-width: 500px;
  margin-left: 3px;
  line-height: 25px;
  color: var(--color-txt-primary);
}
.button-wrapper {
  margin-top: 60px;
  transition-delay: 500ms;
}
.button-wrapper > a {
  padding: 15px 20px;
}
/* Desktop */
@media only screen and (max-width: 1000px) {
  .title-overline {
    font-size: var(--font-size-md);
  }
  .title {
    font-size: var(--font-size-title-desktop);
  }
}
/* Tablet */
@media only screen and (max-width: 720px) {
  .title {
    font-size: var(--font-size-title-tablet);
  }
  .button-wrapper > a {
    padding: 10px 15px;
  }
}
/* Phablet */
@media only screen and (max-width: 520px) {
  .main-section {
    padding: 0 25px;
  }
  .title-overline {
    margin-left: 3px;
  }
  .title {
    font-size: var(--font-size-title-phablet);
  }
}
</style>
