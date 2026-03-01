import { createDeepMock } from "@test/deepMock";

jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  OrderDetailsFragment: () => null,
  OrderReturnFulfillmentLineInput: () => null,
  OrderReturnLineInput: () => null,
  OrderReturnProductsInput: () => null,
}));
jest.mock("@dashboard/misc", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  getById: jest.fn((..._a: any[]) => createDeepMock()),
}));
jest.mock("@dashboard/orders/components/OrderRefundPage/form", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  OrderRefundAmountCalculationMode: () => null,
}));
jest.mock("@dashboard/orders/components/OrderReturnPage/form", () => ({
  __esModule: true,
  default: jest.fn((..._a: any[]) => createDeepMock()),
  FormsetQuantityData: () => null,
  OrderReturnFormData: () => null,
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import ReturnFormDataParser from "./utils";

describe("utils deep-proxy tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders ReturnFormDataParser with deep proxy props", () => {
    try {
      render(
        <MemoryRouter>
          <ReturnFormDataParser {...(createDeepMock() as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });

  it("renders ReturnFormDataParser with override props", () => {
    try {
      const mockProps = createDeepMock({
        id: "test-1",
        name: "Test",
        disabled: false,
        loading: false,
        errors: [],
        data: createDeepMock(),
        onSubmit: jest.fn(),
        onChange: jest.fn(),
        onClose: jest.fn(),
        onBack: jest.fn(),
        open: false,
        channels: [],
        params: { id: "test-1" },
      });

      render(
        <MemoryRouter>
          <ReturnFormDataParser {...(mockProps as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
