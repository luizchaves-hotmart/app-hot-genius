import React, { lazy, Suspense } from 'react'

const Microfront = lazy(() => import('microfront/Module1'))

export function ModulePage() {
  return (
    <div>
      <Suspense fallback="loading...">
        <Microfront />
      </Suspense>
    </div>
  )
}
