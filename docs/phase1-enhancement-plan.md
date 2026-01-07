# Phase 1: Foundation & Planning - Saleor E-commerce Platform Enhancement

This document provides a comprehensive analysis of the current state of the Saleor e-commerce platform across all 4 repositories, identifying outdated packages, security vulnerabilities, and planning for gradual rollout of enhancements.

## Executive Summary

The Saleor platform consists of 4 interconnected repositories:

1. **bnob-git/extreme-devin-demo-demo-api** - Core GraphQL API (Python/Django backend) - v3.23.0-a.0
2. **bnob-git/extreme-devin-demo-demo-dashboard** - React-based admin interface - v3.22.23
3. **bnob-git/extreme-devin-demo-demo-design-system** - UI component library (@saleor/macaw-ui) - v1.4.1
4. **bnob-git/extreme-devin-demo-demo-platform** - Docker Compose development environment

## Current Dependency Versions

### API Repository (Python/Django)

| Category   | Package           | Current Version | Notes              |
| ---------- | ----------------- | --------------- | ------------------ |
| Framework  | Django            | ~5.2.8          | Latest LTS         |
| Python     | Python            | >=3.12,<3.13    | Current stable     |
| GraphQL    | graphene          | <3.0            | Legacy version     |
| GraphQL    | graphql-core      | >=2.3.2,<3      | Legacy version     |
| Database   | psycopg           | >=3.2.9,<4      | PostgreSQL adapter |
| Cache      | redis             | >=5.0.1,<6      | Redis client       |
| Task Queue | celery            | >=4.4.5,<6.0.0  | Background tasks   |
| API Server | uvicorn           | >=0.32.0,<0.33  | ASGI server        |
| Telemetry  | opentelemetry-api | >=1.32.1,<2     | Observability      |
| Validation | pydantic          | >=2.11.0,<3     | Data validation    |

**Key Observations:**

- GraphQL stack (graphene, graphql-core, graphql-relay) is on legacy v2.x versions
- Django 5.2.x is current and well-maintained
- Python 3.12 is the latest stable version

### Dashboard Repository (React/TypeScript)

| Category       | Package                    | Current Version | Latest Version | Priority |
| -------------- | -------------------------- | --------------- | -------------- | -------- |
| GraphQL Client | @apollo/client             | 3.4.17          | 4.0.11         | HIGH     |
| UI Framework   | @material-ui/core          | 4.12.4          | Deprecated     | HIGH     |
| UI Framework   | @material-ui/lab           | 4.0.0-alpha.61  | Deprecated     | HIGH     |
| UI Framework   | @material-ui/styles        | 4.11.5          | Deprecated     | HIGH     |
| Data Grid      | @glideapps/glide-data-grid | 5.3.0           | 6.0.3          | MEDIUM   |
| Code Gen       | @graphql-codegen/cli       | 2.16.5          | 6.1.0          | MEDIUM   |
| Monitoring     | @sentry/react              | 8.55.0          | 10.32.1        | MEDIUM   |
| Forms          | @hookform/resolvers        | 3.10.0          | 5.2.2          | LOW      |
| State          | jotai                      | 2.14.0          | 2.16.1         | LOW      |
| GraphQL        | graphql                    | 16.11.0         | 16.12.0        | LOW      |
| TypeScript     | typescript                 | 5.8.3           | 5.9.3          | LOW      |

**Critical Issues:**

- Material-UI v4 is deprecated - migration to MUI v5/v6 or full adoption of macaw-ui required
- Apollo Client 3.x is significantly behind v4.x with breaking changes
- GraphQL Codegen v2.x is very outdated (v6.x available)

### Design System Repository (@saleor/macaw-ui)

| Category      | Package                       | Current Version | Latest Version | Priority |
| ------------- | ----------------------------- | --------------- | -------------- | -------- |
| UI Primitives | @radix-ui/react-accordion     | 1.1.2           | 1.2.12         | MEDIUM   |
| UI Primitives | @radix-ui/react-checkbox      | 1.0.4           | 1.3.3          | MEDIUM   |
| UI Primitives | @radix-ui/react-dialog        | 1.0.4           | 1.1.15         | MEDIUM   |
| UI Primitives | @radix-ui/react-dropdown-menu | 2.0.5           | 2.1.16         | MEDIUM   |
| UI Primitives | @radix-ui/react-popover       | 1.0.6           | 1.1.15         | MEDIUM   |
| UI Primitives | @radix-ui/react-radio-group   | 1.1.3           | 1.3.8          | MEDIUM   |
| UI Primitives | @radix-ui/react-tooltip       | 1.0.6           | 1.2.8          | MEDIUM   |
| Positioning   | @floating-ui/react-dom        | 2.0.2           | 2.1.6          | LOW      |
| Dropdown      | downshift                     | 9.0.8           | 9.0.13         | LOW      |
| Styling       | @vanilla-extract/css          | 1.17.5          | 1.18.0         | LOW      |
| Build         | vite                          | 5.0.0           | 6.x            | MEDIUM   |
| Testing       | @storybook/\*                 | 8.0.5           | 10.1.11        | LOW      |
| TypeScript    | typescript                    | 5.1.6           | 5.9.3          | LOW      |
| ESLint        | eslint                        | 8.56.0          | 9.39.2         | MEDIUM   |

**Key Observations:**

- Radix UI components are 1-2 major versions behind
- Storybook has a major version upgrade available (8.x -> 10.x)
- ESLint 9.x migration required (flat config)
- Icon migration to lucide-react is in progress (Phase 1 complete)

### Platform Repository (Docker Compose)

| Service   | Current Image                          | Notes            |
| --------- | -------------------------------------- | ---------------- |
| API       | ghcr.io/saleor/saleor:3.22             | Saleor Core      |
| Dashboard | ghcr.io/saleor/saleor-dashboard:latest | Admin UI         |
| Database  | library/postgres:15-alpine             | PostgreSQL 15    |
| Cache     | valkey/valkey:8.1-alpine               | Redis-compatible |
| Tracing   | jaegertracing/jaeger                   | APM              |
| Email     | axllent/mailpit                        | Email testing    |

## Security Vulnerabilities

### Dashboard Repository

| Severity | Package                 | Vulnerability                                   | Patched Version |
| -------- | ----------------------- | ----------------------------------------------- | --------------- |
| HIGH     | qs                      | DoS via memory exhaustion (GHSA-6rw7-vpxm-498p) | >=6.14.1        |
| HIGH     | preact (via posthog-js) | JSON VNode Injection (GHSA-36hm-qxxp-pg3m)      | >=10.28.2       |

**Remediation:**

- Update `qs` from 6.14.0 to 6.14.1
- Update `posthog-js` to get patched preact dependency

### Design System Repository

| Severity | Package                | Vulnerability                                      | Patched Version    |
| -------- | ---------------------- | -------------------------------------------------- | ------------------ |
| HIGH     | ip (via storybook)     | SSRF improper categorization (GHSA-2p57-rm9w-gvfp) | No patch available |
| HIGH     | cross-spawn            | ReDoS (GHSA-3xgq-45jj-v275)                        | >=6.0.6 / >=7.0.5  |
| HIGH     | tar-fs (via storybook) | Symlink validation bypass (GHSA-vj76-c3g6-qr5v)    | >=2.1.4            |
| HIGH     | glob                   | Command injection (GHSA-...)                       | >=10.5.0           |

**Remediation:**

- Upgrade Storybook from 8.0.5 to latest (resolves ip, tar-fs, glob vulnerabilities)
- Upgrade @changesets/cli to resolve cross-spawn vulnerability

## GraphQL Schema Analysis

### Schema Files

The dashboard maintains dual GraphQL schemas for staged rollout:

| File                   | Purpose                             | Lines  |
| ---------------------- | ----------------------------------- | ------ |
| schema-main.graphql    | Production schema (Saleor 3.22)     | 35,298 |
| schema-staging.graphql | Staging schema (Saleor main branch) | 35,215 |
| schema.graphql         | Symlink to schema-main.graphql      | -      |

### Generated TypeScript Files

| File                                   | Purpose                              |
| -------------------------------------- | ------------------------------------ |
| src/graphql/types.generated.ts         | TypeScript types from main schema    |
| src/graphql/typesStaging.generated.ts  | TypeScript types from staging schema |
| src/graphql/hooks.generated.ts         | Apollo hooks from main schema        |
| src/graphql/hooksStaging.generated.ts  | Apollo hooks from staging schema     |
| src/graphql/fragmentTypes.generated.ts | Fragment types for Apollo cache      |
| src/graphql/typePolicies.generated.ts  | Apollo cache type policies           |

### Schema Differences

The staging schema (35,215 lines) is slightly smaller than the main schema (35,298 lines), indicating some deprecated fields may have been removed in the staging version. Key areas to monitor:

1. **Query/Mutation signatures** - Check for parameter changes
2. **Type definitions** - Watch for field additions/removals
3. **Enum values** - Monitor for new/deprecated values
4. **Deprecation notices** - Track deprecated fields for removal

## Feature Flag Patterns

### FF_USE_STAGING_SCHEMA

The dashboard implements a feature flag system for gradual schema rollout:

**Configuration:**

```env
# .env.template
FF_USE_STAGING_SCHEMA=false
```

**Implementation:**

```typescript
// src/graphql/schemaVersion.ts
export function getSchemaVersion(): "main" | "staging" {
  return FLAGS["FF_USE_STAGING_SCHEMA"] === "true" ? "staging" : "main";
}

export function isStagingSchema(): boolean {
  return getSchemaVersion() === "staging";
}

export function isMainSchema(): boolean {
  return getSchemaVersion() === "main";
}
```

**Usage Pattern:**

```typescript
// Conditional hook selection
import { useProductListQuery } from "@dashboard/graphql";
import { useProductListQuery as useProductListQueryStaging } from "@dashboard/graphql/staging";

function ProductList() {
  const { data: dataMain } = useProductListQuery({ skip: isStagingSchema() });
  const { data: dataStaging } = useProductListQueryStaging({ skip: isMainSchema() });
  const data = dataStaging ?? dataMain;
}
```

### Application Feature Flags

The dashboard also supports runtime feature flags:

**Configuration:**

```typescript
// .featureFlags/generated.tsx
export const AVAILABLE_FLAGS = [
  {
    name: "new_order_ui",
    displayName: "New Order UI",
    visible: false,
    content: {
      enabled: false,
      payload: "default",
    },
  },
] as const;
```

**Flag Definition Format:**

```markdown
## // .featureFlags/new_order_ui.md

name: new_order_ui
displayName: New Order UI
enabled: false
payload: "default"
visible: false

---

Enable brand-new UI for the Order Details page.
```

## Phased Enhancement Recommendations

### Phase 2: Backend Implementation (Weeks 3-5)

**Priority 1 - Security Fixes:**

1. Update `qs` to >=6.14.1 in dashboard
2. Update `posthog-js` to latest version
3. Upgrade Storybook in design-system to resolve vulnerabilities

**Priority 2 - API Upgrades:**

1. Evaluate GraphQL stack upgrade path (graphene 2.x -> 3.x)
2. Update OpenTelemetry packages to latest
3. Review and update payment gateway integrations

### Phase 3: Frontend Integration (Weeks 6-8)

**Priority 1 - Critical Upgrades:**

1. Plan Material-UI v4 -> macaw-ui migration strategy
2. Upgrade Apollo Client 3.x -> 4.x (breaking changes)
3. Upgrade GraphQL Codegen 2.x -> 6.x

**Priority 2 - Design System:**

1. Upgrade all Radix UI components to latest versions
2. Complete lucide-react icon migration (Phase 2)
3. Upgrade Storybook 8.x -> 10.x

**Priority 3 - Build Tooling:**

1. Migrate ESLint to v9 flat config
2. Upgrade TypeScript to 5.9.x
3. Upgrade Vite to 6.x in design-system

### Phase 4: Gradual Rollout (Weeks 9-10)

1. Deploy staging schema changes using FF_USE_STAGING_SCHEMA
2. Enable new features incrementally using feature flags
3. Monitor for regressions and performance issues
4. Collect feedback from staging environment

### Phase 5: Monitoring & Cleanup (Week 11)

1. Remove deprecated Material-UI components
2. Clean up feature flags for stable features
3. Update documentation
4. Performance benchmarking

## Test Coverage Improvements

### Current State

The repositories have varying levels of test coverage:

| Repository    | Test Framework    | Coverage Status          |
| ------------- | ----------------- | ------------------------ |
| API           | pytest            | Comprehensive unit tests |
| Dashboard     | Jest + Playwright | Unit + E2E tests         |
| Design System | Vitest            | Component tests          |

### Recommended Improvements

1. **API Repository:**
   - Add integration tests for new GraphQL mutations
   - Increase coverage for payment gateway integrations
   - Add performance regression tests

2. **Dashboard Repository:**
   - Expand E2E test coverage for critical user flows
   - Add visual regression tests with Chromatic
   - Improve unit test coverage for complex components

3. **Design System Repository:**
   - Add accessibility tests for all components
   - Expand Storybook interaction tests
   - Add visual regression tests

## Changelog Patterns

### Dashboard Changelog Format

```markdown
## 3.22.23

### Patch Changes

- [#6227](https://github.com/saleor/saleor-dashboard/pull/6227) [`2db65da`](commit) Thanks [@author]! - Description of change
```

### Design System Changelog Format

```markdown
## 1.4.1

### Patch Changes

- 54c2363: Description of change
```

## Next Steps

1. **Immediate Actions:**
   - Apply security patches for HIGH severity vulnerabilities
   - Update `qs` package in dashboard
   - Upgrade Storybook in design-system

2. **Short-term (1-2 weeks):**
   - Create detailed migration plan for Material-UI -> macaw-ui
   - Evaluate Apollo Client 4.x migration path
   - Plan GraphQL Codegen upgrade

3. **Medium-term (3-4 weeks):**
   - Begin Phase 2 backend implementation
   - Start frontend dependency upgrades
   - Implement additional test coverage

## References

- [Multi-Schema Support Documentation](./multi-schema.md)
- [Dashboard CHANGELOG](../CHANGELOG.md)
- [Design System CHANGELOG](../../extreme-devin-demo-demo-design-system/CHANGELOG.md)
- [API pyproject.toml](../../extreme-devin-demo-demo-api/pyproject.toml)
