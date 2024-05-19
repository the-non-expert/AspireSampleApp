<script>
  import "../app.css";
  import NavigationSection from "../lib/HomeComponents/NavigationSection.svelte";
</script>

<div class="flex h-screen mainAppContainer">
  <div class="w-3/12 h-full overflow-hidden">
    <NavigationSection />
  </div>

  <div class="w-9/12 overflow-y-auto">
    <main>
      <slot />
    </main>
  </div>
</div>
