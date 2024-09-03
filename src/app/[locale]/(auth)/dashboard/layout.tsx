import { BaseTemplate } from '@/templates/BaseTemplate';

import ClientNav from '../../(unauth)/ClientNav';
import ClientSideNav from '../../(unauth)/ClientSideNav';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BaseTemplate
      Nav={<ClientNav />}
      SideNav={<ClientSideNav />}
    >
      {children}
    </BaseTemplate>
  );
}
