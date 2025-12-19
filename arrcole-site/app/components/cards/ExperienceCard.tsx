import { Card } from "../Card";

export function ExperienceCard() {
  const items = [
    { year: "2024", company:"Autodesk", role: "Principal Business Consultant" },
    { year: "2020", company: "Stantec", role:"Digital Practice Lead - Product" },
    { year: "2020", company: "Curios Strategies North", role:"Founder" },
    { year: "2017", company: "Stantec", role:"Architectural Data Analyst" },
    { year: "2015", company: "Stantec", role:"Architectural Designer" },
    { year: "2014", company: "Base Associates", role:"Architectural Designer" },
    { year: "2012", company: "BBB Architects", role:"Architectural Designer" },
  ];

  return (
    <Card title="Experience">
      {/* Scroll container */}
      <div className="relative h-46 overflow-y-auto pr-2 pl-2">
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li key={`${item.year}-${index}`} className="flex items-start gap-4">          
              {/* Content */}
              <div className="flex gap-2 ">
                <span className="w-12 text-sm text-neutral-400">
                  {item.year}
                </span>
                <div className="flex flex-col">
                  <span className="label text-sm">{item.company}</span>
                  <span className="text-xs">{item.role}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
