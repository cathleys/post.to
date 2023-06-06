import type { Meta, StoryObj } from "@storybook/react";
import { Login } from "@features/login";
import * as L from "@features/login/components/login.style";

const meta: Meta<typeof Login> = {
  title: "UI/Login",
  component: Login,
};

export default meta;
type Story = StoryObj<typeof Login>;

const LoginForm = () => {
  return (
    <L.Container>
      <L.LoginWrapper>
        <h2>Login</h2>
        <L.LoginForm id="loginform" autoComplete="off">
          <L.Label>
            Email
            <L.Input type="email" name="email" />
          </L.Label>
          <L.Label>
            Password
            <L.Input type="password" name="password" />
          </L.Label>
          <L.LoginButton>Login</L.LoginButton>
          <span>-OR-</span>
          <L.Anchor href="/sign-up">Create an Account</L.Anchor>
          <span>
            Get Access Directly: <L.Anchor>Demo User</L.Anchor>
          </span>
        </L.LoginForm>
      </L.LoginWrapper>
    </L.Container>
  );
};

export const LoginPage: Story = {
  render: () => <LoginForm />,
};
