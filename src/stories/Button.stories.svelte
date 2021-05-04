<script land="ts">
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import Button from "../components/Button";
</script>

<Meta
    title="Button"
    component={Button}
    argTypes={{
        label: { control: "text" },
        kind: {
            control: {
                type: "select",
                options: ["primary", "secondary", "tertiary"]
            }
        },
        sizex: {
            control: {
                type: "select",
                options: ["sm", "md", "lg", "xl", "xxl", "expand"]
            }
        },
        sizey: {
            control: { type: "select", options: ["sm", "md", "lg", "xl", "expand"] }
        }
    }}
/>

<Template let:args>
    <Button {...args}>{args.label}</Button>
</Template>

<Story name="Primary" args={{ label: "Button", kind: "primary", sizex: "md", sizey: "md" }} />

<Story name="Secondary" args={{ label: "Button", kind: "secondary", sizex: "md", sizey: "md" }} />

<Story name="Tertiray" args={{ label: "Button", kind: "tertiary", sizex: "md", sizey: "md" }} />
