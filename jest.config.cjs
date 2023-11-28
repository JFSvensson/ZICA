
module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  collectCoverage: true,
  coverageProvider: 'v8',
  collectCoverageFrom: [
    '**/*.{js,jsx}',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/vendor/',
    '/coverage/'
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
