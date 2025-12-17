"use client"


import { CardGrid } from "./components/CardGrid";
import { CallCard } from "./components/cards/CallCard";
import { EnjoyingCard } from "./components/cards/EnjoyingCard";
import { ExperienceCard } from "./components/cards/ExperienceCard";
import { LocationCard } from "./components/cards/LocationCard";
import { WorkingCard } from "./components/cards/WorkingOn";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <Hero />
        <CardGrid>
          <ExperienceCard/>
          <EnjoyingCard/>
          <WorkingCard/>
          <LocationCard/>
          <div className="sm:col-span-2 lg:col-span-2">
            <CallCard />
          </div>
        </CardGrid>

      </div>
    </main>
  );
}
