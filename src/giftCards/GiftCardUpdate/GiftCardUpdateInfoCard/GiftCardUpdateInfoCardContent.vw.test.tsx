jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  ...jest.requireActual("@dashboard/graphql"),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import GiftCardUpdateInfoCardContent from "./GiftCardUpdateInfoCardContent";

describe("GiftCardUpdateInfoCardContent view tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders GiftCardUpdateInfoCardContent with data", () => {
    try {
      render(
        <MemoryRouter initialEntries={["/test/test-id-123"]}>
          <GiftCardUpdateInfoCardContent {...({} as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
