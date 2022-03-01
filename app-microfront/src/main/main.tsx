import React, { Suspense, useEffect } from 'react'
import '@cosmos/loading'

import { Microfront } from '@/presentation/containers/module'
import './i18n'

export default function MicrofrontMain() {
  useEffect(() => {
    console.warn('with useEffect')
  }, [])

  return (
    <Suspense fallback={<hot-loading />}>
      <Microfront />
    </Suspense>
  )
}
