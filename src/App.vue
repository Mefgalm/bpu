<template>
  <BlueprintUpdater />
</template>

<script>
import BlueprintUpdater from './components/BlueprintUpdater.vue';

export default {
  name: 'App',
  components: {
    BlueprintUpdater
  }
}
</script>
<style>
:root {
  --main-bg-color: #0e0e0e;
  --input-bg-color: #141414;
  --input-border-color: #1a1c23;
  --logo-color: #26bbd9;
  --text-main-color: #f09483;
  --input-text-color: #fac29a;
  --button-bg-color: #0e0e0e;
  --copy-color: #bbbbbb;
  --blueprint-color: #6c6f93;
}
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Fira+Code&display=swap");
body {
  background-color: var(--main-bg-color);
  height: 100vh;
  margin: 0;
  font-family: Roboto;
  color: var(--text-main-color);
}
::-webkit-scrollbar-corner {
  background-color: red;
}
::-webkit-scrollbar {
  background-color: var(--input-border-color);
}
::-webkit-scrollbar-thumb {
  background-color: var(--copy-color);
  border: 3px solid transparent;
  background-clip: padding-box;
}
textarea {
  background-color: var(--input-bg-color);
  border: 0.1em var(--input-border-color) solid;
  font-family: Roboto;
  color: var(--input-text-color);
  box-sizing: border-box;
  font-size: 1em;
}
input {
  background-color: var(--input-bg-color);
  border: 0.1em var(--input-border-color) solid;
  font-family: "Fira Code";
  color: var(--input-text-color);
  width: 100%;
  font-size: 1em;
}
textarea:focus,
input:focus {
  outline: none;
}
button {
  font-family: Roboto;
  font-size: 1em;
  padding: 0.12em 0.9em;
  background-color: var(--button-bg-color);
  color: var(--input-text-color);
  border: 1px var(--input-text-color) solid;
}
button:active {
  border-style: outset;
  border: 1px var(--logo-color) solid;
}
#app {
  height: 100%;
}
</style>
