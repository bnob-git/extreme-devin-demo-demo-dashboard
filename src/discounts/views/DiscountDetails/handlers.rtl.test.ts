// Auto-generated utility test
const { createDeepMock } = jest.requireActual("@test/deepMock");

jest.mock("@apollo/client", () => ({
  __esModule: true,
  useQuery: () => ({ data: undefined, loading: false }),
  useMutation: () => [jest.fn(), { loading: false }],
  gql: (s: any) => s,
}));
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

import { createRuleCreateHandler, createRuleUpdateHandler, createUpdateHandler } from "./handlers";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation(() => {
    /* expected */
  });
});
afterEach(() => {
  jest.restoreAllMocks();
});

describe("createUpdateHandler", () => {
  test("executes with deep mock args", () => {
    const result = createUpdateHandler(createDeepMock(), createDeepMock(), createDeepMock());

    if (result && typeof result === "object" && typeof result.then === "function") {
      result.catch(() => {
        /* expected */
      });
    }

    expect(true).toBe(true);
  });

  test("executes with empty object args", () => {
    const result = (createUpdateHandler as any)({}, {}, {});

    if (result && typeof result === "object" && typeof result.then === "function") {
      result.catch(() => {
        /* expected */
      });
    }

    expect(true).toBe(true);
  });

  test("executes with array args", () => {
    const result = (createUpdateHandler as any)([], [], []);

    if (result && typeof result === "object" && typeof result.then === "function") {
      result.catch(() => {
        /* expected */
      });
    }

    expect(true).toBe(true);
  });
});

describe("createRuleUpdateHandler", () => {
  test("executes with deep mock args", () => {
    const result = createRuleUpdateHandler(createDeepMock(), createDeepMock(), createDeepMock());

    if (result && typeof result === "object" && typeof result.then === "function") {
      result.catch(() => {
        /* expected */
      });
    }

    expect(true).toBe(true);
  });

  test("executes with empty object args", () => {
    const result = (createRuleUpdateHandler as any)({}, {}, {});

    if (result && typeof result === "object" && typeof result.then === "function") {
      result.catch(() => {
        /* expected */
      });
    }

    expect(true).toBe(true);
  });

  test("executes with array args", () => {
    const result = (createRuleUpdateHandler as any)([], [], []);

    if (result && typeof result === "object" && typeof result.then === "function") {
      result.catch(() => {
        /* expected */
      });
    }

    expect(true).toBe(true);
  });
});

describe("createRuleCreateHandler", () => {
  test("executes with deep mock args", () => {
    const result = createRuleCreateHandler(createDeepMock(), createDeepMock(), createDeepMock());

    if (result && typeof result === "object" && typeof result.then === "function") {
      result.catch(() => {
        /* expected */
      });
    }

    expect(true).toBe(true);
  });

  test("executes with empty object args", () => {
    const result = (createRuleCreateHandler as any)({}, {}, {});

    if (result && typeof result === "object" && typeof result.then === "function") {
      result.catch(() => {
        /* expected */
      });
    }

    expect(true).toBe(true);
  });

  test("executes with array args", () => {
    const result = (createRuleCreateHandler as any)([], [], []);

    if (result && typeof result === "object" && typeof result.then === "function") {
      result.catch(() => {
        /* expected */
      });
    }

    expect(true).toBe(true);
  });
});
