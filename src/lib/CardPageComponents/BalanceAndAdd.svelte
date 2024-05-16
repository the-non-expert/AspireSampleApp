<script>
  import addIcon from "../images/addIcon.svg";
</script>

<div class="">
  <div>
    <p>Available balance</p>
  </div>
  <div class="mt-5 flex justify-between items-center">
    <div class="flex gap-5">
      <p
        class="bg-[#01D167] px-3 h-6 rounded-md font-bold text-white flex items-center leading-5"
      >
        S$
      </p>
      <p class="font-bold text-3xl leading-5">3,000</p>
    </div>
    <button
      class="flex items-center justify-center bg-[#325BAF] text-white px-4 py-2 rounded-md"
    >
      <img src={addIcon} alt="Icon description" class="mr-2" />
      <span>New Card</span>
    </button>
  </div>
</div>
