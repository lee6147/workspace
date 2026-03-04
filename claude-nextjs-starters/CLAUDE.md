# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

Next.js 16 + React 19 + TypeScript 기반 범용 웹앱 스타터킷. shadcn/ui(new-york 스타일) + Tailwind CSS v4 + next-themes 다크모드를 기본 탑재.

## 명령어

- `npm run dev` — 개발 서버 (Turbopack)
- `npm run build` — 프로덕션 빌드 (TypeScript 체크 포함)
- `npm run lint` — ESLint 실행
- `npx shadcn add <component>` — shadcn/ui 컴포넌트 추가

테스트 프레임워크는 아직 설정되어 있지 않음.

## 아키텍처

### 레이아웃 구조

`app/layout.tsx`가 전체 레이아웃을 구성:
- `ThemeProvider` (next-themes) → `TooltipProvider` → `Header` + `<main>` + `Footer` + `Toaster`
- 모든 페이지 컨테이너에 `container max-w-5xl` 적용 (1024px 제한)
- `html lang="ko"` — 한국어 UI

### 주요 디렉토리

| 경로 | 역할 |
|------|------|
| `app/` | Next.js App Router 페이지 |
| `components/ui/` | shadcn/ui 컴포넌트 (직접 수정 가능) |
| `components/layout/` | Header, Footer, MobileNav |
| `components/common/` | ThemeToggle 등 공통 컴포넌트 |
| `config/site.ts` | 사이트명, 네비게이션 등 중앙 설정 |
| `lib/utils.ts` | `cn()` 유틸리티 (clsx + tailwind-merge) |

### 핵심 패턴

- **사이트 설정 중앙화**: `config/site.ts`의 `siteConfig`에서 이름, 설명, 네비게이션을 관리. Header, Footer, MobileNav, metadata가 모두 이 설정을 참조
- **테마**: `next-themes`의 `ThemeProvider`로 class 기반 다크모드. `ThemeToggle` 컴포넌트에서 라이트/다크/시스템 전환
- **반응형 네비게이션**: 데스크톱은 Header 내 `<nav>` (md:flex), 모바일은 `MobileNav` (Sheet 컴포넌트)
- **경로 별칭**: `@/*` → 프로젝트 루트 (tsconfig.json paths)

## 코드 규칙

- UI 텍스트, 주석: 한국어
- 변수명/함수명: 영어
- shadcn/ui 스타일: new-york, 아이콘: lucide-react
- Tailwind CSS v4 사용 (CSS 기반 설정, `app/globals.css`에 테마 변수 정의)
- ESLint: flat config (`eslint.config.mjs`), core-web-vitals + typescript 규칙
