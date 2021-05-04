<script lang="ts">
  let count: number = 0;
  const increment = () => {
    count += 1;
  };
</script>

<button
  class="outline-none focus:outline-none bg-yellow-200 text-red-500 rounded-full w-48 h-16"
  on:click={increment}
>
  Clicks: {count}
</button>

<style>
</style>
