<script lang="ts">
  import CardFunctions from "./CardFunctions.svelte";
  import CarouselComponent from "./CarouselComponent.svelte";
  import { myDebitCardDetails } from "./MyDebitCardsDetails.js";
  import RecentTransactions from "./RecentTransactions.svelte";
</script>

<div class="drop-shadow bg-white p-8 mt-5 rounded-lg flex gap-10">
  <div class="w-6/12">
    <div>
      <CarouselComponent cards={myDebitCardDetails} />
    </div>
    <div>
      <CardFunctions />
    </div>
  </div>
  <div class="w-6/12">
    <RecentTransactions />
  </div>
</div>
