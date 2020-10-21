import React from 'react';

import '@cosmos/content';
import '@cosmos/structure';

import { useSelector } from 'store/redux.store';
import StructureMenu from './structure-menu.component';

function Structure(props) {
  const auth = useSelector((state) => state.auth);

  return (
    <hot-structure>
      {auth && <StructureMenu />}

      <hot-content slot="content">
        {props.children}
      </hot-content>
    </hot-structure>
  );
}

export default React.memo(Structure);
