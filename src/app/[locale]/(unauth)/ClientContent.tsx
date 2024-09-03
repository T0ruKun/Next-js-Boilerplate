'use client';

import { useAppSelector } from '@/Store/hook';

export default function ClientContent({ children }: { children: React.ReactNode }) {
  const isSideNavVisible = useAppSelector(state => state.ui.isSideNavVisible);

  return (
    <div className={`transition-all duration-300 ease-in-out ${isSideNavVisible ? 'ml-64' : 'ml-0'}`}>
      <div className="py-5 text-xl [&_p]:my-6">{children}</div>
    </div>
  );
}
