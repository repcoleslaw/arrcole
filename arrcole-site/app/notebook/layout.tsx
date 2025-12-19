import type { ReactNode } from "react"

export default function WhitepapersLayout({ children }: { children: ReactNode }) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-12">
      <div className="prose prose-neutral dark:prose-invert prose-headings:scroll-mt-24">
        {children}
      </div>
    </section>
  )
}
