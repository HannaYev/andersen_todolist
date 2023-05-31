import { render, screen } from "@testing-library/react";
import { StartPage } from "./StartPage";
import { RenderWithProviders } from '../../tests/tests.util'



describe("startPage Component", () => {
   test ('StartPage renders', ()=>{
    render (<RenderWithProviders
        route="/"> <StartPage /></RenderWithProviders>)
    expect(screen.getByText('Continue')).toBeInTheDocument
   })

  test("onChange works", () => {
    render(<RenderWithProviders
        route="/"><StartPage /></RenderWithProviders>);
    expect(screen.getByPlaceholderText(/Enter your name/i))
   
  });

  test("startPage input styles ", () => {
    render(<RenderWithProviders
        route="/"><StartPage /></RenderWithProviders>);
 expect(screen.getByPlaceholderText(/Enter your name/i)).toHaveClass('customInput')
  });
});
