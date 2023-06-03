import type { Meta, StoryObj } from "@storybook/react";
import { NavigationLink } from "@features/ui";

const menuLinks = [
  { text: "Home", href: "/" },
  { text: "Portfolio", href: "/portfolio" },
  { text: "Sign Up", href: "/sign-up" },
  { text: "Login", href: "/login" },
];
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof NavigationLink> = {
  title: "UI/Navigation link",
  component: NavigationLink,
};

export default meta;
type Story = StoryObj<typeof NavigationLink>;

const NavLinks = () => {
  return (
    <div>
      {menuLinks.map((menuLink, index) => (
        <NavigationLink key={index} href={menuLink.href} text={menuLink.text} />
      ))}
    </div>
  );
};

export const Nav: Story = {
  render: () => <NavLinks />,
};
