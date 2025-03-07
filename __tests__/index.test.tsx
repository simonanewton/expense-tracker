import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

describe("Home", () => {
    it("renders the Next.js logo", () => {
        render(<Home />);
        const logo = screen.getByAltText("Next.js logo");
        expect(logo).toBeInTheDocument();
    });

    it("renders the main heading", () => {
        render(<Home />);
        const instruction = screen.getByText(/get started by editing/i);
        expect(instruction).toBeInTheDocument();
    });
});
