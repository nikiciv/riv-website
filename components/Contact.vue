<template>
  <div id="contact">
    <section-wrapper>
      <section-heading sectionTitle="Get In Touch" />
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
</style>