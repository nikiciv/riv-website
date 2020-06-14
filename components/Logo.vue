<template>
  <div class="logo-wrapper">
    <div class="circ1" v-show="isMounted"></div>
    <div class="circ2" v-show="isMounted"></div>
    <h1
      class="logo-text"
      v-show="isMounted"
      :style="{ transitionDelay: '200ms' }"
    >
      {{ logoText.toUpperCase() }}
    </h1>
  </div>
</template>

<script>
import config from "~/assets/config.js";

const { logoText } = config;
export default {
  data() {
    return {
      logoText
    };
  },
  props: {
    isMounted: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style>
.logo-wrapper {
  margin-right: auto;
  cursor: pointer;
  color: var(--color-secondary);
}

.circ1 {
  z-index: 2;
  position: absolute;
  margin-left: 39px;
  height: 35px;
  width: 35px;
  margin-top: 5px;
  border-radius: 100%;
  border: solid 3px var(--color-txt-secondary);
  opacity: 0.005;
  -webkit-animation: puff-in-center 1s cubic-bezier(0.47, 0, 0.745, 0.715) both;
  animation: puff-in-center 1s cubic-bezier(0.47, 0, 0.745, 0.715) both;
}
.circ2 {
  z-index: 1;
  margin-top: 15px;
  margin-left: 23px;
  height: 25px;
  width: 25px;
  border-radius: 100%;
  background-color: var(--color-secondary);
  -webkit-animation: slide-in-blurred-top 0.6s cubic-bezier(0.23, 1, 0.32, 1)
    both;
  animation: slide-in-blurred-top 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
}
.logo-text {
  text-align: center;
  font-size: 10px;
  margin-top: 10px;
  letter-spacing: 4px;
  animation: tracking-in-expand 1s cubic-bezier(0.215, 0.61, 0.355, 1) both;
}
@keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
@keyframes puff-in-center {
  0% {
    -webkit-transform: scale(2);
    transform: scale(2);
    -webkit-filter: blur(4px);
    filter: blur(4px);
    opacity: 0;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-filter: blur(0px);
    filter: blur(0px);
    opacity: 1;
  }
}
@keyframes slide-in-blurred-top {
  0% {
    transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
    transform-origin: 50% 0%;
    filter: blur(40px);
    opacity: 0;
  }
  100% {
    transform: translateY(0) scaleY(1) scaleX(1);
    transform-origin: 50% 50%;
    filter: blur(0);
    opacity: 1;
  }
}
/* Phablet */
@media only screen and (max-width: 520px) {
  .logo-text {
    font-size: 10px;
    margin-top: 8px;
    letter-spacing: 2px;
  }
  .circ1 {
    margin-left: 30px;
    height: 30px;
    width: 30px;
    margin-top: 5px;
    border: solid 2px var(--color-txt-secondary);
  }
  .circ2 {
    margin-top: 15px;
    margin-left: 20px;
    height: 20px;
    width: 20px;
  }
}
</style>
