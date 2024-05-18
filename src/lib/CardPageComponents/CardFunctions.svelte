<script>
  import freezeCard from "../images/freezeCard.svg";
  import spendLimit from "../images/spendLimit.svg";
  import gpay from "../images/GPay.svg";
  import replaceCard from "../images/replaceCard.svg";
  import cancelCard from "../images/cancelCard.svg";

  const cardFunc = [
    {
      id: 1,
      name: "Freeze card",
      icon: freezeCard,
    },
    {
      id: 2,
      name: "Spend limit",
      icon: spendLimit,
    },
    {
      id: 3,
      name: "Add Gpay",
      icon: gpay,
    },
    {
      id: 4,
      name: "Replace card",
      icon: replaceCard,
    },
    {
      id: 5,
      name: "Cancel card",
      icon: cancelCard,
    },
  ];
</script>

<div class="mt-10 flex gap-10 bg-[#EDF3FF] p-5 rounded-xl">
  {#each cardFunc as item}
    <div class="flex flex-col justify-center items-center gap-2 cursor-pointer">
      <img src={item.icon} alt="freezeCard" class="w-8" />
      <p class="text-center text-sm">{item.name}</p>
    </div>
  {/each}
</div>
