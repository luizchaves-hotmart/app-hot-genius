import path from 'path';
import { toHaveNoViolations } from 'jest-axe';
import DotEnv from 'dotenv';
import '@testing-library/jest-dom/extend-expect';

DotEnv.config({ path: path.resolve(__dirname, '../../env/.development') });
expect.extend(toHaveNoViolations);
