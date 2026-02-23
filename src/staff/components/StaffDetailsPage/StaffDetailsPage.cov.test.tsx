import { StaffDetailsPage } from "./StaffDetailsPage";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
  useLocation: () => ({ pathname: "/", search: "", hash: "", state: null }),
  useParams: () => ({}),
  Link: ({ children }: any) => <>{children}</>,
}));

describe("staff/components/StaffDetailsPage/StaffDetailsPage.tsx", () => {
  it("should export StaffDetailsPage", () => {
    expect(StaffDetailsPage).toBeDefined();
  });
});
