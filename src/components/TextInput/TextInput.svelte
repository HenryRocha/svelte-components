<script lang="ts">
    /**
     * Specify the input value
     * @type {string | number}
     */
    export let value: string | number = "";

    /** Specify the label text */
    export let labelText: string = "";

    /** Specify the helper text */
    export let helperText: string = "";

    /** Specify the placeholder text */
    export let placeholderText: string = "";

    /** Set to `true` to indicate an invalid state */
    export let invalid: boolean = false;

    /** Specify the invalid state text */
    export let invalidText: string = "";

    /** Set to `true` to mark the field as required */
    export let required: boolean = false;

    /** Set to `true` to disable the input */
    export let disabled: boolean = false;

    /**
     * Specify the size of button
     * @type {"sm" | "md" | "lg" | "xl" | "xxl" | "xxxl" | "expand"}
     */
    export let size: string = "xxl";

    // Apply classes and props.
    $: textInputProps = {
        class: ["text-input-container", `text-input-size-${size}`].filter(Boolean).join(" ")
    };
</script>

<div {...textInputProps}>
    {#if labelText}
        <div class="text-input-label-text" class:text-input-label-disabled={disabled}>
            {labelText}
        </div>
    {/if}

    <div>
        {#if disabled}
            <input
                class="text-input-disabled"
                disabled={true}
                placeholder={placeholderText}
                {...$$restProps}
                bind:value
            />
        {:else if required}
            <input
                class:text-input-invalid={invalid}
                placeholder={placeholderText}
                required
                {...$$restProps}
                bind:value
            />
        {:else}
            <input class:text-input-invalid={invalid} placeholder={placeholderText} {...$$restProps} bind:value />
        {/if}
    </div>

    {#if disabled}
        <div class="text-input-helper-text" class:text-input-label-disabled={disabled}>
            {helperText}
        </div>
    {:else if invalid}
        <div class="text-input-invalid-text">
            {invalidText}
        </div>
    {:else if helperText}
        <div class="text-input-helper-text">
            {helperText}
        </div>
    {/if}
</div>

<style>
    .text-input-container {
        @apply flex flex-col justify-start space-y-1;
    }

    .text-input-label-text {
        @apply font-medium text-lg;
    }

    .text-input-helper-text {
        @apply font-normal text-base;
        @apply text-gray-700;
    }

    input {
        @apply outline-none border-0;
        @apply w-full h-10;
        @apply p-2 rounded-lg;
        @apply ring-2 ring-gray-400 focus:ring-black;
        @apply text-lg truncate placeholder-gray-400 text-gray-900;
    }

    .text-input-invalid {
        @apply ring-red-500 focus:ring-black;
    }

    .text-input-invalid-text {
        @apply font-normal text-base;
        @apply text-red-700;
    }

    .text-input-disabled {
        @apply bg-gray-200;
    }

    .text-input-label-disabled {
        @apply text-gray-400;
    }

    .text-input-size-sm {
        @apply w-32;
    }

    .text-input-size-md {
        @apply w-40;
    }

    .text-input-size-lg {
        @apply w-48;
    }

    .text-input-size-xl {
        @apply w-64;
    }

    .text-input-size-xxl {
        @apply w-80;
    }

    .text-input-size-xxxl {
        @apply w-96;
    }

    .text-input-size-expand {
        @apply w-full;
    }
</style>
