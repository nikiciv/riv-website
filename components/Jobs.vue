<template>
  <div id="jobs">
    <section-wrapper>
      <section-heading>Where I've worked</section-heading>
      <div class="tabs-container">
        <ul class="tab-list">
          <li v-for="(job, index) in jobs" :key="index">
            <button
              class="tab-button"
              ref="tabs"
              @click="setActiveTabId(index)"
            >
              {{ job.company }}
            </button>
          </li>
        </ul>
        <tab-content :jobs="jobs" :activeTabId="activeTabId" />
      </div>
    </section-wrapper>
  </div>
</template>

<script>
import config from "~/assets/config.js";
import SectionWrapper from "@/components/SectionWrapper";
import TabContent from "@/components/TabContent";
import SectionHeading from "@/components/SectionHeading";

const { jobs } = config;

export default {
  components: {
    SectionWrapper,
    TabContent,
    SectionHeading
  },
  data() {
    return {
      activeTabId: 0,
      jobs
    };
  },
  methods: {
    setActiveTabId: function(index) {
      this.activeTabId = index;
    }
  }
};
</script>

<style scoped>
#jobs {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: var(--color-txt-primary);
}
.tabs-container {
  display: flex;
  align-items: flex-start;
  position: relative;
}
.tab-list {
  display: block;
  position: relative;
  width: max-content;
  z-index: 3;
  padding: 0;
  margin: 0;
  list-style: none;
}
.tab-button {
  display: inline-block;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  color: inherit;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: transparent;
  height: 40px;
  padding: 0 20px 2px;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  border-left: 2px solid var(--color-txt-secondary);
  text-align: left;
  white-space: nowrap;
}
.tab-button:hover,
.tab-button:focus,
.tab-button:active {
  color: var(--color-primary);
  background-color: var(--color-txt-secondary);
  outline: 0;
}
/* Phablet */
@media only screen and (max-width: 520px) {
  .tabs-container {
    display: block;
  }
  .tab-list {
    display: flex;
    overflow-x: scroll;
    margin-bottom: 30px;
    width: calc(100% + 100px);
    margin-left: -50px;
  }
}
@media only screen and (max-width: 400px) {
  .tab-list {
    width: calc(100% + 50px);
    margin-left: -25px;
  }
}
</style>
