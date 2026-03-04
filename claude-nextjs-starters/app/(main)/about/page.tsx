import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Moon, Smartphone, Shield, Blocks } from "lucide-react"

const features = [
  {
    title: "다크모드 지원",
    description: "next-themes 기반의 라이트/다크 테마 전환을 기본 제공합니다.",
    icon: Moon,
  },
  {
    title: "반응형 레이아웃",
    description: "모바일부터 데스크톱까지 모든 화면 크기에 최적화되어 있습니다.",
    icon: Smartphone,
  },
  {
    title: "타입 안전성",
    description: "TypeScript를 전면 적용하여 런타임 오류를 사전에 방지합니다.",
    icon: Shield,
  },
  {
    title: "컴포넌트 기반",
    description: "shadcn/ui 기반의 재사용 가능한 컴포넌트로 빠르게 UI를 구성합니다.",
    icon: Blocks,
  },
]

const projectStructure = `app/
├── layout.tsx        # 루트 레이아웃 (테마, 폰트)
├── page.tsx          # 메인 페이지
├── about/
│   └── page.tsx      # 소개 페이지
components/
├── common/           # 공통 컴포넌트 (ThemeToggle 등)
├── layout/           # 레이아웃 컴포넌트 (Header, Footer 등)
└── ui/               # shadcn/ui 컴포넌트
config/
└── site.ts           # 사이트 설정 (이름, 네비게이션)`

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-5xl py-16">
      {/* 히어로 섹션 */}
      <section className="flex flex-col items-center gap-4 text-center">
        <Badge variant="secondary" className="text-sm">
          소개
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          프로젝트 소개
        </h1>
        <p className="max-w-lg text-lg text-muted-foreground">
          Next.js, React, TypeScript, Tailwind CSS, shadcn/ui로 구성된
          범용 웹앱 스타터킷입니다. 새 프로젝트를 빠르게 시작할 수 있도록
          필수 설정과 패턴을 미리 갖추고 있습니다.
        </p>
      </section>

      {/* 주요 특징 */}
      <section className="mt-16 grid gap-4 sm:grid-cols-2">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                  <feature.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </div>
              <CardDescription className="mt-2">
                {feature.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>

      {/* 프로젝트 구조 */}
      <Separator className="my-16" />
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold tracking-tight">프로젝트 구조</h2>
        <p className="text-muted-foreground">
          주요 디렉토리와 파일의 역할을 안내합니다.
        </p>
        <Card>
          <CardContent>
            <pre className="overflow-x-auto text-sm leading-relaxed text-muted-foreground">
              {projectStructure}
            </pre>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
