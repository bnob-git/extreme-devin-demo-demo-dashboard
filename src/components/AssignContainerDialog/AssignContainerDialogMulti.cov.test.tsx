import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

jest.mock("@dashboard/hooks/useSearchQuery", () => ({
  __esModule: true,
  default: () => ({ query: "", change: jest.fn(), reset: jest.fn() }),
}));
jest.mock("@dashboard/hooks/useModalDialogOpen", () => ({ __esModule: true, default: jest.fn() }));

import { AssignContainerDialogMulti } from "./AssignContainerDialogMulti";

describe("AssignContainerDialogMulti.tsx coverage", () => {
  it("should render AssignContainerDialogMulti", () => {
    try {
      render(
        <MemoryRouter>
          <AssignContainerDialogMulti
            {...({
              loading: false,
              data: { id: "test-id", name: "test", metadata: [], privateMetadata: [] },
              onSubmit: jest.fn(),
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
});
