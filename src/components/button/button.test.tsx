import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {
  test("Button renders", () => {
    render(<Button>AnyButton</Button>);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("Button renders without children", () => {
    render(<Button />);

    expect(screen.getByText("standart button")).toBeInTheDocument();
  });

  test("Button snapshot", () => {
    const anyButton = render(<Button />);
    expect(anyButton).toMatchSnapshot();
  });
});
