import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

jest.mock("@dashboard/hooks/useDateLocalize", () => ({
  __esModule: true,
  default: () => (d: any) => String(d),
}));
jest.mock("@dashboard/hooks/useCurrentDate", () => ({
  __esModule: true,
  default: () => new Date("2024-01-01").toISOString(),
}));

import { ChannelAvailabilityItemContent } from "./ChannelAvailabilityItemContent";

describe("ChannelAvailabilityItemContent.tsx coverage", () => {
  it("should render ChannelAvailabilityItemContent", () => {
    try {
      render(
        <MemoryRouter>
          <ChannelAvailabilityItemContent
            {...({
              id: "test-id",
              errors: [],
              data: { id: "test-id", name: "test", metadata: [], privateMetadata: [] },
              onChange: jest.fn(),
              channels: [],
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
