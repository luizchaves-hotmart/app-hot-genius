import React, { lazy, Suspense } from 'react';

const Microfront = lazy(() => import('microfront/Microfront'));

function ModulePage() {
  return (
    <div>
      Module inside private route <br/>
      <Suspense fallback="loading...">
        <Microfront />
      </Suspense>
    </div>
  );
}

export default ModulePage;
