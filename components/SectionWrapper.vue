<template>
  <div class="section-wrapper">
    <slot></slot>
  </div>
</template>

<style>
.section-wrapper {
  padding: 150px 0;
}
/* Tablet */
@media only screen and (max-width: 760px) {
  .section-wrapper {
    padding: 100px 0;
  }
}
</style>