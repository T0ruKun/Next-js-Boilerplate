'use client';

export default function ClientContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="py-5 text-xl [&_p]:my-6">{children}</div>
  );
}
