module.exports = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      diagnostics: false
    }
  },
  rootDir: '../../',
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '**/src/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/dist/**'
  ],
  setupFiles: [
    'jest-canvas-mock',
    '<rootDir>/node_modules/mutationobserver-shim/MutationObserver.js',
    '<rootDir>/node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js'
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/dist/',
    '<rootDir>/node_modules/'
  ],
  coverageDirectory: '<rootDir>/config/jest/coverage',
  moduleDirectories: ['src', 'node_modules'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  moduleNameMapper: {
    '^src(.*)$': '<rootDir>/src$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$'
      : '<rootDir>/config/jest/__mocks__/file-mock.js',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'identity-obj-proxy',
    '@cosmos(.*)$': '@hotmart/cosmos/dist/$1'
  }
};
