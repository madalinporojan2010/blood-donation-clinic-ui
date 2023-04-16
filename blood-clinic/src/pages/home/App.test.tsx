import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { APP_TITLE } from "./App.constants";

test("renders the app title", () => {
  render(<App />);
  const title = global.window.document.title;
  expect(title).toEqual(APP_TITLE);
});
