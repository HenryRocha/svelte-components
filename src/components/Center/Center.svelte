<script lang="ts">
    /* Set to `true` to center vertically */
    export let vertical: boolean = false;

    /* Set to `true` to center horizontally */
    export let horizontal: boolean = false;
</script>

<div
    class:vertical-center={vertical && !horizontal}
    class:horizontal-center={horizontal && !vertical}
    class:full-center={horizontal && vertical}
>
    <slot />
</div>

<style>
    .vertical-center {
        @apply h-full flex flex-col justify-center;
    }

    .horizontal-center {
        @apply flex flex-row justify-center;
    }

    .full-center {
        @apply h-full flex flex-row justify-center items-center;
    }
</style>
