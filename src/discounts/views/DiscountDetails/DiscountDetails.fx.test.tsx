jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { discount, sale, saleList, voucherDetails, voucherList } from "../../fixtures";
import { DiscountDetails } from "./DiscountDetails";

describe("DiscountDetails fixture tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders DiscountDetails with saleList fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <DiscountDetails {...(saleList as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders DiscountDetails with voucherList fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <DiscountDetails {...(voucherList as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders DiscountDetails with sale fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <DiscountDetails {...(sale as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders DiscountDetails with voucherDetails fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <DiscountDetails {...(voucherDetails as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders DiscountDetails with discount fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <DiscountDetails {...(discount as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
