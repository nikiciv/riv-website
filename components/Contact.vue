<template>
  <div id="contact">
    <section-wrapper>
      <section-heading>
        <div>Don't be a stranger</div>
        <div>just say hello.</div>
      </section-heading>
      <p
        class="section-description-paragraph"
      >Feel free to get in touch in touch with me, I am always open to discussing new projects, creative ideas or opportunities.</p>
      <div class="button-wrapper">
        <link-button :href="emailLink" target="_blank">Say Hello</link-button>
      </div>
    </section-wrapper>
  </div>
</template>

<script>
import config from "~/assets/config.js";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";

const { email } = config;

export default {
  components: {
    SectionWrapper,
    SectionHeading,
    "link-button": Button
  },
  data() {
    return {
      emailLink: `mailto:${email}`
    };
  }
};
</script>

<style scoped>
#contact {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.section-description-paragraph {
  margin-top: 20px;
}
.button-wrapper {
  margin-top: 60px;
}
.button-wrapper > a {
  padding: 15px 20px;
}
</style>