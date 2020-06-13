<template>
  <h3 class="section-heading">
    <slot></slot>
  </h3>
</template>

<style>
.section-heading {
  font-family: monospace;
  color: var(--main-text-color);
  font-size: var(--section-heading-font-size-lg);
  margin: 20px 0;
}
/* Tablet */
@media only screen and (max-width: 760px) {
  .section-heading {
    font-size: var(--section-heading-font-size-md);
  }
}
/* Phablet */
@media only screen and (max-width: 520px) {
  .section-heading {
    font-size: var(--section-heading-font-size-sm);
  }
}
</style>