<template>
  <div>
    <ul class="skills-container">
      <li class="skill-item" v-for="(skill, index) in skills" :key="index">
        {{ skill }}
      </li>
    </ul>
  </div>
</template>

<script>
import config from "~/assets/config.js";

export default {
  data() {
    return {
      skills: config.skills
    };
  }
};
</script>

<style>
.skills-container {
  column-count: 3;
  list-style: none;
  color: var(--color-txt-secondary);
}
.skill-item {
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 15px;
  font-weight: bold;
}
.skill-item::before {
  content: "▹";
  position: absolute;
  left: 0;
  color: var(--color-secondary);
}
/* Desktop */
@media only screen and (max-width: 1000px) {
  .skills-container {
    column-count: 2;
  }
}
</style>
