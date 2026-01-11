import { render, screen, waitFor } from "@testing-library/react";
import { StatsCards } from "../StatsCards";

describe("StatsCards", () => {
  it("renders skeleton during loading state", () => {
    render(<StatsCards />);

    // Check for stats cards skeleton
    const statsSkeleton = screen.getByTestId("stats-skeleton");
    expect(statsSkeleton).toBeInTheDocument();
    expect(statsSkeleton.children).toHaveLength(4);
  });

  it("renders actual stats cards after loading", async () => {
    render(<StatsCards />);

    // Wait for loading to complete (2 seconds)
    await waitFor(
      () => {
        expect(screen.queryByTestId("stats-skeleton")).not.toBeInTheDocument();
      },
      { timeout: 2500 }
    );

    // Check that actual content is rendered
    expect(screen.getByText("Monthly Revenue")).toBeInTheDocument();
    expect(screen.getByText("Active Users")).toBeInTheDocument();
    expect(screen.getByText("Churn Rate")).toBeInTheDocument();
    expect(screen.getByText("Growth Rate")).toBeInTheDocument();
  });
});
