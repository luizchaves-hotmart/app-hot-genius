import React, { useEffect } from 'react';
import { bootstrap as Bootstrap } from './auth.service';

function Microfront() {
  useEffect(() => {
    Bootstrap.subscribe({
      next: (auth) => console.warn(auth)
    });
    Bootstrap.start();
  }, []);

  return <div>Microfront</div>;
}

export default Microfront;
