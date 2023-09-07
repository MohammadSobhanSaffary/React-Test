


# Let's Learn React Testing

## Test File Structure

1. For each component, create a separate test file with the naming convention `componentName.test.js`.

2. Inside the test file, write test functions using the `test` or `it` keyword. Each function should have a descriptive name and a callback function containing the tests.

```javascript
test("Your test name", () => {
  // Test code goes here
});


## Test Setup

1. Ensure compatibility with library versions to avoid any unexpected issues.

2. Start the callback function with the `render` method to render the component being tested.

```javascript
render(<App />);
```

## Performing Tests

1. Within the test function, you can manipulate the component and find elements using query methods.

```javascript
import { render, screen } from "@testing-library/react";

test("Example test", () => {
  render(<App />);
  const element = screen.getByText("Example"); // Example of finding an element
  // Perform assertions and expectations
});
```

## Running Tests

To run the tests, use the following command:
```
npm run test
```
