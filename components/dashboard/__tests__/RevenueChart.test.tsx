import { render, screen, waitFor } from "@testing-library/react";
import { RevenueChart } from "../RevenueChart";

describe("RevenueChart", () => {
  it("renders skeleton during loading state", () => {
    render(<RevenueChart />);

    // Check for chart skeleton
    const chartSkeleton = screen.getByTestId("chart-skeleton");
    expect(chartSkeleton).toBeInTheDocument();
  });

  it("renders actual chart after loading", async () => {
    render(<RevenueChart />);

    // Wait for loading to complete (3 seconds)
    await waitFor(
      () => {
        expect(screen.queryByTestId("chart-skeleton")).not.toBeInTheDocument();
      },
      { timeout: 3500 }
    );

    // Check that actual chart content is rendered
    expect(screen.getByText("Revenue Overview")).toBeInTheDocument();
  });
});
