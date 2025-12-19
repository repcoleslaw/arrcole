import matter from "gray-matter"
import { MDXRemote } from "next-mdx-remote/rsc"
import { notFound } from "next/navigation"
import fs from "node:fs"
import path from "node:path"

const CONTENT_DIR = path.join(process.cwd(), "content/whitepapers")

export function generateStaticParams() {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"))
  return files.map((f) => ({ slug: f.replace(/\.mdx$/, "") }))
}

export default async function WhitepaperPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return notFound()

  const raw = fs.readFileSync(filePath, "utf8")
  const { content, data } = matter(raw)

  return (
    <article>
      <h1 className="mb-2">{(data.title as string) ?? slug}</h1>
      {data.summary ? (
        <p className="mt-0 text-lg opacity-80">{String(data.summary)}</p>
      ) : null}
      <hr className="my-8" />
      <MDXRemote source={content} />
    </article>
  )
}
