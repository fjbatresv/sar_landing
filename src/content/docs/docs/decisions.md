---
title: Architecture decisions
description: Short records of platform choices, their context, and their operational trade-offs.
---

# Architecture decisions

These brief records connect the architecture to the work it supports.

Each choice has a cost as well as a benefit.

They summarize the design visible in the codebase without copying implementation details.

## ADR 1: Java for transactional domains

**Context:** Inventory, cash, purchasing, and identity depend on durable domain records.

**Decision:** Use Spring services that deploy independently on ECS Fargate.

**Consequence:** Domain ownership is explicit, while the service fleet takes more effort to configure and release.

## ADR 2: Lambda for focused event work

**Context:** Some tasks start from schedules, queues, or business events rather than user requests.

**Decision:** Use TypeScript Lambda handlers for focused event and platform tasks.

**Consequence:** Managed triggers simplify the runtime, while tracing crosses more service boundaries.

## ADR 3: A shared Lambda foundation

**Context:** Functions repeat database, dependency-injection, logging, and response patterns.

**Decision:** Share TypeScript libraries and dependency layers across functions.

**Consequence:** Common behavior stays consistent, while layer releases need coordination with their consumers.

## ADR 4: Private routing to container services

**Context:** Public API calls need to reach Java services inside the application network.

**Decision:** Connect API Gateway through VPC Link to the private load balancer.

**Consequence:** The service path is not a public container endpoint, while networking needs more configuration.

## ADR 5: Terraform stages

**Context:** Development, QA, UAT, and master need repeatable infrastructure.

**Decision:** Reuse Terraform modules across four stage configurations.

**Consequence:** Infrastructure changes are reviewable, while state and variables must remain stage-specific.

## ADR 6: Nx polyglot monorepo

**Context:** Angular, TypeScript services, Java services, and infrastructure change together.

**Decision:** Keep projects in an Nx workspace with shared commands and generators.

**Consequence:** Cross-stack work has a common developer workflow, while project boundaries need ongoing care.

## ADR 7: Superset for embedded reporting

**Context:** Store leaders need filtered dashboards without a custom implementation for every report.

**Decision:** Embed Superset views with guest tokens and row-level security.

**Consequence:** Reporting ships with a broad analytics feature set, while the analytics service remains an operational dependency.

## ADR 8: Spring State Machine for projection approvals

**Context:** A projection review has explicit approved and rejected outcomes.

**Decision:** Model approval and rejection transitions in Spring State Machine.

**Consequence:** Allowed transitions are explicit, while state rules need updates as the review policy changes.

## ADR 9: OAuth2 for machine clients

**Context:** Integrations need service-to-service access with narrower scopes than a user session.

**Decision:** Use a dedicated OAuth2 server for registered machine clients.

**Consequence:** Scopes make client access legible, while the team owns another security-sensitive service.

## ADR 10: SQS for MFA email delivery

**Context:** Authentication should not wait on a synchronous email-provider response.

**Decision:** Put MFA delivery behind a queue and process it asynchronously.

**Consequence:** Provider delays are decoupled from the login request, while delivery can be delayed and retried.

## ADR 11: Translation bundles in S3

**Context:** Interface text can change more frequently than application code.

**Decision:** Store bundles in S3 and serve them through a Lambda API.

**Consequence:** Copy can change without a full application redeploy, while the app must handle loading and versioning.

## ADR 12: Nx generators for new services

**Context:** New serverless projects need a common layout and build configuration.

**Decision:** Generate service structure from workspace templates.

**Consequence:** Teams start from a consistent baseline, while generator templates must track current conventions.

## ADR 13: Deploy in dependency order

**Context:** Application services depend on layers and supporting APIs.

**Decision:** Release layers, serverless APIs, Java services, and frontend in sequence.

**Consequence:** Dependencies are ready before their consumers, while a complete release takes longer than an isolated deploy.

## Revisiting these choices

The deployment boundary is a useful place to review the service split.

Message retry behavior should be reviewed with the queue consumer.

Permission changes should be reviewed with API and dashboard scopes.

The monorepo remains useful while its ownership and project boundaries are clear.

The goal is a system that store teams can operate and developers can change safely.
