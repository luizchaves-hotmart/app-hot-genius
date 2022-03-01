import React, { Suspense } from 'react'
import { useRecoilValue } from 'recoil'

import { Loader } from '@/presentation/components/loader'
import { PrivateErrorBoundary } from '@/presentation/components/error'
import { authAtom } from '@/presentation/stores'

interface IProps {
  element: any
}

export function PrivateRoute(props: IProps) {
  const auth = useRecoilValue(authAtom)
  const Element = props.element

  return !auth.user ? <Loader /> : (
    <Suspense fallback={<Loader />}>
      <PrivateErrorBoundary>
        <Element />
      </PrivateErrorBoundary>
    </Suspense>
  )
}
