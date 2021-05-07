<script lang="ts">
    /**
     * Specify the version number.
     */

    export let version: string = "dev-version";
</script>

<div class="version-number-container">
    {#if version}
        {version}
    {:else}
        Version not specified
    {/if}
</div>

<style>
    .version-number-container {
        @apply absolute bottom-0 right-0 pr-2;
        @apply text-sm text-right text-gray-500;
    }
</style>
