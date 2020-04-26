<template>
  <div id="about">
    <!-- sectionTitle & other section info will be passed from config file in future -->
    <section-heading sectionTitle="About" />
  </div>
</template>

<script>
import SectionHeading from "@/components/SectionHeading";
export default {
  components: {
    SectionHeading
  }
};
</script>

<style>
#about {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>