"use client"
import Link from "next/link"

export function Navbar() {
  return (
    <div className="mx-auto max-w-6xl">
        {/* Logo& Menu */}
        <div className="px-6 py-3">
            <Link className="logo" href="/"><span>arrcole</span></Link>
        </div>
        {/* location */}
        <div>

        </div>
    </div>
  )
}
