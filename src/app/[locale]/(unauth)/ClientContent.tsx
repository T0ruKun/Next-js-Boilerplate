'use client';

export default function ClientContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-5 text-xl [&_p]:my-6">{children}</div>
  );
}
