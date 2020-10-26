import React from 'react';

import '@cosmos/tag';
import '@cosmos/avatar';
import '@cosmos/collapse';
import '@cosmos/header';
import '@cosmos/menu';
import '@cosmos/menu-item';
import '@cosmos/tooltip';
import '@cosmos/dropdown';
import authService from 'modules/auth/auth.service';

function StructureMenu() {
  return (
    <hot-menu slot="menu">
      <div slot="product-name">App</div>

      <hot-header slot="header">
        <span slot="brand-name">Pro</span>
        <hot-dropdown slot="header-actions">
          <hot-menu-item slot="button">
            <div className="hot-application-menu__icon">
              <hot-avatar class="hot-avatar--sm hot-avatar--text _rounded-circle">
                <span>MM</span>
              </hot-avatar>
            </div>
          </hot-menu-item>
          <hot-dropdown-menu-item slot="menu">Item 1</hot-dropdown-menu-item>
          <hot-dropdown-menu-item slot="menu">Item 2</hot-dropdown-menu-item>
          <hot-dropdown-menu-item slot="menu">Item 3</hot-dropdown-menu-item>
          <hot-dropdown-menu-item slot="menu">Item 4</hot-dropdown-menu-item>
          <hot-dropdown-menu-divider slot="menu"></hot-dropdown-menu-divider>
          <hot-dropdown-menu-item slot="menu" onClick={() => authService.signoutRedirect()}>
            Logout
          </hot-dropdown-menu-item>
        </hot-dropdown>
      </hot-header>

      <hot-menu-item active>
        <div className="hot-application-menu__icon"/>
        <span>Item 1</span>
      </hot-menu-item>

      <hot-menu-item>
        <div className="hot-application-menu__icon"/>
        <span>Item 2</span>
      </hot-menu-item>
    </hot-menu>
  );
}

export default React.memo(StructureMenu);
