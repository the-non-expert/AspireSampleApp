<script lang="ts">
  interface TransactionData {
    id: number;
    name: string;
    mode: string;
    amount: string;
    dop: string;
    icon: string;
    amountCol: string;
  }

  function createDefaultTransactionData(): TransactionData {
    return {
      id: 0,
      name: "",
      mode: "",
      amount: "",
      dop: "",
      icon: "",
      amountCol: "",
    };
  }

  export let data: TransactionData = createDefaultTransactionData();

  import smallCard from "../images/smallCard.svg";
  import next from "../images/next.svg";
</script>

<div class="font-openSans flex gap-10 items-start py-6 px-3 w-full">
  <div class="flex gap-3">
    <div>
      <img src={data.icon} alt="file" class="bg-[#009DFF1A] p-4 rounded-2xl" />
    </div>
    <div class="flex flex-col gap-1">
      <p>{data.name}</p>
      <p class="opacity-20">{data.dop}</p>
      <div class="flex gap-2">
        <img
          src={smallCard}
          alt="small"
          class="bg-[#325BAF] px-2 py-1 rounded-3xl"
        />
        <p class="text-[#325BAF] text-sm">{data.mode}</p>
      </div>
    </div>
  </div>

  <!-- Amount Display -->
  <div class="flex gap-2">
    <p class="font-bold text-[{data.amountCol}]">{data.amount}</p>
    <img src={next} alt="next" class="cursor-pointer" />
  </div>
</div>
