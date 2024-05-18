<script>
  import logo from "../images/aspireLogoWhite.svg";
  import showNum from "../images/showNum.svg";
  import visaLogo from "../images/visaLogo.svg";

  let isMasked = true; // State variable to control masking

  function toggleMask() {
    isMasked = !isMasked;

    console.log(isMasked);
  }
</script>

<div class="">
  <!-- show card number button -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    class="w-full flex justify-end flex gap-1 cursor-pointer"
    on:click={toggleMask}
  >
    <img src={showNum} alt="show" class="" />
    <p class="font-openSans text-[#01D167] text-xs font-semibold">
      Show card number
    </p>
  </div>

  <!-- card comp -->
  <div class=" bg-[#01D167] rounded-lg p-6 text-white mt-2">
    <div class="w-full flex justify-end">
      <img src={logo} alt="aspireLogo" class="w-24" />
    </div>

    <div>
      <p class="font-bold text-2xl font-openSans mt-5 tracking-wider">
        Mark Henry
      </p>
      <p class="text-lg font-openSans mt-6 flex gap-2 items-center">
        {#if isMasked}
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="pl-1"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="pl-1"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>

          <span class="pl-1">2020</span>
        {:else}
          <span>1234 5678 9876 2020</span>
        {/if}
      </p>
      <div class="flex gap-10 mt-5 font-openSans font-bold tracking-widest">
        <p class="text-sm">Thru: 12/20</p>
        <p class="text-sm">CVV: <span class="">***</span></p>
      </div>

      <div class="w-full flex justify-end">
        <img src={visaLogo} alt="visa" />
      </div>
    </div>
  </div>
</div>

<style>
  .dot {
    height: 10px;
    width: 10px;
    background-color: white;
    border-radius: 50%;
    display: inline-block;
  }
</style>
