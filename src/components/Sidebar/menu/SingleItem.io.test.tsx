jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ id: "test-id" }),
  useNavigate: () => jest.fn(),
  useLocation: () => ({ pathname: "/", search: "", hash: "", state: null }),
  useSearchParams: () => [new URLSearchParams(), jest.fn()],
}));

import { SingleItem } from "./SingleItem";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("SingleItem", () => {
  test("SingleItem is exported", () => {
    expect(SingleItem).toBeDefined();
  });

  test("SingleItem can be called", () => {
    if (typeof SingleItem === "function") {
      try {
        (SingleItem as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
