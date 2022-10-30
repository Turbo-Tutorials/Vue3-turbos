import { ref } from "vue";

const lines = [
  {
    name: "Rachel",
    line: "...Maybe we should just take a break!",
  },
  {
    name: "Ross",
    line: "Let's cool off. Let's get some frozen yogurt or something.",
  },
];

export function useFriendsLine(who = "Ross") {
  const line = ref(lines.find((actor) => actor.name === who));
  return line;
}
