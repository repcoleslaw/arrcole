import { Card } from "../Card";

export function EnjoyingCard() {
  return (
    <Card title="What I’m Enjoying">
      <div className="mb-2">
        <p className="text-xs text-neutral-400">Something to read</p>
        <p className="font-medium">The Intelligent Investor</p>
        <p className="text-sm text-neutral-500">Benjamin Graham</p>
      </div>
      <div className="mb-2">
        <p className="text-xs text-neutral-400">Something to listen to</p>
        <p className="font-medium">Articulate Excuses</p>
        <p className="text-sm text-neutral-500">JP Saxe</p>
      </div>
    </Card>
  );
}
