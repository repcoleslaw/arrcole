import { Card } from "../Card";

export function EnjoyingCard() {
  return (
    <Card title="What I’m Enjoying">
      <div className="mb-2">
        <p className="text-xs text-neutral-400 dark:text-neutral-500">Something to read</p>
        <p className="font-medium">The Odyssey</p>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">Homer, translated by Emily Wilson</p>
      </div>
      <div className="mb-2">
        <p className="text-xs text-neutral-400 dark:text-neutral-500">Something to listen to</p>
        <p className="font-medium">The Great Divide</p>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">Noah Kahan</p>
      </div>
    </Card>
  );
}
