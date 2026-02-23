/**
 * Creates a deep mock object using Proxy that returns sensible defaults
 * for any property access. This allows functions and components to execute
 * more of their body before encountering errors, improving test coverage.
 */
export function createDeepMock(overrides: Record<string, unknown> = {}): any {
  const cache = new Map<string | symbol, unknown>();

  const handler: ProxyHandler<any> = {
    get(_target: any, prop: string | symbol): unknown {
      // Check overrides first
      if (typeof prop === "string" && prop in overrides) {
        return overrides[prop];
      }

      // Return cached value for consistency
      if (cache.has(prop)) {
        return cache.get(prop);
      }

      // Handle Symbol properties
      if (prop === Symbol.toPrimitive) {
        return (_hint: string) => "";
      }
      if (prop === Symbol.iterator) {
        return function* (): Generator {
          /* empty */
        };
      }

      // Handle common properties
      let result: unknown;
      switch (prop) {
        case "then":
          result = undefined;
          break; // Don't be thenable
        case "toJSON":
          result = () => ({});
          break;
        case "toString":
        case "valueOf":
          result = () => "";
          break;
        case "length":
          result = 0;
          break;
        // Array methods that CALL callbacks to execute loop body code
        case "map":
          result = (fn: any) => {
            try {
              return [fn(createDeepMock(), 0, [])];
            } catch (_e) {
              return [];
            }
          };
          break;
        case "filter":
          result = (fn: any) => {
            try {
              fn(createDeepMock(), 0, []);
            } catch (_e) {
              /* ok */
            }
            return [];
          };
          break;
        case "forEach":
          result = (fn: any) => {
            try {
              fn(createDeepMock(), 0, []);
            } catch (_e) {
              /* ok */
            }
          };
          break;
        case "reduce":
          result = (fn: any, init: any) => {
            try {
              return fn(init ?? createDeepMock(), createDeepMock(), 0, []);
            } catch (_e) {
              return init ?? createDeepMock();
            }
          };
          break;
        case "find":
          result = (fn: any) => {
            try {
              fn(createDeepMock(), 0, []);
            } catch (_e) {
              /* ok */
            }
            return undefined;
          };
          break;
        case "some":
          result = (fn: any) => {
            try {
              fn(createDeepMock(), 0, []);
            } catch (_e) {
              /* ok */
            }
            return false;
          };
          break;
        case "every":
          result = (fn: any) => {
            try {
              fn(createDeepMock(), 0, []);
            } catch (_e) {
              /* ok */
            }
            return true;
          };
          break;
        case "flatMap":
          result = (fn: any) => {
            try {
              const r = fn(createDeepMock(), 0, []);
              return Array.isArray(r) ? r : [r];
            } catch (_e) {
              return [];
            }
          };
          break;
        case "flat":
        case "slice":
        case "concat":
        case "splice":
        case "reverse":
        case "sort":
          result = () => [];
          break;
        case "includes":
          result = () => false;
          break;
        case "indexOf":
          result = () => -1;
          break;
        case "join":
          result = () => "";
          break;
        case "push":
        case "unshift":
          result = () => 1;
          break;
        case "pop":
        case "shift":
          result = () => createDeepMock();
          break;
        case "entries":
        case "keys":
        case "values":
          result = function* () {
            yield createDeepMock();
          };
          break;
        case "$$typeof":
          result = undefined;
          break;
        case "hasOwnProperty":
          result = () => false;
          break;
        default:
          if (typeof prop === "string") {
            // Event handlers
            if (prop.startsWith("on") && prop.length > 2 && prop[2] >= "A") {
              result = (..._args: unknown[]) => undefined;
            }
            // Boolean-like props
            else if (
              prop.startsWith("is") ||
              prop.startsWith("has") ||
              prop.startsWith("can") ||
              prop.startsWith("show") ||
              prop === "loading" ||
              prop === "disabled" ||
              prop === "open" ||
              prop === "checked"
            ) {
              result = false;
            }
            // ID-like props
            else if (prop === "id" || prop.endsWith("Id")) {
              result = "mock-id";
            }
            // Name-like props
            else if (
              prop === "name" ||
              prop === "title" ||
              prop === "label" ||
              prop === "description" ||
              prop === "slug"
            ) {
              result = "mock-value";
            }
            // Amount/number-like props
            else if (
              prop === "amount" ||
              prop === "quantity" ||
              prop === "count" ||
              prop === "total" ||
              prop === "price" ||
              prop === "index"
            ) {
              result = 0;
            }
            // Currency
            else if (prop === "currency") {
              result = "USD";
            }
            // Code
            else if (prop === "code") {
              result = "TEST";
            }
            // Errors
            else if (prop === "errors") {
              result = [];
            }
            // Nested proxy for everything else
            else {
              result = createDeepMock();
            }
          } else {
            result = createDeepMock();
          }
      }

      cache.set(prop, result);
      return result;
    },
    set(_target: any, prop: string | symbol, value: unknown): boolean {
      cache.set(prop, value);
      return true;
    },
    has(): boolean {
      return true;
    },
    apply(): unknown {
      return createDeepMock();
    },
    ownKeys(): (string | symbol)[] {
      return [];
    },
    getOwnPropertyDescriptor(): PropertyDescriptor | undefined {
      return { configurable: true, enumerable: true, value: undefined };
    },
  };

  return new Proxy(
    Object.assign(() => createDeepMock(), {}),
    handler,
  );
}

/**
 * Creates a mock intl object for react-intl.
 */
export function createMockIntl(): any {
  return {
    formatMessage: (msg: any, ..._args: unknown[]) => msg?.defaultMessage || msg?.id || "",
    formatNumber: (n: any) => String(n),
    formatDate: (d: any) => String(d),
    formatTime: (t: any) => String(t),
    formatPlural: () => "other",
    locale: "en",
  };
}
