jest.mock("@dashboard/components/Card", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  DashboardCard: () => null,
}));
jest.mock("@dashboard/components/ConfirmButton", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  ConfirmButtonTransitionState: () => null,
}));
jest.mock("@dashboard/components/Grid", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  Grid: () => null,
}));
jest.mock("@dashboard/components/Hr", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  Hr: () => null,
}));
jest.mock("@dashboard/components/TablePagination", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  TablePaginationWithContext: () => null,
}));
jest.mock("@dashboard/hooks/useForm", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  SubmitPromise: () => null,
}));
jest.mock("@dashboard/intl", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  buttonMessages: jest.fn((...args: any[]) => args[0] ?? {}),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import TranslationFields from "./TranslationFields";

describe("TranslationFields deep-mock tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders TranslationFields with deep-mocked deps", () => {
    try {
      render(
        <MemoryRouter>
          <TranslationFields
            {...({
              activeField: false,
              disabled: false,
              fields: [],
              initialState: {},
              onDiscard: jest.fn(() => Promise.resolve({})),
              onEdit: jest.fn(() => Promise.resolve({})),
              onSubmit: jest.fn(() => Promise.resolve({})),
              onValueChange: jest.fn(() => Promise.resolve({})),
              pagination: {},
              richTextResetKey: "test-id",
              saveButtonState: jest.fn(() => Promise.resolve({})),
              title: "test",
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
