import type React from 'react';
import { FaCircleArrowRight } from 'react-icons/fa6';

const BaseTemplate = ({ Nav, SideNav, children }: { Nav: React.ReactNode; SideNav: React.ReactNode; children: React.ReactNode }) => {
  return (
    <div className="w-full text-gray-700 antialiased">
      {Nav}
      <div className="bg_pantip h-fit w-full"></div>
      {/* bg_bnb is positioned below bg_pantip */}
      <div className="bg_bnb flex h-10 w-full">
        <FaCircleArrowRight className="my-auto ml-10 text-white" />
        <span className="my-auto ml-3 text-white">Home</span>
      </div>

      <div className="mx-auto max-w-screen-md">
        <main>{children}</main>
        {SideNav}
      </div>
    </div>
  );
};

export { BaseTemplate };
