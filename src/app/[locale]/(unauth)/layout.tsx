import { FaCircleArrowRight } from 'react-icons/fa6';

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
      <div className="absolute left-0 flex h-10 w-full flex-row bg-gray-700">
        <FaCircleArrowRight className="my-auto ml-10 text-white" />
        <span className="my-auto ml-3 text-white">Home</span>
      </div>
      <ClientContent>{props.children}</ClientContent>
    </BaseTemplate>
  );
}
