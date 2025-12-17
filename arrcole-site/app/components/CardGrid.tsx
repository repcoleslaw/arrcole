import { ReactNode } from "react";

export function CardGrid({ children }: { children: ReactNode }) {
  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {children}
    </section>
  );
}
