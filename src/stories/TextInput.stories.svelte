<script land="ts">
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import TextInput from "../components/TextInput";
</script>

<Meta
    title="TextInput"
    component={TextInput}
    argTypes={{
        value: {
            control: {
                type: "text"
            }
        },
        labelText: {
            control: {
                type: "text"
            }
        },
        helperText: {
            control: {
                type: "text"
            }
        },
        placeholderText: {
            control: {
                type: "text"
            }
        },
        invalid: {
            control: {
                type: "boolean"
            }
        },
        invalidText: {
            control: {
                type: "text"
            }
        },
        required: {
            control: {
                type: "boolean"
            }
        },
        disabled: {
            control: {
                type: "boolean"
            }
        },
        size: {
            control: {
                type: "select",
                options: ["sm", "md", "lg", "xl", "xxl", "xxxl", "expand"]
            }
        }
    }}
/>

<Template let:args>
    <TextInput {...args} />
</Template>

<Story
    name="Normal"
    args={{
        value: "",
        labelText: "Name",
        helperText: "Your name",
        placeholderText: "John Doe",
        invalidText: "Some error message",
        invalid: false,
        required: false,
        disabled: false,
        size: "xxxl"
    }}
/>

<Story
    name="Invalid"
    args={{
        value: "",
        labelText: "Name",
        helperText: "Your name",
        placeholderText: "John Doe",
        invalidText: "Some error message",
        invalid: true,
        required: false,
        disabled: false,
        size: "xxxl"
    }}
/>

<Story
    name="Disabled"
    args={{
        value: "",
        labelText: "Name",
        helperText: "Your name",
        placeholderText: "John Doe",
        invalidText: "Some error message",
        invalid: false,
        required: false,
        disabled: true,
        size: "xxxl"
    }}
/>
