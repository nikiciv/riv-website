<template>
  <div class="content">
    <navigation />
  </div>
</template>

<script>
import Navigation from "~/components/Navigation";

export default {
  components: {
    Navigation
  }
};
</script>

<style scoped>
.content {
  display: flex;
  background-color: #0a192f;
  height: 100%;
  flex-direction: column;
  min-height: 300vh;
}
</style>
