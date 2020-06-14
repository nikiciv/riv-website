<template>
  <v-app>
    <div class="content">
      <h1 v-if="error.statusCode === 404" class="styled-title">404</h1>
      <h1 v-else class="styled-title">500</h1>
      <h2 v-if="error.statusCode === 404" class="styled-subtitle">
        {{ pageNotFound }}
      </h2>
      <h2 v-else class="styled-subtitle">{{ otherError }}</h2>
      <div class="button-wrapper">
        <link-button href="/">Home Page</link-button>
      </div>
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
    "link-button": Button
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
  height: 100%;
  background-color: var(--color-primary);
  color: var(--color-txt-secondary);
  flex-direction: column;
}
.button-wrapper {
  margin-top: 30px;
}

.button-wrapper > a {
  padding: 15px 20px;
  color: var(--color-secondary);
}

.styled-title {
  font-weight: bold;
  font-size: 150px;
  line-height: 1;
}

.styled-subtitle {
  font-weight: 500;
}

/* Tablet */
@media only screen and (max-width: 760px) {
  .styled-title {
    font-size: 120px;
  }
  .button-wrapper > a {
    padding: 10px 15px;
  }
}
</style>
