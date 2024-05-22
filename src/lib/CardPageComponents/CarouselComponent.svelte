<script lang="ts">
  import IndividualCardComp from "./IndividualCardComp.svelte";
  interface Card {
    id: number;
    name: string;
    cardNum: string;
    exp: string;
    cvv: string;
    cardCol: string;
    textCol: string;
    isFrozen: boolean;
  }

  export let cards: Card[] = [];
  console.log(cards);
  let currentCardIndex: number = 0;

  function nextCard(): void {
    currentCardIndex = (currentCardIndex + 1) % cards.length;
  }

  function prevCard(): void {
    currentCardIndex = (currentCardIndex - 1 + cards.length) % cards.length;
  }

  function goToCard(index: number): void {
    currentCardIndex = index;
  }
</script>

<div class="carousel w-full flex items-center justify-between">
  <IndividualCardComp data={cards[currentCardIndex]} />
</div>
<div class="dots">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  {#each cards as _, index}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <span
      class={`${index === currentCardIndex ? "dotSpan dotsActive" : "dotSpan"}`}
      on:click={() => goToCard(index)}
    ></span>
  {/each}
</div>

<style>
  .carousel {
    overflow: hidden;
  }
  .dots {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
  .dotSpan {
    height: 8px;
    width: 10px;
    margin: 0 5px;
    background-color: #01d167;
    opacity: 20%;
    border-radius: 20%;
    display: inline-block;
    cursor: pointer;
  }

  .dotsActive {
    opacity: 100%;
    width: 20px;
  }
</style>
