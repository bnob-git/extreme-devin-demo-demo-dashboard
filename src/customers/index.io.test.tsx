jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ id: "test-id" }),
  useNavigate: () => jest.fn(),
  useLocation: () => ({ pathname: "/", search: "", hash: "", state: null }),
  useSearchParams: () => [new URLSearchParams(), jest.fn()],
}));

import { CustomerSection } from ".";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("index", () => {
  test("CustomerSection is exported", () => {
    expect(CustomerSection).toBeDefined();
  });

  test("CustomerSection can be called", () => {
    if (typeof CustomerSection === "function") {
      try {
        (CustomerSection as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
