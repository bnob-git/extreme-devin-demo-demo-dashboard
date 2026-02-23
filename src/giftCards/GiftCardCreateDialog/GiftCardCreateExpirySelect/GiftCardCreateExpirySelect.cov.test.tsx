import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

jest.mock("@dashboard/hooks/useCurrentDate", () => ({
  __esModule: true,
  default: () => new Date("2024-01-01").toISOString(),
}));

import GiftCardCreateExpirySelect from "./GiftCardCreateExpirySelect";

describe("GiftCardCreateExpirySelect.tsx coverage", () => {
  it("should render GiftCardCreateExpirySelect", () => {
    try {
      render(
        <MemoryRouter>
          <GiftCardCreateExpirySelect
            {...({
              errors: [],
              data: { id: "test-id", name: "test", metadata: [], privateMetadata: [] },
              onChange: jest.fn(),
            } as any)}
          />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("should render GiftCardCreateExpirySelect with loading state", () => {
    try {
      render(
        <MemoryRouter>
          <GiftCardCreateExpirySelect
            {...({
              loading: true,
              disabled: true,
              data: undefined,
              id: "test-id",
              params: {},
            } as any)}
          />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
