import { configure } from '@storybook/react';

/* Storybook */
import './styles.scss';

/* Cosmos base */
import '@cosmos/styles/reset.css';
import '@cosmos/styles/base.css';
import '@cosmos/styles/theme.css';
import '@cosmos/styles/animations.css';
import '@cosmos/alert/variations/warning.css';
import '@cosmos/alert/variations/success.css';
import '@cosmos/alert/variations/danger.css';
import '@cosmos/alert';
import '@cosmos/toast';

/* Styles */
import '@cosmos/grid/grid.css';
import '@cosmos/styles/utilities/sizing.css';
import '@cosmos/styles/utilities/flex/flex.css';
import '@cosmos/styles/utilities/border/border.css';
import '@cosmos/styles/utilities/spacing/spacing.css';
import '@cosmos/styles/utilities/display/display.css';
import '@cosmos/styles/utilities/background/variations/grays.css';
import '@cosmos/styles/utilities/text/text.css';
import '@cosmos/styles/utilities/text/variations/primary.css';
import '@cosmos/styles/utilities/text/variations/success.css';
import '@cosmos/styles/utilities/text/variations/danger.css';
import '@cosmos/styles/utilities/text/variations/grays.css';

function loadStories() {
  const req = require.context('../../src/', true, /.stories.tsx$/);
  req.keys().forEach(req)
}

configure(loadStories, module);
