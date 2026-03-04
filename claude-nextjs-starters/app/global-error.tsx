"use client"

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="ko">
      <body>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", gap: "1rem" }}>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>오류가 발생했습니다</h1>
          <p style={{ color: "#666" }}>예상치 못한 문제가 발생했습니다.</p>
          <button
            onClick={reset}
            style={{ padding: "0.5rem 1rem", borderRadius: "0.375rem", border: "1px solid #ccc", cursor: "pointer" }}
          >
            다시 시도
          </button>
        </div>
      </body>
    </html>
  )
}
