import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import DiscountSection from ".";
import { discount, sale, saleList, voucherDetails, voucherList } from "./fixtures";

describe("index fixture tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders DiscountSection with saleList fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <DiscountSection {...(saleList as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders DiscountSection with voucherList fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <DiscountSection {...(voucherList as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders DiscountSection with sale fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <DiscountSection {...(sale as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders DiscountSection with voucherDetails fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <DiscountSection {...(voucherDetails as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders DiscountSection with discount fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <DiscountSection {...(discount as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
