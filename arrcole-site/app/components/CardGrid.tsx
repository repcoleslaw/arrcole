export function CardGrid({ children }: { children: React.ReactNode }) {
  return (
    <section className="grid auto-rows-fr grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {children}
    </section>
  );
}
