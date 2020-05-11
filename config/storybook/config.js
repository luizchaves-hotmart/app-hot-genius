import { configure } from '@storybook/react';
import 'app/i18n';

/* Storybook */
import './styles.scss';

/* Cosmos base */
import '@cosmos/styles/reset.css';
import '@cosmos/styles/base.css';
import '@cosmos/styles/theme.css';
import '@cosmos/alert/variations/warning.css';
import '@cosmos/alert/variations/success.css';
import '@cosmos/alert/variations/danger.css';
import '@cosmos/alert';
import '@cosmos/toast';

/* Cosmos utilities */
import '@cosmos/styles/utilities/sizing.css';
import '@cosmos/styles/utilities/flex/flex.css';
import '@cosmos/styles/utilities/border/border.css';
import '@cosmos/styles/utilities/spacing/spacing.css';
import '@cosmos/styles/utilities/display/display.css';

function loadStories() {
  const req = require.context('../../src/', true, /.stories.tsx$/);
  req.keys().forEach(req)
}

configure(loadStories, module);
