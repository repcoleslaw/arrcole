export function Card({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full flex-col rounded-2xl bg-white p-5 shadow-sm">
      {title && (
        <p className="label mb-4 p-2 bg-neutral-100 w-fit text-xs rounded-2xl uppercase text-neutral-500">
          {title}
        </p>
      )}

      <div className="flex-1">{children}</div>
    </div>
  );
}
