import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("it show my two input and one button are exist in screen", () => {
  // render the component
  render(<UserForm />);
  // manipulate the component or find element in
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");
  // assertion - make sure the componenet is doing
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
  //what we expect it to do
});

test("it calls onUserAdd when the form is submitted", () => {
  const users = [];
  const callback = (input) => {
    users.push(input);
  };

  // NOT THE BEST IMPLEMENTATION
  //Try to render my componenet
  render(<UserForm addUser={callback} />);
  //Find the two inputs
  const [emailInput, nameInput] = screen.getAllByRole("textbox");
  // Simulate typeing in a name
  user.click(nameInput);
  user.keyboard("sobhan");
  // simulate typing an email
  user.click(emailInput);
  user.keyboard("sobhan@gmail.com");
  //Find the button
  const button = screen.getByRole("button");
  //Simulate ckicking the button
  user.click(button);
  //Assertion to make sure 'onUserAdd' gets called with email/name
  expect(users).toHaveLength(1);
  expect(users[0]).toEqual({ name: "sobhan", email: "sobhan@gmail.com" });
});

test("it calls onUserAdd when the form is submitted mock version", () => {
  const mock = jest.fn();
  // THE BEST IMPLEMENTATION

  //Try to render my componenet
  render(<UserForm addUser={mock} />);
  //Find the two inputs
  // const [emailInput, nameInput] = screen.getAllByRole("textbox"); this is not best way
  const emailInput = screen.getByPlaceholderText("email");
  const nameInput = screen.getByPlaceholderText("username");
  // Simulate typeing in a name
  user.click(nameInput);
  user.keyboard("sobhan");
  // simulate typing an email
  user.click(emailInput);
  user.keyboard("sobhan@gmail.com");
  //Find the button
  const button = screen.getByRole("button");
  //Simulate ckicking the button
  user.click(button);
  //Assertion to make sure 'onUserAdd' gets called with email/name
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({
    name: "sobhan",
    email: "sobhan@gmail.com",
  });
});
