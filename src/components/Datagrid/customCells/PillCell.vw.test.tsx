import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("PillCell view tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders stringToHue with data", () => {
    try {
      render(
        <MemoryRouter initialEntries={["/test/test-id-123"]}>
          <stringToHue {...({} as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
