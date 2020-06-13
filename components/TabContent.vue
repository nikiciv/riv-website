<template>
  <div class="tab-content">
    <div
      v-for="(job, index) in jobs"
      :key="index"
      :hidden="activeTabId !== index"
      style="position: relative"
    >
      <h4 class="job-title">{{job.title}}</h4>
      <ul class="job-description-container">
        <li
          v-for="(descriptionParagraph, index) in job.description"
          :key="index"
          class="job-description-paragraph"
        >{{descriptionParagraph}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    jobs: {
      type: Array,
      required: true
    },
    activeTabId: {
      type: Number,
      required: true
    }
  }
};
</script>

<style scoped>
.tab-content {
  width: 100%;
  height: auto;
  padding-left: 30px;
}
.job-title {
  color: gray;
  font-size: var(--font-size-lg);
  font-weight: bold;
  margin-bottom: 20px;
}
.job-description-container {
  list-style: none;
}
.job-description-paragraph {
  display: flex;
  align-items: center;
  padding-left: 30px;
  padding-bottom: 10px;
  line-height: 25px;
}
.job-description-paragraph::before {
  content: "▹";
  position: absolute;
  left: 0;
  color: var(--main-text-color);
  font-size: var(--font-size-md);
  line-height: 18px;
}
/* Phablet */
@media only screen and (max-width: 520px) {
  .job-title {
    text-align: center;
  }
}
</style>