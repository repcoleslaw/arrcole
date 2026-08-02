export function Card({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full flex-col rounded-2xl bg-white p-5 shadow-sm dark:bg-neutral-900 dark:shadow-none dark:ring-1 dark:ring-neutral-800">
      {title && (
        <p className="label mb-4 p-2 bg-neutral-100 w-fit text-xs rounded-2xl uppercase text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
          {title}
        </p>
      )}

      <div className="flex-1">{children}</div>
    </div>
  );
}
