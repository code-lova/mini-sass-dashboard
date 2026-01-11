import { render, screen, waitFor } from "@testing-library/react";
import { ActivityCard } from "../ActivityCard";

describe("ActivityCard", () => {
  it("renders skeleton during loading state", () => {
    render(<ActivityCard />);

    // Check for activity skeleton
    const activitySkeleton = screen.getByTestId("activity-skeleton");
    expect(activitySkeleton).toBeInTheDocument();
    expect(activitySkeleton.children).toHaveLength(4);
  });

  it("renders actual activity content after loading", async () => {
    render(<ActivityCard />);

    // Wait for loading to complete (1 second)
    await waitFor(
      () => {
        expect(
          screen.queryByTestId("activity-skeleton")
        ).not.toBeInTheDocument();
      },
      { timeout: 1500 }
    );

    // Check that actual content is rendered
    expect(screen.getByText("Recent Activity")).toBeInTheDocument();
  });
});
