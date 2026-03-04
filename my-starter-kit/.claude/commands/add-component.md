---
argument-hint: 컴포넌트 이름 (PascalCase, 예: TodoItem)
---

src/components/$1.tsx 파일을 생성하고, 아래 규칙에 따라 React 함수형 컴포넌트 기본 템플릿을 작성해줘.

## 규칙

- TypeScript 사용
- Tailwind CSS로 스타일링
- Props 인터페이스 정의 (`${1}Props`)
- `export default` 사용
- 컴포넌트 이름: `$1` (PascalCase)
- 한국어 주석 사용
- any 타입 사용 금지

## 템플릿 구조

```tsx
interface ${1}Props {
  // props 정의
}

export default function $1({ }: ${1}Props) {
  return (
    <div>
      {/* $1 컴포넌트 */}
    </div>
  );
}
```

## 주의사항

- 파일이 이미 존재하면 덮어쓰지 말고 사용자에게 알려줘
- src/components/ 디렉토리가 없으면 먼저 생성해줘
