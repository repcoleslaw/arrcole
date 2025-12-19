import matter from "gray-matter"
import Link from "next/link"
import fs from "node:fs"
import path from "node:path"

const CONTENT_DIR = path.join(process.cwd(), "content/whitepapers")

export default function WhitepapersIndex() {
  const files = fs.existsSync(CONTENT_DIR)
    ? fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"))
    : []

  const items = files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "")
      const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8")
      const { data } = matter(raw)
      return {
        slug,
        title: (data.title as string) ?? slug,
        summary: (data.summary as string) ?? "",
        date: (data.date as string) ?? "",
      }
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))

  return (
    <div>
      <h1 className="mb-6">Whitepapers</h1>
      <ul className="space-y-6">
        {items.map((item) => (
          <li key={item.slug}>
            <Link className="text-xl underline underline-offset-4" href={`/notebook/${item.slug}`}>
              {item.title}
            </Link>
            {item.summary ? <p className="mt-2 opacity-80">{item.summary}</p> : null}
            {item.date ? <p className="mt-1 text-sm opacity-60">{item.date}</p> : null}
          </li>
        ))}
      </ul>
    </div>
  )
}
