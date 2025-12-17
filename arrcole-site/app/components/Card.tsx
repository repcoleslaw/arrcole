import { ReactNode } from "react";

export function Card({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      {title && (
        <h3 className="mb-4 text-sm font-medium text-neutral-500">{title}</h3>
      )}
      {children}
    </div>
  );
}
