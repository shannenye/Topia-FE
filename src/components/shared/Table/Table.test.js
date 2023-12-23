import React from "react";
import { render } from "@testing-library/react";
import Table from "./Table";

describe("<Table />", () => {
  it("renders correctly", () => {
    const { component } = render(<Table />);
    expect(component).toMatchSnapshot();
  });
});
