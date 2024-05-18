<script>
  import downArrow from "../images/downArrow.svg";
  import transactionIcon from "../images/transactionIcon.svg";
  import cardDetailIcon from "../images/cardDetails.svg";
  import IndividualTransaction from "./IndividualTransaction.svelte";
  import { myRecentTransactions } from "./MyRecentTransactions";

  let isExpanded = true;
  let isCard = false;

  function toggleTransactions() {
    isExpanded = !isExpanded;
  }

  function toggleCardDetails() {
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
  <div class="drop-shadow bg-white rounded-lg">
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
        class="cursor-pointer"
      />
    </div>

    {#if isExpanded}
      <div>
        {#each myRecentTransactions as item}
          <IndividualTransaction data={item} />
        {/each}
      </div>
    {/if}
  </div>
</div>
