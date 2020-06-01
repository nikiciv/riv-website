<template>
  <v-app>
    <div class="content">
      <h1 v-if="error.statusCode === 404" class="styled-title">404</h1>
      <h1 v-else class="title">500</h1>
      <h2 v-if="error.statusCode === 404" class="styled-subtitle">{{ pageNotFound }}</h2>
      <h2 v-else class="styled-subtitle">{{ otherError }}</h2>
      <custom-button>
        <NuxtLink to="/">Home page</NuxtLink>
      </custom-button>
    </div>
  </v-app>
</template>

<script>
import Button from "@/components/Button";

export default {
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title
    };
  },
  components: {
    "custom-button": Button
  },
  data() {
    return {
      pageNotFound: "Page Not Found",
      otherError: "An error occurred"
    };
  }
};
</script>

<style scoped>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--bg-color);
  background-color: var(--main-text-color);
  height: 100%;
  flex-direction: column;
}

.styled-title {
  font-size: 150px;
  line-height: 1;
}

.styled-subtitle {
  font-weight: 400;
}

/* Tablet */
@media only screen and (max-width: 760px) {
  .styled-title {
    font-size: 120px;
  }
}
</style>
