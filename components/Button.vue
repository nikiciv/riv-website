<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style>
.button {
  background-color: transparent;
  color: var(--main-text-color);
  border: 1px solid var(--main-text-color);
  border-radius: 3px;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)";
  padding: 15px 20px;
  font-size: 12px;
}
.button:hover {
  background-color: var(--secondary-text-color);
}
.button:focus {
  outline: none;
}
</style>


