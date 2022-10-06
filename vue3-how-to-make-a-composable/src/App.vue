<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import { useFriends } from "./composables/useFriends.js";
import { useFetch } from "./composables/useFetch.js";

const line = useFriends("Rachel");
const { data } = useFetch(
  "https://timbenniks-compositions.vercel.app/api/talks?limit=1"
);
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <pre>{{ line.line }}</pre>
    <pre>{{ data }}</pre>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
