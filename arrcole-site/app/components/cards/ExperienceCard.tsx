import { Card } from "../Card";

export function ExperienceCard() {
  const items = [
    { year: "2024", label: "Autodesk - Principal Business Consultant" },
    { year: "2020", label: "Stantec - Digital Practice Lead - Product" },
    { year: "2020", label: "Curios Strategies Consulting - Founder" },
    { year: "2015", label: "Stantec - Architectural Designer" },
    { year: "2014", label: "Base Associates - Architectural Designer" },
    { year: "2012", label: "BBB Architectes - Architectural Designer" },
  ];

  return (
    <Card title="Experience">
      {/* Scroll container */}
      <div className="relative max-h-36 overflow-y-auto pr-2 pl-2">
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li key={`${item.year}-${index}`} className="flex items-start gap-4">          
              {/* Content */}
              <div className="flex gap-3">
                <span className="w-12 text-sm text-neutral-400">
                  {item.year}
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
