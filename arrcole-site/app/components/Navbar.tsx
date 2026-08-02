"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="flex items-center justify-between px-6 py-3">
        <Link className="logo" href="/">
          <span>arrcole</span>
        </Link>
        <ThemeToggle />
      </div>
    </div>
  );
}
