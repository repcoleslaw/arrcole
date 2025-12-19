
import { StatusPill } from "./StatusPill";

export function Hero() {
  return (
    <section className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-[auto_1fr]">

      <div>
        <h1 className="text-3xl font-semibold leading-tight">
          Hi I’m Andrew Cole — I’m a Designer, Problem-solver, and Business Consultant.{" "}
          <span className="text-neutral-400">Currently at Autodesk.</span>
        </h1>

        <p className="label mt-4 max-w-xl text-neutral-600">
          I am a trained architect with 10 years of experience
          specializing in crafting creative tools, solutions, and empowering
          the AEC industry.
        </p>
        <p className="logo mt-4 max-w-xl text-neutral-600">
          @arrcole
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <StatusPill />
        </div>
      </div>
    </section>
  );
}
