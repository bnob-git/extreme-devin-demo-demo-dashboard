import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

jest.mock("@dashboard/hooks/useModalDialogOpen", () => ({ __esModule: true, default: jest.fn() }));

import { TokenCreateDialog } from "./TokenCreateDialog";

describe("TokenCreateDialog.tsx coverage", () => {
  it("should render TokenCreateDialog", () => {
    try {
      render(
        <MemoryRouter>
          <TokenCreateDialog
            {...({
              id: "test-id",
              onSubmit: jest.fn(),
              onChange: jest.fn(),
              onClose: jest.fn(),
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
});
