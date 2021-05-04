<script lang="ts">
  import logo from "./assets/svelte.png";
  import Counter from "./lib/Counter.svelte";
</script>

<main class="flex flex-col space-y-10">
  <div class="flex flex-row justify-center">
    <img class="w-64 h-64" src={logo} alt="Svelte Logo" />
  </div>

  <h1 class="text-center text-yellow-500 uppercase font-extralight text-6xl">
    Svelte + Vite + Typescript + Tailwind JIT
  </h1>

  <div class="flex flex-row justify-center">
    <Counter />
  </div>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
</style>
