# Lets Learning React Test 

### 1- foreach component u want to write test first you have to make file with  componentName.test.js

### 2- in this .test file we create each test function  with test or it key word like test("your test name",callback function) 
 
### 3-in test course   care about libraries version it can cause some streng bugs
### 4- the callback function strat with render method like this 
```               render(<App/>)         ```
### 5- the seccond part of each test function is Manipulate the component or find an element in it , these are possible with some query methods some things look what we have in real dom with diffrent syntax 
```    \n    const element=screen.getBy...();           \n ```
## run tests with this command : `npm run test`

