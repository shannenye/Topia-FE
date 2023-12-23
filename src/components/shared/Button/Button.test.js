import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";

describe("<Button />", () => {
    it("renders correctly", () => {
      const { component } = render(<Button text="Topia" type="secondary" click={() => {}} />);
    expect(component).toMatchSnapshot();
  });
  
});
