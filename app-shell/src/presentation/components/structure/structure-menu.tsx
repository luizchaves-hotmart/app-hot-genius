import React from 'react'
import { faHome } from '@fortawesome/pro-regular-svg-icons/faHome'
import { faDashboard } from '@fortawesome/pro-regular-svg-icons/faDashboard'

import '@cosmos/tag'
import '@cosmos/avatar'
import '@cosmos/collapse'
import '@cosmos/header'
import '@cosmos/menu'
import '@cosmos/menu-item'
import '@cosmos/tooltip'
import '@cosmos/dropdown'

import { bootstrap } from '@/application/services/auth'
import { StructureMenuItem } from './structure-menu-item'

export function StructureMenu() {
  return (
    <hot-menu slot="menu">
      <div slot="product-name">Hotmart Genius</div>

      <hot-header slot="header">
        <span slot="brand-name">Genius</span>
        <hot-dropdown slot="header-actions">
          <hot-menu-item slot="button">
            <div className="hot-application-menu__icon">
              <hot-avatar class="hot-avatar--sm hot-avatar--text _rounded-circle">
                <span>MM</span>
              </hot-avatar>
            </div>
          </hot-menu-item>
          <hot-dropdown-menu-divider slot="menu"></hot-dropdown-menu-divider>
          <hot-dropdown-menu-item slot="menu" onClick={() => bootstrap.logout()}>
            Logout
          </hot-dropdown-menu-item>
        </hot-dropdown>
      </hot-header>

      <StructureMenuItem link="/" icon={faHome} name="Starter Form" />
      <StructureMenuItem link="/analytics" icon={faDashboard} name="Analytics" />
    </hot-menu>
  )
}
