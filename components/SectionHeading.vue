<template>
  <h3 class="section-heading">{{ sectionTitle }}</h3>
</template>

<script>
export default {
  props: {
    sectionTitle: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
.section-heading {
  display: flex;
  color: var(--main-text-color);
  font-size: 40px;
  margin: 20px 0;
}
/* Tablet */
@media only screen and (max-width: 760px) {
  .section-heading {
    font-size: 24px;
  }
}
</style>