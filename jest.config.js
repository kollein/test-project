module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@mocks/(.*)$': '<rootDir>/tests/mocks/$1',
    '\\.(css|less|sass|scss)$': '<rootDir>/tests/unit/mocks/styleMock.js',
  },
  setupFiles: ['<rootDir>/tests/unit/setup'],
  collectCoverage: true,
  transform: { '^.*\\.js$': 'babel-jest' },
  transformIgnorePatterns: ['node_modules/(?!vue-router|@babel|vuetify|@rddev/web-components)'],
  coverageDirectory: '<rootDir>/tests/unit/coverage',
  coverageThreshold: {
    global: {
      branches: 10,
      functions: 10,
      lines: 10,
      statements: 10,
    },
  },
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!**/node_modules/**',
    '!src/**/index.js',
    '!src/main.js',
    '!src/registerServiceWorker.js',
    '!src/sw.js',
    '!src/helpers/*',
    '!src/router/**',
    '!src/lang/**',
    '!src/plugins/**',
  ],
};
