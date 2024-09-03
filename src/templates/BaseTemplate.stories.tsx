import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/test';

import { BaseTemplate } from './BaseTemplate';

const meta = {
  title: 'templates/BaseTemplate',
  component: BaseTemplate,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof BaseTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    Nav: <nav>Navigation</nav>,
    SideNav: <aside>Side Navigation</aside>,
    children: <div>Main Content</div>,
  },
};

export const WithHomeLink: Story = {
  args: {
    Nav: (
      <nav>
        <a href="/">Home</a>
      </nav>
    ),
    SideNav: <aside>Side Navigation</aside>,
    children: <div>Main Content</div>,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const homeLink = canvas.getByText('Home');
    await userEvent.click(homeLink);
  },
};
