"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/common/ThemeToggle"
import { MobileNav } from "@/components/layout/MobileNav"

export function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-5xl flex h-14 items-center">
        {/* 로고 */}
        <Link href="/" className="mr-6 flex items-center space-x-2 font-bold">
          {siteConfig.name}
        </Link>

        {/* 데스크톱 네비게이션 - CSS로 반응형 분기 */}
        <nav aria-label="메인 네비게이션" className="hidden items-center gap-6 md:flex">
          {siteConfig.mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-foreground/80",
                pathname === item.href
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* 오른쪽 영역 */}
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}
