import React from 'react';

import '@cosmos/content';
import '@cosmos/structure';

import { useSelector } from 'app/redux/redux.store';
import StructureMenu from './structure-menu.component';

function Structure(props) {
  const loggedUser = useSelector((state) => state.loggedUser);

  if (!loggedUser) {
    return props.children;
  }

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
