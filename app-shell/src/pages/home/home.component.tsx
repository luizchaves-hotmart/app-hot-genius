import React, { useEffect, useState } from 'react';
import RGL, { WidthProvider } from 'react-grid-layout';
import { registerApplication, start } from 'single-spa';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

import '@cosmos/card/card.css';
import './home.component.scss';

// eslint-disable-next-line new-cap
const ResponsiveGridLayout = WidthProvider(RGL);
const ROW_HEIGHT = 4;
const MARGIN = 12;

function HomePage() {
  const [layouts, setLayouts] = useState([
    { w: 4, h: 8, x: 0, y: 0, minW: 2, minH: 4, i: 'microfront' },
    { w: 2, h: 8, x: 0, y: 0, minW: 2, minH: 4, i: 'microfront2' }
  ]);

  function onChangeLayout(data) {
    console.log('onChangeLayout', data);
    setLayouts(data);
  }

  return (
    <ResponsiveGridLayout
      cols={8}
      margin={[MARGIN, MARGIN]}
      verticalCompact={true}
      useCSSTransforms={true}
      rowHeight={ROW_HEIGHT}
      onLayoutChange={onChangeLayout}>

      {layouts.map((layout) => (
        <div key={layout.i} data-grid={layout}>
          <DrawMicrofront dataGrid={layout} />
        </div>
      ))}
    </ResponsiveGridLayout>
  );
}

function DrawMicrofront(props) {
  useEffect(() => {
    registerApplication(
      props.dataGrid.i,
      () => import('microfront/Microfront'),
      (location) => true //location.pathname.startsWith('/')
    );
    start();
  }, []);

  return (
    <hot-card class="_h-full _w-full _border">
      <div id={`single-spa-application:${props.dataGrid.i}`} />
    </hot-card>
  );
}

export default HomePage;
