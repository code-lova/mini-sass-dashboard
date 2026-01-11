import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ErrorBoundary, DefaultErrorFallback } from "./error-boundary";

// Component that throws an error
function ErrorComponent(): never {
  throw new Error("Test error");
}

// Component that can be reset
function ResettableErrorComponent() {
  const [shouldError, setShouldError] = React.useState(true);

  if (shouldError) {
    throw new Error("Test error");
  }

  return (
    <div>
      <p>Component recovered!</p>
      <button onClick={() => setShouldError(true)}>Break again</button>
    </div>
  );
}

describe("ErrorBoundary", () => {
  it("renders children when no error occurs", () => {
    render(
      <ErrorBoundary>
        <div>Test content</div>
      </ErrorBoundary>
    );

    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("renders fallback UI when error occurs", () => {
    // Suppress console.error for this test
    const consoleSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
    );

    expect(screen.getByText("Something went wrong!")).toBeInTheDocument();
    expect(screen.getByText("Try Again")).toBeInTheDocument();

    consoleSpy.mockRestore();
  });

  it("renders custom fallback when provided", () => {
    const consoleSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    render(
      <ErrorBoundary fallback={<div>Custom error message</div>}>
        <ErrorComponent />
      </ErrorBoundary>
    );

    expect(screen.getByText("Custom error message")).toBeInTheDocument();

    consoleSpy.mockRestore();
  });

  it("calls onError callback when error occurs", () => {
    const consoleSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});
    const onErrorMock = jest.fn();

    render(
      <ErrorBoundary onError={onErrorMock}>
        <ErrorComponent />
      </ErrorBoundary>
    );

    expect(onErrorMock).toHaveBeenCalledWith(
      expect.any(Error),
      expect.any(Object)
    );

    consoleSpy.mockRestore();
  });

  it("resets error state when Try Again is clicked", async () => {
    const consoleSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    // Component that starts working, then can be made to error
    function TestComponent() {
      const [shouldError, setShouldError] = React.useState(false);

      if (shouldError) {
        throw new Error("Test error");
      }

      return (
        <div>
          <p>Component working!</p>
          <button onClick={() => setShouldError(true)}>Trigger error</button>
        </div>
      );
    }

    render(
      <ErrorBoundary>
        <TestComponent />
      </ErrorBoundary>
    );

    // Initially works
    expect(screen.getByText("Component working!")).toBeInTheDocument();

    // Trigger error
    fireEvent.click(screen.getByText("Trigger error"));

    // Should show error fallback
    await waitFor(() => {
      expect(screen.getByText("Something went wrong!")).toBeInTheDocument();
    });

    // Click reset button
    fireEvent.click(screen.getByText("Try Again"));

    // Should show working component again
    await waitFor(() => {
      expect(screen.getByText("Component working!")).toBeInTheDocument();
    });

    consoleSpy.mockRestore();
  });
});
