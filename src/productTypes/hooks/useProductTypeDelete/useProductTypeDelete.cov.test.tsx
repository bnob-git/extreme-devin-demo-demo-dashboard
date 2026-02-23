import useProductTypeDelete from "./useProductTypeDelete";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
  useLocation: () => ({ pathname: "/", search: "", hash: "", state: null }),
  useParams: () => ({}),
  Link: ({ children }: any) => <>{children}</>,
}));

describe("productTypes/hooks/useProductTypeDelete/useProductTypeDelete.tsx", () => {
  it("should have default export", () => {
    expect(useProductTypeDelete).toBeDefined();
  });
});
