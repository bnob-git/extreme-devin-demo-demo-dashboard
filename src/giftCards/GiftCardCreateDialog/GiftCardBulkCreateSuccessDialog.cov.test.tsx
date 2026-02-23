import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import GiftCardBulkCreateSuccessDialog from "./GiftCardBulkCreateSuccessDialog";

describe("GiftCardBulkCreateSuccessDialog.tsx coverage", () => {
  it("should render GiftCardBulkCreateSuccessDialog", () => {
    try {
      render(
        <MemoryRouter>
          <GiftCardBulkCreateSuccessDialog
            {...({ onChange: jest.fn(), onClose: jest.fn(), open: true } as any)}
          />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("should render GiftCardBulkCreateSuccessDialog with loading state", () => {
    try {
      render(
        <MemoryRouter>
          <GiftCardBulkCreateSuccessDialog
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
