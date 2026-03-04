interface NavItem {
  title: string
  href: string
}

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
}

export const siteConfig: SiteConfig = {
  name: "My App",
  description: "모던 웹 스타터킷",
  mainNav: [
    { title: "홈", href: "/" },
    { title: "소개", href: "/about" },
  ],
}
