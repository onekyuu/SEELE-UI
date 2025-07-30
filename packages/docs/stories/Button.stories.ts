import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import { Button } from "seele-ui";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["primary", "outline", "ghost", "text", "danger"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["sm", "md", "lg"],
      },
    },
    btnType: {
      control: {
        type: "select",
        options: ["button", "submit", "reset"],
      },
    },
    rounded: {
      control: {
        type: "select",
        options: ["none", "sm", "md", "lg"],
      },
    },
    loading: {
      control: "boolean",
      defaultValue: false,
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
    },
    useThrottle: {
      control: "boolean",
      defaultValue: false,
    },
    throttleDelay: {
      control: "number",
      defaultValue: 300,
    },
    icon: {
      control: "text",
      description: "Icon to display in the button",
      table: {
        type: { summary: "ReactNode" },
        defaultValue: { summary: "null" },
      },
    },
    "aria-label": {
      control: "text",
      description: "Accessible label for the button",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
    className: {
      control: "text",
      description: "Custom CSS class for additional styling",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
    onClick: {
      action: "clicked",
      description: "Function to call when the button is clicked",
      table: {
        type: {
          summary: "(event: React.MouseEvent<HTMLButtonElement>) => void",
        },
        defaultValue: { summary: "undefined" },
      },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Button",
  },
};
