<script lang="ts">
  import logo from "../images/aspireLogoWhite.svg";
  import showNum from "../images/showNum.svg";
  import visaLogo from "../images/visaLogo.svg";

  interface CardData {
    id: number;
    name: string;
    cardNum: string;
    exp: string;
    cvv: string;
    cardCol: string;
    textCol: string;
    isFrozen: boolean;
  }

  function createDefaultCardData(): CardData {
    return {
      id: 0,
      name: "",
      cardNum: "",
      exp: "",
      cvv: "",
      cardCol: "",
      textCol: "",
      isFrozen: false,
    };
  }

  let isMasked: boolean = true; // State variable to control masking

  export let data: CardData = createDefaultCardData();

  // Function to format the card number with spaces between every 4 digits
  function formatCardNumber(number: string) {
    const matched = number.match(/.{1,4}/g);
    return matched ? matched.join(" ") : "";
  }

  // Function to generate masked version with dots
  function getMaskedCardNumber(number: string) {
    const matched = "•".repeat(number.length).match(/.{1,4}/g);
    return matched ? matched.join(" ") : "";
  }

  function toggleMask(): void {
    isMasked = !isMasked;
  }
</script>

<div class="w-full">
  <!-- show card number button -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="flex justify-end flex gap-1 cursor-pointer" on:click={toggleMask}>
    <img src={showNum} alt="show" class="" />
    <p class="font-openSans text-[#01D167] text-xs font-semibold">
      Show card number
    </p>
  </div>

  <!-- card component -->

  <div class=" bg-[{data.cardCol}] rounded-lg p-6 text-{data.textCol} mt-2">
    <div class="w-full flex justify-end">
      <img src={logo} alt="aspireLogo" class="w-24" />
    </div>

    <div>
      <p class="font-bold text-2xl font-openSans mt-5 tracking-wider">
        {data.name}
      </p>

      <!-- card number -->
      <p
        class="text-lg font-openSans mt-6 flex gap-2 items-center tracking-widest"
      >
        {#if isMasked}
          <span class="masked">{getMaskedCardNumber(data.cardNum)}</span>
        {:else}
          <span class="tracking-widest font-bold text-2xl">
            {formatCardNumber(data.cardNum)}
          </span>
        {/if}
      </p>

      <!-- exp and cvv -->
      <div class="flex gap-10 mt-5 font-openSans font-bold tracking-widest">
        <p class="text-sm">Thru: {data.exp}</p>
        <p class="text-sm">CVV: <span class="">***</span></p>
      </div>

      <div class="w-full flex justify-end">
        <img src={visaLogo} alt="visa" />
      </div>
    </div>
  </div>
</div>

<style>
  .masked {
    font-size: 2rem; /* Adjust the size as needed */
    letter-spacing: 0.2rem; /* Adjust spacing as needed */
  }
</style>
