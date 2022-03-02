import React from 'react'
import { Outlet } from 'react-router-dom'

import '@cosmos/content'
import '@cosmos/structure'

import { StructureMenu } from './structure-menu'

export function Structure() {
  return (
    <hot-structure>
      <StructureMenu />

      <hot-content slot="content">
        <Outlet />
      </hot-content>
    </hot-structure>
  )
}
