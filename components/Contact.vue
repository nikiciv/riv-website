<template>
  <div id="contact">
    <section-wrapper>
      <section-heading sectionTitle="Don't be a stranger" />
      <section-heading sectionTitle="just say hello." />
      <p>Feel free to get in touch in touch with me, I am always open to discussing new projects, creative ideas or opportunities.</p>
      <custom-button>Say Hello</custom-button>
    </section-wrapper>
  </div>
</template>

<script>
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";

export default {
  components: {
    SectionWrapper,
    SectionHeading,
    "custom-button": Button
  }
};
</script>

<style>
#contact {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>