import type React from 'react';

const BaseTemplate = ({ Nav, SideNav, children }: { Nav: React.ReactNode; SideNav: React.ReactNode; children: React.ReactNode }) => {
  return (
    <div className="w-full text-gray-700 antialiased">
      {Nav}
      <div className="mx-auto max-w-screen-md">
        <main>{children}</main>
        {SideNav}
      </div>
    </div>
  );
};

export { BaseTemplate };
