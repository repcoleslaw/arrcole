import { Card } from "../Card";

export function ExperienceCard() {
  const items = [
    { year: "2023", label: "Producer’s Club & CRT" },
    { year: "2022", label: "Producer’s Club & CRT" },
    { year: "2021", label: "Producer’s Club & CRT" },
  ];

  return (
    <Card title="Experience">
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.year} className="flex items-center gap-4">
            <span className="text-sm text-neutral-400">{item.year}</span>
            <span className="h-2 w-2 rounded-full bg-neutral-300" />
            <span className="text-sm">{item.label}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
