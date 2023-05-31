import { render, screen } from "@testing-library/react";
import { RenderWithProviders } from "../tests/tests.util";
import { Todos } from "./Todos";

describe("startPage Component", () => {
  test("StartPage renders", () => {
    render(
      <RenderWithProviders route="todos">
        {" "}
        <Todos />
      </RenderWithProviders>
    );
    expect(screen.getByTestId("todos-page")).toBeInTheDocument;
  });

  test("Todos snapshot", () => {
    const todos = render(
      <RenderWithProviders route="todos">
        {" "}
        <Todos />
      </RenderWithProviders>
    );
    expect(todos).toMatchSnapshot();
  });
});
