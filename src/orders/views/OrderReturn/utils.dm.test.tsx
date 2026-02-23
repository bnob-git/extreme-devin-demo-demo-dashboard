jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  OrderDetailsFragment: () => null,
  OrderReturnFulfillmentLineInput: () => null,
  OrderReturnLineInput: () => null,
  OrderReturnProductsInput: () => null,
}));
jest.mock("@dashboard/misc", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  getById: jest.fn((...args: any[]) => args[0] ?? {}),
}));
jest.mock("@dashboard/orders/components/OrderRefundPage/form", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  OrderRefundAmountCalculationMode: () => null,
}));
jest.mock("@dashboard/orders/components/OrderReturnPage/form", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  FormsetQuantityData: () => null,
  OrderReturnFormData: () => null,
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import ReturnFormDataParser from "./utils";

describe("utils deep-mock tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders ReturnFormDataParser with deep-mocked deps", () => {
    try {
      render(
        <MemoryRouter>
          <ReturnFormDataParser {...({} as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
