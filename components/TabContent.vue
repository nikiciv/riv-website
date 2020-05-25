<template>
  <div class="tab-content">
    <div v-for="(job, index) in jobs" :key="index" :hidden="activeTabId !== index">
      <h4 class="job-title">{{job.title}}</h4>
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

<style>
.tab-content {
  position: relative;
  width: 100%;
  height: auto;
  padding-top: 12px;
  padding-left: 30px;
}
.job-title {
  color: gray;
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 5px;
}
</style>