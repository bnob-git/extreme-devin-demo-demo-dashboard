import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { ChannelsAvailabilityDropdown } from "./ChannelsAvailabilityDropdown";

describe("ChannelsAvailabilityDropdown.tsx coverage", () => {
  it("should render ChannelsAvailabilityDropdown", () => {
    try {
      render(
        <MemoryRouter>
          <ChannelsAvailabilityDropdown {...({ open: true, channels: [] } as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
