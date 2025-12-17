"use client";

import { useState } from "react";

export function StatusPill() {
  const [revealed, setRevealed] = useState(false);
  const email = "andrew@curiostrategies.com";

  return (
    <button
      onClick={() => setRevealed(true)}
      className="flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm shadow-sm transition hover:bg-neutral-50"
    >
      <span
        className={`h-2 w-2 rounded-full ${
          revealed ? "bg-blue-500" : "bg-green-500"
        }`}
      />

      {revealed ? (
        <a
          href={`mailto:${email}`}
          onClick={(e) => e.stopPropagation()}
          className="underline"
        >
          {email}
        </a>
      ) : (
        "Available for chats!"
      )}
    </button>
  );
}
