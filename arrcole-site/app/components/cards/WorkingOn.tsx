import { Card } from "../Card";

export function WorkingCard() {
  const items = [
    { year: "2024", status:"dev", label: "My Contractor App" },
    { year: "2024", status:"writing", label: "AI Readiness" },
    { year: "2024", status:"writing", label: "Digital Practice Operations" },
    { year: "2024", status:"dev", label: "Indie Game Project" },
    { year: "2024", status:"dev", label: "Fitness Leaderboard" },

    
  ];

  return (
    <Card title="What I’m working on">
      {/* Scroll container: fills card space without growing the card */}
      <div className="relative min-h-46 flex-1 overflow-y-auto pr-2 pl-2">
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li key={`${item.year}-${index}`} className="flex items-start gap-4">          
              {/* Content */}
              <div className="flex gap-3">
                <span className="w-12 text-xs text-neutral-400 dark:text-neutral-500">
                  {item.status}
                </span>
                <span className="text-sm">{item.label}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
