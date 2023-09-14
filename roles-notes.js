[{"content":"Roles Component\n\n","type":"text","id":"3cs1f"},{"content":"import { render, screen } from '@testing-library/react';\n\nfunction Roles() {\n  return (\n    <div>\n      <button>button</button>\n      <a href=\"/\">link</a>\n      <header>header</header>\n      <footer>footer</footer>\n      <h1>h1</h1>\n      <input type=\"number\" />\n      number\n      <input type=\"text\" />\n      text\n      <input type=\"radio\" />\n      radio\n      <input type=\"checkbox\" />\n      checkbox\n      <ul>\n        <li>li</li>\n      </ul>\n      <img />\n    </div>\n  );\n}\nrender(<Roles />);","type":"code","id":"uri4z"},{"content":"**Roles** Tests\n","type":"text","id":"56o3i"},{"content":"import { render, screen } from '@testing-library/react';\ntest('can find elements by role', () => {\n  render(<Roles />);\n  const roles = [\n    'link',\n    'button',\n    'contentinfo',\n    'heading',\n    'banner',\n    'img',\n    'checkbox',\n    'spinbutton',\n    'radio',\n    'textbox',\n    'listitem',\n    'list',\n  ];\n\n  roles.forEach((role) => {\n    const element = screen.getByRole(role);\n    expect(element).toBeInTheDocument();\n  });\n});","type":"code","id":"sx7wl"},{"content":"Access to the name of  element to define a special element with another elements","type":"text","id":"1lej5"},{"content":"import { render, screen } from '@testing-library/react';\r\n\r\nfunction AccessiblenName() {\r\n  return (\r\n    <div>\r\n      <input />\r\n      <button>submit</button>\r\n      <button>cancle</button>\r\n    </div>\r\n  )\r\n}\r\nrender(<AccessiblenName />)","type":"code","id":"y69wb"},{"content":"Acces to the name Tests\n","type":"text","id":"csasb"},{"content":"import { render, screen } from '@testing-library/react';\n\ntest('can select by accessible name', () => {\n  render(<AccessiblenName />);\n    \n  const submitBtn = screen.getByRole('button', {\n    name: 'submit',\n  });\n\n  const cancleBtn = screen.getByRole('button', {\n    name: 'cancle',\n  });\n\n  expect(submitBtn).toBeInTheDocument();\n  expect(cancleBtn).toBeInTheDocument();\n});","type":"code","id":"3v2kw"},{"content":"import { render, screen } from '@testing-library/react';\r\n\r\nfunction MoreNames() {\r\n  return (\r\n    <div>\r\n      <label htmlFor=\"name\">name</label>\r\n      <input id=\"name\" />\r\n      <label htmlFor=\"email\">email</label>\r\n      <input id=\"email\" />\r\n\r\n    </div>\r\n  )\r\n}\r\nrender(<MoreNames />)","type":"code","id":"kk8rx"},{"content":"import { render, screen } from '@testing-library/react';\r\n\r\ntest('can select by accessible name', () => {\r\n  render(<MoreNames />);\r\n\r\n  const nameInput = screen.getByRole('textbox', {\r\n    name: 'name',\r\n  });\r\n\r\n  const emailInput = screen.getByRole('textbox', {\r\n    name: 'email',\r\n  });\r\n\r\n  expect(nameInput).toBeInTheDocument();\r\n  expect(emailInput).toBeInTheDocument();\r\n});","type":"code","id":"0xx1o"},{"content":"","type":"code","id":"bjen0"},{"content":"import { render, screen } from '@testing-library/react';\r\n\r\nfunction IconBtn() {\r\n  return (\r\n    <>\r\n    <button aria-label=\"sign in\">\r\n      <svg />\r\n    </button>\r\n    <button aria-label=\"sign up\">\r\n      <svg />\r\n    </button>\r\n    </>\r\n  )\r\n}\r\nrender(<IconBtn />)","type":"code","id":"0105z"},{"content":"import { render, screen } from '@testing-library/react';\n\ntest('can select by accessible name', () => {\n  render(<IconBtn />);\n  // define diffrents between buttons in test\n  //  aria-label solution when we dont have text in buttons\n  const signinBtn = screen.getByRole('button', {\n    name: /sign in/i,\n  });\n  const signupBtn = screen.getByRole('button', {\n    name: /sign up/i,\n  });\n\n  expect(signinBtn).toBeInTheDocument();\n  expect(signupBtn).toBeInTheDocument();\n});","type":"code","id":"g7j49"}]