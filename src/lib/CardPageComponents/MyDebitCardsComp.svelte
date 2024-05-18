<script>
  import CardFunctions from "./CardFunctions.svelte";
  import IndividualCardComp from "./IndividualCardComp.svelte";
  import { myDebitCardDetails } from "./MyDebitCardsDetails.js";
  import RecentTransactions from "./RecentTransactions.svelte";
</script>

<div class="drop-shadow bg-white p-8 mt-5 rounded-lg flex gap-10">
  <div class="w-6/12">
    <div>
      <IndividualCardComp />
    </div>
    <div>
      <CardFunctions />
    </div>
  </div>
  <div class="w-6/12">
    <RecentTransactions />
  </div>
</div>
