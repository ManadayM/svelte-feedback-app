<script>
  import { v4 as uuidv4 } from "uuid";
  // import { createEventDispatcher } from "svelte";
  import { FeedbackStore } from "../stores";

  import Card from "./Card.svelte";
  import Button from "./Button.svelte";
  import RatingSelect from "./RatingSelect.svelte";

  let text = "";
  let rating = 10;
  let btnDisabled = true;
  let minFeedbackChars = 10;
  let helpMsg;

  // const dispatch = createEventDispatcher();

  const handleInput = () => {
    if (text.trim().length <= minFeedbackChars) {
      helpMsg = `Text must be at least ${minFeedbackChars} characters`;
      btnDisabled = true;
    } else {
      helpMsg = null;
      btnDisabled = false;
    }
  };

  const handleSelect = (e) => (rating = e.detail);

  const handleSubmit = () => {
    if (text.trim().length > minFeedbackChars) {
      const newFeedback = {
        id: uuidv4(),
        text,
        rating: +rating,
      };

      // console.log(newFeedback);
      // dispatch("add-feedback", newFeedback);
      FeedbackStore.update((currentFeedback) => [
        newFeedback,
        ...currentFeedback,
      ]);

      text = "";
    }
  };
</script>

<Card>
  <header>
    <h2>How would you rate your service with us?</h2>
  </header>

  <form on:submit|preventDefault={handleSubmit}>
    <RatingSelect on:rating-select={handleSelect} />

    <div class="input-group">
      <input
        type="text"
        on:input={handleInput}
        bind:value={text}
        placeholder="Tell us something that keeps you coming back"
      />
      <Button type="submit" disabled={btnDisabled}>Send</Button>
    </div>

    {#if helpMsg}
      <div class="message">
        {helpMsg}
      </div>
    {/if}
  </form>
</Card>

<style>
  .input-group {
    display: flex;
    flex-direction: row;
    border: 1px solid #ccc;
    padding: 8px 10px;
    border-radius: 8px;
    margin-top: 15px;
  }

  input {
    flex-grow: 2;
    border: none;
    font-size: 16px;
  }

  input:focus {
    outline: none;
  }

  .message {
    padding-top: 10px;
    text-align: center;
    color: rebeccapurple;
  }
</style>
