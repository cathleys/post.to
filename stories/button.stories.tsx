import { ButtonUi } from "@features/index";
import { ButtonColor } from "@features/ui/button/button";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ButtonUi> = {
  title: "Ui/Button",
  component: ButtonUi,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ButtonUi>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const White: Story = {
  args: {
    color: ButtonColor.white,
    text: "Button",
    href: "/",
  },
};

export const Dark: Story = {
  args: {
    color: ButtonColor.dark,
    text: "Button",
    href: "/",
  },
};
