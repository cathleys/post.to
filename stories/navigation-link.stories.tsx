import type { Meta, StoryObj } from "@storybook/react";
import { NavigationMenu } from "@features/index";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof NavigationMenu> = {
  title: "UI/Navigation menu",
  component: NavigationMenu,
};

export default meta;
type Story = StoryObj<typeof NavigationMenu>;

const NavLinks = () => {
  return <NavigationMenu />;
};

export const Nav: Story = {
  render: () => <NavLinks />,
};
