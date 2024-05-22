<script lang="ts">
  import downArrow from "../images/downArrow.svg";
  import transactionIcon from "../images/transactionIcon.svg";
  import cardDetailIcon from "../images/cardDetails.svg";
  import IndividualTransaction from "./IndividualTransaction.svelte";
  import { myRecentTransactions } from "./MyRecentTransactions";
  import { slide } from "svelte/transition";

  let isExpanded: boolean = true;
  let isCard: boolean = false;

  function toggleTransactions(): void {
    isExpanded = !isExpanded;
  }

  function toggleCardDetails(): void {
    isCard = !isCard;
  }
</script>

<div class="flex flex-col gap-5">
  <div class="drop-shadow bg-white rounded-lg">
    <div class="flex justify-between bg-[#F5F9FF] gap-4 p-4 w-full">
      <div class="flex gap-3">
        <img src={cardDetailIcon} alt="cardDetails" />
        <p class="font-openSans text-[#0C365A]">Card details</p>
      </div>
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <img
        src={downArrow}
        alt="down"
        on:click={toggleCardDetails}
        class="cursor-pointer"
      />
    </div>

    {#if isCard}
      <div></div>
    {/if}
  </div>

  <!-- Recent transactions -->
  <div class="drop-shadow bg-white rounded-xl">
    <div class="flex justify-between bg-[#F5F9FF] gap-4 p-4 w-full">
      <div class="flex gap-3">
        <img src={transactionIcon} alt="transactionIcon" />
        <p class="font-openSans text-[#0C365A]">Recent transactions</p>
      </div>
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <img
        src={downArrow}
        alt="down"
        on:click={toggleTransactions}
        class="cursor-pointer transition-transform {isExpanded
          ? 'rotate-180'
          : ''}"
      />
    </div>
    {#if isExpanded}
      <div transition:slide>
        {#each myRecentTransactions as item}
          <IndividualTransaction data={item} />
        {/each}
      </div>
      <div class="bg-[#EDFFF5] flex justify-center p-3 cursor-pointer">
        <p class="font-openSans font-semibold text-[#01D167]">
          View all card transactions
        </p>
      </div>
    {/if}
  </div>
</div>
