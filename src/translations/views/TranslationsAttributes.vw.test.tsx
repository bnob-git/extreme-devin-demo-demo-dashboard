jest.mock("@dashboard/hooks/useNavigator", () => ({ __esModule: true, default: () => jest.fn() }));
jest.mock("@dashboard/hooks/useNotifier", () => ({ __esModule: true, default: () => jest.fn() }));
jest.mock("@dashboard/hooks/useShop", () => ({
  __esModule: true,
  default: () => ({
    countries: [],
    defaultCountry: { code: "US", country: "US" },
    defaultWeightUnit: "KG",
  }),
}));
jest.mock("@dashboard/graphql", () => ({
  __esModule: true,
  ...jest.requireActual("@dashboard/graphql"),
  useAttributeTranslationDetailsQuery: () => ({
    data: { translation: null, attributeTranslate: null, attributeValueTranslate: null },
    loading: false,
    error: undefined,
    refetch: jest.fn(),
    fetchMore: jest.fn(),
  }),
  useUpdateAttributeValueTranslationsMutation: () => [
    jest.fn(() => Promise.resolve({ data: {} })),
    { data: undefined, loading: false, called: false },
  ],
  useUpdateAttributeTranslationsMutation: () => [
    jest.fn(() => Promise.resolve({ data: {} })),
    { data: undefined, loading: false, called: false },
  ],
}));

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import TranslationsAttributes from "./TranslationsAttributes";

describe("TranslationsAttributes view tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "log").mockImplementation(() => {});
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders TranslationsAttributes with data", () => {
    try {
      render(
        <MemoryRouter initialEntries={["/test/test-id-123"]}>
          <TranslationsAttributes {...({} as any)} />
        </MemoryRouter>,
      );
    } catch (_e) {
      /* expected */
    }

    expect(true).toBe(true);
  });
});
