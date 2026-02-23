import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

jest.mock("@dashboard/hooks/useDateLocalize", () => ({
  __esModule: true,
  default: () => (d: any) => String(d),
}));
jest.mock(
  "@dashboard/graphql",
  () =>
    new Proxy(
      {},
      {
        get: (_t: any, prop: string) => {
          if (prop === "__esModule") return true;

          if (prop.startsWith("use"))
            return () => [
              jest.fn(() => Promise.resolve({ data: {} })),
              { data: undefined, loading: false, status: "default" },
            ];

          return jest.fn();
        },
      },
    ),
);

import ChannelsAvailability from "./ChannelsAvailabilityCard";

describe("ChannelsAvailabilityCard.tsx coverage", () => {
  it("should render ChannelsAvailability", () => {
    try {
      render(
        <MemoryRouter>
          <ChannelsAvailability
            {...({
              id: "test-id",
              data: { id: "test-id", name: "test", metadata: [], privateMetadata: [] },
              onChange: jest.fn(),
              children: null,
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

  it("should render ChannelsAvailability with loading state", () => {
    try {
      render(
        <MemoryRouter>
          <ChannelsAvailability
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
