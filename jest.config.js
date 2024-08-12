module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/**/*.spec.ts"],
  verbose: true,
  forceExit: true,
  moduleNameMapper: {
    "@utils": "<rootDir>/src/utils",
    "@interfaces":"<rootDir>/src/interfaces",
    "@infrastructure":"<rootDir>/src/infrastructure",
    "@helper":"<rootDir>/src/helper",
    "@constants":"<rootDir>/src/constants",
    "@middlewares": "<rootDir>/src/middlewares",
  },
};
