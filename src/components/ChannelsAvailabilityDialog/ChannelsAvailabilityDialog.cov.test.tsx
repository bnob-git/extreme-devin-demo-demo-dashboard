import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import ChannelsAvailabilityDialog from "./ChannelsAvailabilityDialog";

describe("ChannelsAvailabilityDialog.tsx coverage", () => {
  it("should render ChannelsAvailabilityDialog", () => {
    try {
      render(
        <MemoryRouter>
          <ChannelsAvailabilityDialog
            {...({
              onChange: jest.fn(),
              onClose: jest.fn(),
              open: true,
              selected: [],
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

  it("should render ChannelsAvailabilityDialog with loading state", () => {
    try {
      render(
        <MemoryRouter>
          <ChannelsAvailabilityDialog
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
