<script land="ts">
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import VersionNumber from "../components/VersionNumber";
</script>

<Meta
    title="VersionNumber"
    component={VersionNumber}
    argTypes={{
        version: { control: "text" }
    }}
/>

<Template let:args>
    <VersionNumber {...args} />
</Template>

<Story name="Defined" args={{ version: "v1.0.0" }} />

<Story name="Not defined" args={{}} />
