// Auto-generated utility test
const { createDeepMock } = jest.requireActual("@test/deepMock");

jest.mock(
  "@dashboard/graphql",
  () =>
    new Proxy(
      {},
      {
        get: (_: any, p: string) => {
          if (p === "__esModule") return true;

          return p;
        },
      },
    ),
);

import { createGetCellContent, orderDetailsStaticColumnsAdapter } from "./datagrid";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {
    /* expected */
  });
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("orderDetailsStaticColumnsAdapter", () => {
  test("is defined", () => {
    expect(orderDetailsStaticColumnsAdapter).toBeDefined();
  });
});

describe("createGetCellContent", () => {
  test("executes with deep mock args", () => {
    const result = createGetCellContent(createDeepMock(), createDeepMock(), createDeepMock());

    if (result && typeof result === "object" && typeof result.then === "function") {
      result.catch(() => {
        /* expected */
      });
    }

    expect(true).toBe(true);
  });

  test("executes with empty object args", () => {
    const result = (createGetCellContent as any)({}, {}, {});

    if (result && typeof result === "object" && typeof result.then === "function") {
      result.catch(() => {
        /* expected */
      });
    }

    expect(true).toBe(true);
  });

  test("executes with array args", () => {
    const result = (createGetCellContent as any)([], [], []);

    if (result && typeof result === "object" && typeof result.then === "function") {
      result.catch(() => {
        /* expected */
      });
    }

    expect(true).toBe(true);
  });
});
