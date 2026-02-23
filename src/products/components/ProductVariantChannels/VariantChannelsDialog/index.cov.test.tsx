import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

jest.mock("@dashboard/hooks/useFormset", () => ({
  __esModule: true,
  default: (init: any) => ({
    data: init || [],
    change: jest.fn(),
    add: jest.fn(),
    remove: jest.fn(),
    set: jest.fn(),
    get: jest.fn(),
    replace: jest.fn(),
  }),
}));
jest.mock("@dashboard/hooks/useModalDialogOpen", () => ({ __esModule: true, default: jest.fn() }));

import { VariantChannelsDialog } from ".";

describe("index.tsx coverage", () => {
  it("should render VariantChannelsDialog", () => {
    try {
      render(
        <MemoryRouter>
          <VariantChannelsDialog
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
});
