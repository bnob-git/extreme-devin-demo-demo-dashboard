jest.mock(
  "@dashboard/graphql",
  () =>
    new Proxy(
      {},
      {
        get: (_t: any, prop: string) => {
          if (prop === "__esModule") return true;

          if (/^[A-Z]/.test(prop)) return prop;

          if (/^use/.test(prop)) return () => ({ data: undefined, loading: false });

          return prop;
        },
      },
    ),
);

import {
  address,
  adminUserPermissions,
  channels,
  countries,
  date,
  fetchMoreProps,
  filterPageProps,
  filterPresetsProps,
  listActionsProps,
  pageListProps,
  paginatorContextValues,
  permissions,
  searchPageProps,
  sortPageProps,
  tabPageProps,
} from "./fixtures";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "warn").mockImplementation(() => {});
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("fixtures", () => {
  test("pageListProps is exported", () => {
    expect(pageListProps).toBeDefined();
  });

  test("listActionsProps is exported", () => {
    expect(listActionsProps).toBeDefined();
  });

  test("countries is exported", () => {
    expect(countries).toBeDefined();
  });

  test("tabPageProps is exported", () => {
    expect(tabPageProps).toBeDefined();
  });

  test("filterPresetsProps is exported", () => {
    expect(filterPresetsProps).toBeDefined();
  });

  test("paginatorContextValues is exported", () => {
    expect(paginatorContextValues).toBeDefined();
  });

  test("searchPageProps is exported", () => {
    expect(searchPageProps).toBeDefined();
  });

  test("filterPageProps is exported", () => {
    expect(filterPageProps).toBeDefined();
  });

  test("fetchMoreProps is exported", () => {
    expect(fetchMoreProps).toBeDefined();
  });

  test("sortPageProps is exported", () => {
    expect(sortPageProps).toBeDefined();
  });

  test("channels is exported", () => {
    expect(channels).toBeDefined();
  });

  test("permissions is exported", () => {
    expect(permissions).toBeDefined();
  });

  test("date is exported", () => {
    expect(date).toBeDefined();
  });

  test("adminUserPermissions is exported", () => {
    expect(adminUserPermissions).toBeDefined();
  });

  test("address is exported", () => {
    expect(address).toBeDefined();
  });
});
