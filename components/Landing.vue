<template>
  <div class="landing">
    <div class="greeting">Hello.</div>
    <div class="title-primary">I am Ivo Nikić.</div>
    <div class="title-secondary">I make magic on the Web.</div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.landing {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
}

.greeting {
  color: greenyellow;
  font-size: 30px;
}

.title-primary {
  font-size: 80px;
  margin: 0;
}

.title-secondary {
  font-size: 80px;
  margin: 0;
}
</style>