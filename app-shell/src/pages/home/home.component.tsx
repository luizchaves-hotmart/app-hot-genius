import React, { useEffect, useRef, useState } from 'react';
import RGL, { WidthProvider } from 'react-grid-layout';
import { registerApplication, start } from 'single-spa';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

import '@cosmos/card/card.css';
import './home.component.scss';

// eslint-disable-next-line new-cap
const ResponsiveGridLayout = WidthProvider(RGL);
const ROW_HEIGHT = 1;
const MARGIN = [12, 12];

function HomePage() {
  const [layouts, setLayouts] = useState([
    { w: 4, h: 5, x: 0, y: 0, minW: 2, minH: 1, i: 'mc-1' },
    { w: 2, h: 5, x: 0, y: 0, minW: 2, minH: 1, i: 'mc-2' }
  ]);

  function onChangeLayout(data) {
    console.log('onChangeLayout', data);
    setLayouts(data);
  }

  return (
    <ResponsiveGridLayout
      cols={8}
      margin={MARGIN}
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
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    registerApplication(
      `${props.dataGrid.i}-microfront`,
      () => import('microfront/Microfront'),
      (location) => true //location.pathname.startsWith('/')
    );
    registerApplication(
      `${props.dataGrid.i}-web-component`,
      () => import('microfront/WebComponent'),
      () => true
    );
    start();
  }, []);

  return (
    <hot-card class="_h-full _w-full _border _hot-scroll" ref={ref}>
      <div id={`single-spa-application:${props.dataGrid.i}-microfront`} />
      <div id={`single-spa-application:${props.dataGrid.i}-web-component`} />
    </hot-card>
  );
}

export default HomePage;
