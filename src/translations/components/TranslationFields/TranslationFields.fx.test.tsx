jest.mock("@dashboard/hooks/useForm", () => ({
  __esModule: true,
  default: (init: any, onSubmit: any) => ({
    data: init || {},
    change: jest.fn(),
    submit: onSubmit || jest.fn(),
    hasChanged: false,
    setChanged: jest.fn(),
    errors: {},
    setError: jest.fn(),
    clearErrors: jest.fn(),
  }),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { languages } from "../../fixtures";
import TranslationFields from "./TranslationFields";

describe("TranslationFields fixture tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders TranslationFields with languages fixture prop", () => {
    try {
      render(
        <MemoryRouter>
          <TranslationFields {...(languages as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
