const { generateText } = require("./util");

// the `test` function is provided by Jest at runtime when this test file is run
//   vvvvvvvv test description     vvv callback when the test is run
test("should output name and age", () => {
  const text = generateText("Max", 29);
  // `expect` is another function provided by Jest, with some chainable helper methods (the "matchers")
  expect(text).toBe("Max (29 years old)");
});
