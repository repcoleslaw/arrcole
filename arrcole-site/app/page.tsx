"use client"


import { CardGrid } from "./components/CardGrid";
import { CallCard } from "./components/cards/CallCard";
import { ExperienceCard } from "./components/cards/ExperienceCard";
import { LocationCard } from "./components/cards/LocationCard";
import { MusicCard } from "./components/cards/MusicCard";
import { ReadingCard } from "./components/cards/ReadingCard";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <Hero />
        <CardGrid>
          <ExperienceCard/>
          <MusicCard/>
          <ReadingCard/>
          <LocationCard/>
          <CallCard/>
        </CardGrid>

      </div>
    </main>
  );
}
