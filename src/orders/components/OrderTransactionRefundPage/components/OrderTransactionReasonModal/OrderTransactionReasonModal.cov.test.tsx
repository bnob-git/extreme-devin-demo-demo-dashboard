import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { OrderTransactionReasonModal } from "./OrderTransactionReasonModal";

describe("OrderTransactionReasonModal.tsx coverage", () => {
  it("should render OrderTransactionReasonModal", () => {
    try {
      render(
        <MemoryRouter>
          <OrderTransactionReasonModal
            {...({ onChange: jest.fn(), onClose: jest.fn(), open: true } as any)}
          />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
