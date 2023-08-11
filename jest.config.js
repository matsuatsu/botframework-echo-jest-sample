/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots:["<rootDir>/src","<rootDir>/tests"],
  moduleNameMapper:{
    "^@/(.*)$": "<rootDir>/src/$1"
  }
};