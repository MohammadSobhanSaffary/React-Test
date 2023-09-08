


# Let's Learn React Testing

## Test File Structure

1. For each component, create a separate test file with the naming convention `componentName.test.js`.

2. Inside the test file, write test functions using the `test` or `it` keyword. Each function should have a descriptive name and a callback function containing the tests.

```javascript
test("Your test name", () => {
  // Test code goes here
});
```

## Test Setup

1. Ensure compatibility with library `versions` to avoid any unexpected issues.

 
 
 2. Start the callback function with the  **`render`**  method to render the component being tested.

  ```javascript
   test("Your test name", () => {
     // Test code goes here
      // render the target component

        render(<App />);

     });
  ```


3. Next step is  **`query`** and find element (elements)   we want to use test on them  To query and select a DOM element, there are two popular ways to do it using screen methods like getByRole, getByText, getByDisplayValue, and more. However, in the case of a table where you want to test the length of the table body rows to have a specific length, such as 2, it becomes a bit tricky. This is because the length will always include the table header rows, and it's not possible to differentiate between tr elements in the thead and tbody
<p>
  
  <h4>Solution 1</h4> 

   Using `container query selector` :

  
  This solution involves destructuring the container from the render method and using container query selectors. You can inspect the rendered DOM using screen.logTestingPlaygroundURL() to find an appropriate query. 
    Here's an example:

   ```javascript
    const container = screen.container;
    const firstRowCell = container.querySelector('#sandbox > div > table > tbody');
  ```
 

   <h4>Solution 2</h4>
 
   Using `within` and `data-testid`:
 
 In your JSX code, add a `data-testid` attribute to the table body element, such as `data-testid="users"`. Then, in your test function, retrieve the table body rows using the following code:
 
  ```jsx
   
      <tbody data-testid="users">
   ```

   ```javascript
   const rows = within(screen.getByTestId("users")).getAllByRole("row");
   ```
  </p>  


4. Handle `User Events` (OPTIONAL PART)

 
5.`Expections`




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
