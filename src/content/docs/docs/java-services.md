---
title: Java services
description: The Spring services, their domain responsibilities, and their main service relationships.
---

# Java services

The platform has 14 Java services built with Spring Boot.

They expose about 150 REST endpoints across transactional and supporting domains.

The counts below are approximate route declarations and entity classes in the source.

They are not a replacement for an API contract or a deployment inventory.

The endpoint figures are indicative and should not be summed as a precise total.

| Service | Responsibility | Approx. route declarations / entities | Internal Feign callers |
| --- | --- | --- | --- |
| OAuth2 authorization | Machine-client tokens and scopes | Framework protocol endpoints / 3 entities | Registered machine clients |
| App management | Store context, currencies, exchange rates, tasks, and PIN records | ~40 / ~10 | Inventory, projections, user workflows |
| Config management | Shared application configuration | ~10 / ~2 | User management service |
| Recipe production | Recipes and production planning | ~10 / ~4 | Angular administration |
| Incomes management | Cash, reconciliations, audits, safe control, and deposits | ~23 / ~28 | Angular cash screens and income functions |
| Inventory management | Counts, tracking, movements, transfers, and close | ~23 / ~40 | App, purchase, user, agent, and task APIs |
| Projections management | Store forecasts, history, and approval requests | ~11 / ~3 | App, state machine, user, and agent services |
| Purchase management | Supplier purchases and delivery records | ~12 / ~8 | Inventory workflows and user service |
| Quality control | Store goals by operating category | ~1 / ~3 | Angular reporting and administration |
| Agent and fiscal documents | Store document queries and supporting employee APIs | ~54 / ~51 | Inventory, user workflows, and frontend |
| Delivery integration | Delivery order integration and response mapping | ~1 / no JPA entities | Delivery provider through Feign |
| State machine | Projection approval and rejection transitions | ~3 / no JPA entities | Projections management |
| User management | User, role, employee-to-user, and access workflows | ~18 / ~16 | App, inventory, purchase, and projection services |
| User management v2 | User setup and supporting account operations | ~8 / ~13 | Config, agent, and authentication workflows |

## Domain responsibilities

Inventory management holds daily and general inventory tracking.

The inventory service also owns stock movements, waste views, and transfer workflows.

Purchase management owns supplier purchase records and delivery details.

Incomes management supports cash closure, reconciliation, deposits, and safe control.

Projection management stores projection details and review history.

The state service owns the explicit approval and rejection transitions.

App management provides store-level configuration and operational reference data.

The recipe service supports products that are assembled from ingredients.

Quality control stores operating goals by store and category.

The agent service provides fiscal document and related store queries.

User services separate user and role workflows from store business records.

## Service communication

Feign clients declare the remote calls used by a Java domain.

The client configuration supplies connection behavior and error handling.

Inventory management calls purchase services for supplier workflows.

It also calls app, user, agent, and task services for supporting data.

Projection management calls the state machine to apply review transitions.

It also uses app, user, and agent services for store and access context.

User-facing requests usually enter through API Gateway.

The gateway routes to a Lambda or through VPC Link to the private load balancer.

The load balancer sends container requests to the owning ECS service.

The caller receives a domain response rather than direct access to another service’s database.

## Persistence and entities

Most transactional services use relational entities with Spring Data repositories.

Inventory management contains about 40 entity classes.

Incomes management contains about 28 entity classes.

The agent and fiscal-document service contains about 51 entity classes.

User management uses separate entity models for users, roles, and related associations.

The OAuth2 server stores registered clients, scopes, and grants.

The state machine focuses on state transitions and does not use a separate JPA entity model in this service.

RDS MySQL is the shared relational database platform.

The public notes intentionally avoid table names and schema-specific identifiers.

## Error boundaries

Services validate input before applying a domain change.

Exceptions are translated into API responses at the service boundary.

Feign error decoders translate remote responses into application errors.

That behavior gives callers a consistent response when a downstream service fails.

The client still needs to treat a network timeout separately from a business rejection.

Service boundaries make these failure paths visible in operational logs.

## Deployment shape

Services are containerized and deployed to ECS Fargate.

The application load balancer routes requests to the service targets.

Terraform describes the cluster, task definitions, services, and network boundaries.

GitHub Actions builds and deploys the Java containers as part of the ordered release path.

The 14 services are maintained in one Nx workspace alongside the frontend and Lambda projects.

The monorepo makes cross-domain changes easier to coordinate while keeping deployments separate.
