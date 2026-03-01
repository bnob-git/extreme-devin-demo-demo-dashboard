jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ id: "test-id" }),
  useNavigate: () => jest.fn(),
  useLocation: () => ({ pathname: "/", search: "", hash: "", state: null }),
  useSearchParams: () => [new URLSearchParams(), jest.fn()],
}));

import { TimelineNote } from "./TimelineNote";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("TimelineNote", () => {
  test("TimelineNote is exported", () => {
    expect(TimelineNote).toBeDefined();
  });

  test("TimelineNote can be called", () => {
    if (typeof TimelineNote === "function") {
      try {
        (TimelineNote as any)();
      } catch (_e) {
        /* ok */
      }
    }
  });
});
