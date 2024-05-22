<script lang="ts">
  import MyDebitCardsComp from "./MyDebitCardsComp.svelte";

  interface Tab {
    title: string;
    id: string;
  }

  export let activeTab: string = "debit-cards";

  const tabs: Tab[] = [
    { title: "My debit cards", id: "debit-cards" },
    { title: "All company cards", id: "company-cards" },
  ];

  function selectTab(id: string): void {
    activeTab = id;
  }
</script>

<div class="tabs mt-10">
  <ul class="tab-list flex gap-7">
    {#each tabs as tab}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <li class="tab-item" on:click={() => selectTab(tab.id)}>
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
    {:else}
      <div></div>
    {/if}
  </div>
</div>
