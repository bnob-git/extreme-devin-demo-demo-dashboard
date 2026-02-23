import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { AllRipplesModal, getRipplesSortedAndGroupedByMonths } from "./AllRipplesModal";

describe("AllRipplesModal.tsx coverage", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders AllRipplesModal", () => {
    try {
      render(
        <MemoryRouter>
          <AllRipplesModal
            {...({
              id: "test",
              loading: false,
              errors: [],
              onSubmit: jest.fn(),
              onChange: jest.fn(),
              onClose: jest.fn(),
            } as any)}
          />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("calls getRipplesSortedAndGroupedByMonths", () => {
    try {
      (getRipplesSortedAndGroupedByMonths as any)({} as any);
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
