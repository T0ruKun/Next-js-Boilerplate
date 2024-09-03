'use client';

import { Provider } from 'react-redux';

import { DemoBadge } from '@/components/DemoBadge';
import { store } from '@/Store/store';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      {children}
      <DemoBadge />
    </Provider>
  );
}
