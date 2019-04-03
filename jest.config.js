module.exports = {
  "testEnvironment": "node",
  "setupFilesAfterEnv": ["<rootDir>/client/src/specTests/enzymeSetup.js"],
  "transformIgnorePatterns": ['<rootDir>/node_modules/'],
  "verbose": true
}