<script land="ts">
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import Button from "../components/Button";
    import Center from "../components/Center";
</script>

<Meta
    title="Center"
    component={Center}
    argTypes={{
        horizontal: {
            control: {
                type: "boolean"
            }
        },
        vertical: {
            control: {
                type: "boolean"
            }
        }
    }}
/>

<Template let:args>
    <div class="bg-red-100 h-96 w-full">
        <Center {...args}>
            <Button>Button</Button>
        </Center>
    </div>
</Template>

<Story name="Horizontal" args={{ horizontal: true, vertical: false }} />

<Story name="Vertical" args={{ horizontal: false, vertical: true }} />

<Story name="Full" args={{ horizontal: true, vertical: true }} />
