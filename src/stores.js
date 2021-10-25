import { writable } from "svelte/store";

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 10,
    text: "lorem ipsum dolor sit amet consectetuer adipisicing elit.",
  },
  {
    id: 2,
    rating: 9,
    text: "lorem ipsum dolor sit amet consectetuer adipisicing elit. lorem ipsum dolor sit amet consectetuer adipisicing elit.",
  },
  {
    id: 3,
    rating: 7,
    text: "lorem ipsum dolor sit amet consectetuer adipisicing elit.",
  },
]);
