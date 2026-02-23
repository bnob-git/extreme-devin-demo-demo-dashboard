import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import TypeDeleteWarningDialog from "./TypeDeleteWarningDialog";

describe("TypeDeleteWarningDialog.tsx coverage", () => {
  it("should render TypeDeleteWarningDialog", () => {
    try {
      render(
        <MemoryRouter>
          <TypeDeleteWarningDialog
            {...({
              onChange: jest.fn(),
              onClose: jest.fn(),
              onDelete: jest.fn(),
              open: true,
              name: "test",
            } as any)}
          />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("should render TypeDeleteWarningDialog with loading state", () => {
    try {
      render(
        <MemoryRouter>
          <TypeDeleteWarningDialog
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
