import { render, screen, within } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';

import messages from '@/locales/en.json';

import { BaseTemplate } from './BaseTemplate';

describe('Base template', () => {
  describe('Render method', () => {
    it('should have nav and sidenav', () => {
      render(
        <NextIntlClientProvider locale="en" messages={messages}>
          <BaseTemplate
            Nav={<nav>Nav Content</nav>}
            SideNav={<aside>SideNav Content</aside>}
          >
            <div>Main Content</div>
          </BaseTemplate>
        </NextIntlClientProvider>,
      );

      const nav = screen.getByText('Nav Content');
      const sideNav = screen.getByText('SideNav Content');
      const mainContent = screen.getByText('Main Content');

      expect(nav).toBeInTheDocument();
      expect(sideNav).toBeInTheDocument();
      expect(mainContent).toBeInTheDocument();
    });

    it('should have a link to support creativedesignsguru.com', () => {
      render(
        <NextIntlClientProvider locale="en" messages={messages}>
          <BaseTemplate
            Nav={<nav>Nav Content</nav>}
            SideNav={<aside>SideNav Content</aside>}
          >
            <div>Main Content</div>
          </BaseTemplate>
        </NextIntlClientProvider>,
      );

      const copyrightSection = screen.getByText(/© Copyright/);
      const copyrightLink = within(copyrightSection).getByRole('link');

      /*
       * PLEASE READ THIS SECTION
       * We'll really appreciate if you could have a link to our website
       * The link doesn't need to appear on every pages, one link on one page is enough.
       * Thank you for your support it'll mean a lot for us.
       */
      expect(copyrightLink).toHaveAttribute(
        'href',
        'https://creativedesignsguru.com',
      );
    });
  });
});
