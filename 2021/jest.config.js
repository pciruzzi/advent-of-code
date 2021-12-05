module.exports = {
  testEnvironment: 'node',
  forceExit: true,
  roots: ['<rootDir>'],
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      isolatedModules: true, // Disable type-checking from tests (already done in lint stage)
    },
  },
  testMatch: ['**/__tests__/**/*.+(ts|js)', '**/?(*.)+(spec|test).+(ts|js)'],
};
