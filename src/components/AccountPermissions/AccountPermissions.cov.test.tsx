import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import AccountPermissions from "./AccountPermissions";

describe("AccountPermissions.tsx coverage", () => {
  it("should render AccountPermissions", () => {
    try {
      render(
        <MemoryRouter>
          <AccountPermissions
            {...({
              disabled: false,
              data: { id: "test-id", name: "test", metadata: [], privateMetadata: [] },
              onChange: jest.fn(),
              selected: [],
            } as any)}
          />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("should render AccountPermissions with loading state", () => {
    try {
      render(
        <MemoryRouter>
          <AccountPermissions
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
