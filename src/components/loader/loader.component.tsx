import React from 'react';
import '@cosmos/loading';

function Loader(): JSX.Element {
  return (
    <div className="_w-full _text-center">
      <hot-loading data-testid="hot-loading" />
    </div>
  );
}

export default React.memo(Loader);
