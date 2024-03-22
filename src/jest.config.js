module.exports = {
    // Automatically clear mock calls and instances between every test
    clearMocks: true,
  
    // The directory where Jest should output its coverage files
    coverageDirectory: "coverage",
  
    // An array of file extensions your modules use
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  
    // The test environment that will be used for testing
    testEnvironment: "jsdom",
  
    // Transform property to tell Jest how to process `.jsx` files
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest",
    },
  
    // If you have a setup file to configure testing frameworks before each test
    // setupFilesAfterEnv: ['./jest.setup.js'],
    
    // The pattern or location of test files
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  
    // If you're using TypeScript
    // preset: 'ts-jest',
  };
  