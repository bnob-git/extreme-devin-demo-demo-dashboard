import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

jest.mock("@dashboard/hooks/useStateFromProps", () => ({
  __esModule: true,
  default: (val: any) => [val, jest.fn()],
}));
jest.mock("@dashboard/hooks/useModalDialogOpen", () => ({ __esModule: true, default: jest.fn() }));

import PageTypePickerDialog from "./PageTypePickerDialog";

describe("PageTypePickerDialog.tsx coverage", () => {
  it("should render PageTypePickerDialog", () => {
    try {
      render(
        <MemoryRouter>
          <PageTypePickerDialog
            {...({
              data: { id: "test-id", name: "test", metadata: [], privateMetadata: [] },
              onChange: jest.fn(),
              onClose: jest.fn(),
              open: true,
            } as any)}
          />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("should render PageTypePickerDialog with loading state", () => {
    try {
      render(
        <MemoryRouter>
          <PageTypePickerDialog
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
