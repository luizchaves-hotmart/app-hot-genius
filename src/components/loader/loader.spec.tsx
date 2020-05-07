import React from 'react'
import { render } from '@testing-library/react';
import Loader from './loader.component';
import 'app/global.d';

describe('Test Loader Component', () => {
  test('expect test compatible with web components', () => {
    const { getByTestId } = render(<Loader />);
    const loader = getByTestId('hot-loading') as HTMLElement;
    expect(!!loader).toBeTruthy();
  });
});
