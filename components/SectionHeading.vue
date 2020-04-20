<template>
  <h3 class="section-heading-container">{{ sectionTitle }}</h3>
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
.section-heading-container {
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 40px;
  font-size: 30px;
}

.section-heading-container::before {
  content: "";
  background-color: gray;
  height: 1px;
  width: 50px;
  margin-right: 10px;
}

.section-heading-container::after {
  content: "";
  background-color: gray;
  height: 1px;
  width: 300px;
  margin-left: 10px;
}
</style>