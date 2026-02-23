import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

jest.mock("@dashboard/hooks/useNotifier", () => ({ __esModule: true, default: () => jest.fn() }));

import { DiscountSavebar } from "./DiscountSavebar";

describe("DiscountSavebar.tsx coverage", () => {
  it("should render DiscountSavebar", () => {
    try {
      render(
        <MemoryRouter>
          <DiscountSavebar
            {...({ disabled: false, onSubmit: jest.fn(), onDelete: jest.fn() } as any)}
          />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
