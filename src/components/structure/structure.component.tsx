import React from 'react';

import '@cosmos/content';
import '@cosmos/structure';

import StructureMenu from './structure-menu.component';

function Structure(props) {
  return (
    <hot-structure>
      <StructureMenu />

      <hot-content slot="content">
        {props.children}
      </hot-content>
    </hot-structure>
  );
}

export default React.memo(Structure);
