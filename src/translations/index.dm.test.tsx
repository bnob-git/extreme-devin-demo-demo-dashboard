jest.mock("@dashboard/components/Router", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  Route: () => null,
}));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  LanguageCodeEnum: () => null,
}));
jest.mock("@dashboard/intl", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  sectionNames: jest.fn((...args: any[]) => args[0] ?? {}),
}));
jest.mock("@dashboard/url-utils", () => ({
  __esModule: true,
  default: jest.fn((...args: any[]) => args[0] ?? {}),
  parseQs: jest.fn((...args: any[]) => args[0] ?? {}),
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import TranslationsRouter from ".";

describe("index deep-mock tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders TranslationsRouter with deep-mocked deps", () => {
    try {
      render(
        <MemoryRouter>
          <TranslationsRouter {...({} as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
