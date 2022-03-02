import React, { lazy, useEffect } from 'react'
import { BrowserRouter, Routes as RoutesDOM, Route } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'

import { authAtom } from '@/presentation/stores'
import { Structure } from '@/presentation/components/structure'
import { bootstrap, AuthEvents } from '@/application/services/auth'
import { PublicRoute } from './public-route'
import { PrivateRoute } from './private-route'

const HomePage = lazy(() => import('@/presentation/pages/home'))
const ModulePage = lazy(() => import('@/presentation/pages/module'))

export function Routes() {
  const setAuth = useSetRecoilState(authAtom)

  useEffect(() => {
    AuthEvents.addListenRenew(() => setAuth((prevState) => ({ ...prevState, renewing: true })))
    AuthEvents.addListenUser(({ detail: user }) => setAuth(() => ({ user, renewing: false })))
    bootstrap.start()
  }, [])

  return (
    <>
      <hot-toast />
      <BrowserRouter>
        <RoutesDOM>
          <Route path="/" element={<Structure />}>
            <Route index element={<PublicRoute element={HomePage} />} />
            <Route path="module" element={<PrivateRoute element={ModulePage} />} />
            <Route path="*" element={<p>{"There's nothing here!"}</p>} />
          </Route>
        </RoutesDOM>
      </BrowserRouter>
    </>
  )
}
