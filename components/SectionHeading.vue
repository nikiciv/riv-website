<template>
  <h3 class="section-heading">
    <slot></slot>
  </h3>
</template>

<style>
.section-heading {
  font-family: monospace;
  color: var(--main-text-color);
  font-size: 50px;
  margin: 20px 0;
}
/* Tablet */
@media only screen and (max-width: 760px) {
  .section-heading {
    font-size: 40px;
  }
}
/* Phablet */
@media only screen and (max-width: 520px) {
  .section-heading {
    font-size: 30px;
  }
}
</style>