import { ExtendedTimelineEvent } from "./ExtendedTimelineEvent";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
  useLocation: () => ({ pathname: "/", search: "", hash: "", state: null }),
  useParams: () => ({}),
  Link: ({ children }: any) => <>{children}</>,
}));

describe("orders/components/OrderHistory/ExtendedTimelineEvent.tsx", () => {
  it("should export ExtendedTimelineEvent", () => {
    expect(ExtendedTimelineEvent).toBeDefined();
  });
});
