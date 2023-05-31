import { render, screen } from "@testing-library/react";
import { SummaryPage } from "./SummaryPage";
import { RenderWithProviders } from "../../tests/tests.util";


describe("Summary fields", () => {
  test("fields renders", () => {
    render(
      <RenderWithProviders
        route="summary"
       
      >
        <SummaryPage />
      </RenderWithProviders>
    );
    expect(screen.getByText("UserName:")).toBeInTheDocument();
  });
});
