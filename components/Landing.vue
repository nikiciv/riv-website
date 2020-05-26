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
          class="title-primary"
          :style="{ transitionDelay: '200ms' }"
          v-show="isMounted"
        >
          Ivo Nikić.
        </div>
      </transition>
      <transition name="fadeup">
        <div
          class="title-secondary"
          :style="{ transitionDelay: '300ms' }"
          v-show="isMounted"
        >
          <vue-typed-js
            :strings="['code', 'JS', 'React', 'Vue', 'CSS', 'Node']"
            :loop="true"
          >
            <div>I write <span class="typing"></span>.</div>
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
    </section-wrapper>
  </div>
</template>

<script>
import SectionWrapper from "@/components/SectionWrapper";

export default {
  components: {
    SectionWrapper
  },
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

.title-overline {
  color: var(--secondary-text-color);
  margin-left: 5px;
  font-size: 22px;
  font-weight: normal;
}

.title-primary {
  color: var(--main-text-color);
  font-size: 80px;
  margin: 0;
}

.title-secondary {
  color: var(--secondary-text-color);
  font-size: 80px;
  margin: 0;
}

.landing-description {
  margin-top: 25px;
  max-width: 500px;
  margin-left: 3px;
}

/* Desktop */
@media only screen and (max-width: 1000px) {
  .title-overline {
    font-size: 18px;
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
@media only screen and (max-width: 720px) {
  .title-overline {
    font-size: 18px;
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
@media only screen and (max-width: 400px) {
  .main-section {
    padding: 0 25px;
  }

  .title-overline {
    font-size: 16px;
    margin-left: 3px;
  }

  .title-primary {
    font-size: 40px;
    margin: 0;
  }

  .title-secondary {
    font-size: 40px;
    margin: 0;
  }
}
</style>
