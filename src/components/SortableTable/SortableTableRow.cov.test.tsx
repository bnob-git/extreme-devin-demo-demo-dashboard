import { SortableTableRow } from "./SortableTableRow";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
  useLocation: () => ({ pathname: "/", search: "", hash: "", state: null }),
  useParams: () => ({}),
  Link: ({ children }: any) => <>{children}</>,
}));

describe("components/SortableTable/SortableTableRow.tsx", () => {
  it("should export SortableTableRow", () => {
    expect(SortableTableRow).toBeDefined();
  });
});
