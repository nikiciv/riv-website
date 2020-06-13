<template>
  <a class="button">
    <slot></slot>
  </a>
</template>

<style>
.button {
  background-color: transparent;
  color: var(--main-text-color);
  border: 1px solid var(--main-text-color);
  border-radius: 3px;
  font-family: monospace;
  text-decoration: none;
  cursor: pointer;
  line-height: 1;
  outline: none;
}
</style>


