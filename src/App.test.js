import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

test("can receive a new user and show it on a list", () => {
  render(<App />);

  const nameInput = screen.getByRole("textbox", {
    name: /name/i,
  });
  const emailInput = screen.getByRole("textbox", {
    name: /email/i,
  });
  const button = screen.getByRole("button");

  user.click(nameInput);
  user.keyboard("sobhan");
  user.click(emailInput);
  user.keyboard("sobhan@gmail.com");

  user.click(button);

  const name = screen.getByRole("cell", { name: "sobhan" });
  const email = screen.getByRole("cell", { name: "sobhan@gmail.com" });

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
