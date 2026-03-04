"use client"

import { Button } from "@/components/ui/button"

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="container max-w-5xl flex flex-col items-center justify-center gap-4 py-32 text-center">
      <h1 className="text-4xl font-bold">오류가 발생했습니다</h1>
      <p className="text-lg text-muted-foreground">
        예상치 못한 문제가 발생했습니다. 다시 시도해주세요.
      </p>
      <Button onClick={reset}>다시 시도</Button>
    </div>
  )
}
