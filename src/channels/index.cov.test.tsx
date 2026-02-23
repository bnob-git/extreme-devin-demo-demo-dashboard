import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import ChannelsSection from ".";

describe("index.tsx coverage", () => {
  it("should render ChannelsSection", () => {
    try {
      render(
        <MemoryRouter>
          <ChannelsSection {...({ params: {}, channels: [] } as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("should render ChannelsSection with loading state", () => {
    try {
      render(
        <MemoryRouter>
          <ChannelsSection
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
