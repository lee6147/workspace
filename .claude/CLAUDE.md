# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

학습/프로토타이핑용 단일 HTML 파일 기반 웹앱 모음. 빌드 도구, 패키지 매니저, 테스트 프레임워크 없음.

## Architecture

- 각 `.html` 파일이 독립된 앱 (HTML + CSS + JS가 하나의 파일에 포함)
- 외부 의존성은 CDN으로 로드 (예: Tailwind CSS `https://cdn.tailwindcss.com`)
- 프레임워크 없이 Vanilla JavaScript 사용
- `output-style-test/` 하위에는 별도 프로젝트의 앱들이 위치

## Development

빌드/린트/테스트 명령어 없음. 브라우저에서 HTML 파일을 직접 열어 확인.

## Conventions1

- HTML `lang="ko"`, 한국어 UI 텍스트 및 주석 사용
- 스타일링: Tailwind CDN 또는 `<style>` 태그 내 커스텀 CSS
- 상태 관리: DOM 직접 조작, 필요시 `localStorage` 사용 (todo.html 참고)
- 이벤트 처리: 인라인 `onclick` 또는 이벤트 위임 패턴 혼용

## Notes

- `output-style-test/calculator.html`에 미완성 `calculate()` 함수 존재 (`TODO(human)` 마킹)

---

## Todo App (React + TypeScript)

React 19 + TypeScript 기반 할일 관리 앱.

### Tech Stack

- React 19 + TypeScript
- Tailwind CSS
- Zustand (상태관리)

### Commands

- 개발 서버: `npm run dev`
- 빌드: `npm run build`
- 테스트: `npm run test`

### Project Structure

```
src/
├── components/   # UI 컴포넌트
├── hooks/        # 커스텀 훅
├── types/        # TypeScript 타입 정의
└── stores/       # Zustand 스토어
```

### Code Conventions

- 컴포넌트 파일명: PascalCase (예: `TodoList.tsx`)
- 훅 파일명: `use`로 시작 (예: `useTodos.ts`)
- 타입 정의는 `types/` 디렉토리에 모아서 관리
