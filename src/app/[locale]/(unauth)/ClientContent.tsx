'use client';

export default function ClientContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-5 p-5 text-xl [&_p]:my-6">{children}</div>
  );
}
