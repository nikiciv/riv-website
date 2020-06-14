<template>
  <a class="button">
    <slot></slot>
  </a>
</template>

<style>
.button {
  background-color: transparent;
  color: var(--color-secondary);
  border: 1px solid var(--color-secondary);
  border-radius: 3px;
  font-family: monospace;
  text-decoration: none;
  cursor: pointer;
  line-height: 1;
  outline: none;
}
</style>
