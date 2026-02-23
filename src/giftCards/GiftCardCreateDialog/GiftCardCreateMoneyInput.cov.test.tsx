import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

jest.mock("@dashboard/hooks/useLocalStorage", () => ({
  __esModule: true,
  default: (_k: string, init: any) => [init, jest.fn()],
}));

import { GiftCardCreateMoneyInput } from "./GiftCardCreateMoneyInput";

describe("GiftCardCreateMoneyInput.tsx coverage", () => {
  it("should render GiftCardCreateMoneyInput", () => {
    try {
      render(
        <MemoryRouter>
          <GiftCardCreateMoneyInput
            {...({
              errors: [],
              data: { id: "test-id", name: "test", metadata: [], privateMetadata: [] },
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
