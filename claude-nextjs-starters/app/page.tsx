import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const techStacks = [
  {
    title: "Next.js 16",
    description: "React 기반 풀스택 프레임워크",
    badge: "프레임워크",
  },
  {
    title: "React 19",
    description: "Server Components, Actions 지원",
    badge: "UI",
  },
  {
    title: "TypeScript",
    description: "타입 안전한 개발 환경",
    badge: "언어",
  },
  {
    title: "Tailwind CSS v4",
    description: "유틸리티 퍼스트 CSS 프레임워크",
    badge: "스타일링",
  },
  {
    title: "shadcn/ui",
    description: "재사용 가능한 UI 컴포넌트",
    badge: "컴포넌트",
  },
  {
    title: "next-themes",
    description: "다크모드 / 라이트모드 전환",
    badge: "테마",
  },
]

export default function Home() {
  return (
    <div className="container max-w-5xl py-16">
      {/* 히어로 섹션 */}
      <section className="flex flex-col items-center gap-4 text-center">
        <Badge variant="secondary" className="text-sm">
          스타터킷
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          모던 웹 스타터킷
        </h1>
        <p className="max-w-lg text-lg text-muted-foreground">
          검증된 기술 스택으로 구성된 범용 웹앱 템플릿.
          어떤 프로젝트든 바로 시작할 수 있습니다.
        </p>
      </section>

      {/* 기술 스택 카드 */}
      <section className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {techStacks.map((tech) => (
          <Card key={tech.title}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{tech.title}</CardTitle>
                <Badge variant="outline">{tech.badge}</Badge>
              </div>
              <CardDescription>{tech.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>
    </div>
  )
}
