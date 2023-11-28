
module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  collectCoverage: true,
  coverageProvider: 'v8',
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/vendor/',
  ],
  coverageReporters: [
    'json',
    'lcov',
    'text-summary',
  ],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
  coverageDirectory: './coverage',
}
