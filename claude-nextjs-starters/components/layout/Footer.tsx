import Link from "next/link"

import { Separator } from "@/components/ui/separator"
import { siteConfig } from "@/config/site"

export function Footer() {
  return (
    <footer className="w-full">
      <Separator />
      <div className="container max-w-5xl py-8">
        {/* 상단: 프로젝트 정보 + 퀵링크 */}
        <div className="flex flex-col justify-between gap-6 sm:flex-row">
          <div className="space-y-1">
            <p className="font-bold">{siteConfig.name}</p>
            <p className="text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>
          <nav aria-label="푸터 네비게이션" className="flex gap-4">
            {siteConfig.mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>

        {/* 하단: 저작권 */}
        <Separator className="my-6" />
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
