<script>
  import "../app.css";
  import NavigationSection from "../lib/HomeComponents/NavigationSection.svelte";
</script>

<div class="flex">
  <div class="w-3/12">
    <NavigationSection />
  </div>

  <div class="w-9/12">
    <main>
      <slot />
    </main>
  </div>
</div>
