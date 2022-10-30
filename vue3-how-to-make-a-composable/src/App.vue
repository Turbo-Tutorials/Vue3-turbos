<script setup>
import { useFriendsLine } from "./composables/useFriendsLine.js";
import { useFetch } from "./composables/useFetch.js";

const line = useFriendsLine("Ross");
const { data } = useFetch(
  "https://timbenniks-compositions.vercel.app/api/talks?limit=3"
);
</script>

<template>
  <main>
    <pre>{{ line.line }}</pre>
    <pre>{{ data }}</pre>
  </main>
</template>
