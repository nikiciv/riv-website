<template>
  <div id="jobs">
    <div class="tabs-container">
      <ul class="tab-list">
        <li v-for="(company, index) in companies" :key="index">
          <button class="tab-button" ref="tabs" @click="setActiveTabId(index)">{{company}}</button>
        </li>
      </ul>
      <span class="highlight" :style="highlightTranslate" />
    </div>
    <tab-content />
  </div>
</template>

<script>
import TabContent from "@/components/TabContent";
import config from "~/assets/config.js";

const { companies } = config;

export default {
  components: {
    TabContent
  },
  data() {
    return {
      activeTabId: 0,
      companies
    };
  },
  computed: {
    highlightTranslate() {
      return `transform: translateY(${
        this.activeTabId > 0 ? this.activeTabId * 40 : 0
      }px)`;
    }
  },
  methods: {
    setActiveTabId: function(index) {
      this.activeTabId = index;
    }
  }
};
</script>

<style>
#jobs {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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
  border-left: 2px solid darkgray;
  text-align: left;
  white-space: nowrap;
}
.tab-button:hover,
.tab-button:focus,
.tab-button:active {
  color: var(--bg-color);
  background-color: var(--main-text-color);
  outline: 0;
}
.highlight {
  display: block;
  background-color: var(--secondary-color);
  width: 2px;
  height: 40px;
  border-radius: 3px;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;
  z-index: 10;
}
</style>