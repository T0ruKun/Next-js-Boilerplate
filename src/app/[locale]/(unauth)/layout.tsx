import { BaseTemplate } from '@/templates/BaseTemplate';

import ClientContent from './ClientContent';
import ClientNav from './ClientNav';
import ClientSideNav from './ClientSideNav';

export default function Layout(props: {
  children: React.ReactNode;
}) {
  return (
    <BaseTemplate
      Nav={<ClientNav />}
      SideNav={<ClientSideNav />}
    >
      <ClientContent>{props.children}</ClientContent>
    </BaseTemplate>
  );
}
