import React, { Suspense } from 'react'

import { Loader } from '@/presentation/components/loader'
import { PublicErrorBoundary } from '@/presentation/components/error'

type PropsType = {
  element: any
}

export function PublicRoute(props: PropsType) {
  const Element = props.element

  return (
    <Suspense fallback={<Loader />}>
      <PublicErrorBoundary>
        <Element />
      </PublicErrorBoundary>
    </Suspense>
  )
}
