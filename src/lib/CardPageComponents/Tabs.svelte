<script>
  import MyDebitCardsComp from "./MyDebitCardsComp.svelte";

  export let activeTab = "debit-cards";

  const tabs = [
    { title: "My debit cards", id: "debit-cards" },
    { title: "All company cards", id: "company-cards" },
  ];
</script>

<div class="tabs mt-10">
  <ul class="tab-list flex gap-7">
    {#each tabs as tab}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <li class="tab-item" on:click={() => (activeTab = tab.id)}>
        <p
          class="cursor-pointer {activeTab == tab.id
            ? 'border-b-2 border-[#23CEFD]'
            : 'opacity-30'}"
        >
          {tab.title}
        </p>
      </li>
    {/each}
  </ul>
  <div class="tab-content">
    {#if activeTab == "debit-cards"}
      <MyDebitCardsComp />
    {/if}
  </div>
</div>

<!-- <style>
  .tabs {
    display: flex;
    flex-direction: column;
    border: 1px solid #ddd;
    margin: 20px;
    padding: 10px;
  }

  .tab-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }

  .tab-item {
    padding: 10px;
    border-bottom: 1px solid #ddd;
    cursor: pointer;
  }

  .tab-item.active {
    background-color: #eee;
    font-weight: bold;
  }

  .tab-content {
    flex: 1;
    padding: 10px;
  }

  .tab-pane {
    display: none;
  }

  .tab-pane.active {
    display: block;
  }
</style> -->
