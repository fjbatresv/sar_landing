---
title: Product areas
description: The store workflows connected by the restaurant operations platform.
---

# Product areas

The platform covers the daily work of a restaurant location, from stock and register opening to cash close, reporting, and next-day planning.

The product is organized around store routines rather than a single inventory screen.

The Angular application gives store teams one operational workspace.

Java services hold longer-running transactional domains and shared records.

Lambda functions handle focused API and event work alongside the Java services.

## Inventory and purchasing

Inventory begins with daily counts and carries through to an auditable close.

Teams track stock movements and compare counted units with expected stock.

Transfers record requests and movement between stores.

Waste records explain stock that cannot be sold or used.

Purchase orders connect supplier deliveries with expected items and quantities.

Delivery differences remain visible for follow-up.

Recipe components support planning for food production.

The inventory service owns daily tracking, movements, and close data.

Purchase records live in a domain service that the inventory service can call through Feign.

A scheduled Lambda coordinates the background inventory close.

## Cash and sales

Cash workflows start with register opening and continue through cash counts and close.

The platform supports cash audit, reconciliation, safe control, and deposit collection.

Cash reconciliation compares expected values with the values entered by the store.

Collection records can generate PDFs for the handoff and later review.

Sales views expose point-of-sale and consolidated results.

Projection screens include period history and review status.

The projection workflow supports approval and rejection.

Company currencies and exchange rates support operations across more than one currency.

Exchange-rate changes can be initiated through events.

Fiscal documents can be queried by store.

## Customers and events

Event planning connects a customer request with a venue, schedule, contract, and status.

The agenda groups events by location and date range.

Venue availability is checked for a requested start and end time.

Conflict detection helps prevent overlapping reservations.

Customer search supports the event creation workflow.

Events move through pre-reserved, reserved, in-progress, completed, or cancelled statuses.

An event Lambda exposes the event API and responds to status events.

Delivery orders are connected through an integration service that uses Feign.

## Administration, reporting, and security

Administration manages restaurants, products, articles, suppliers, and employee records.

Task tracking provides store-level follow-up for operational work.

The task tracker and PIN tracker connect staff actions with the store routine.

Role permissions gate views and actions in the Angular application.

Superset dashboards are embedded in reporting workflows.

Guest tokens and row-level security limit dashboard access to an authorized user’s data.

Fiscal document lookup and employee records are accessed through domain services.

The authentication system supports email MFA, refresh tokens, and operational PIN checks.

Machine clients use OAuth2 scopes for service-to-service access.

## Shared platform capabilities

Email notifications use templates in English and Spanish.

Translation bundles are stored in S3 and served through a Lambda API.

The translation store contains about 2,200 keys per language.

CloudWatch APIs accept application events and metrics.

Generic DynamoDB and SQS APIs provide platform-level access to those services.

Structured logging is shared by the TypeScript services.

These platform APIs keep common concerns out of individual store screens.

## Product boundaries

Inventory and purchasing coordinate through service calls rather than sharing one deployment.

Cash workflows use separate application screens and income service records.

Sales projections and state transitions are separate services with a defined approval path.

Event creation is an API workflow with its own status events.

Reports embed an analytics surface rather than reimplement every chart in Angular.

The platform is designed for store teams, supervisors, and administrators with different access.

The product spans operational records, background processing, and reporting without assuming every task is synchronous.

## Reading the interface

Dashboard screens summarize sales and store activity.

Inventory tables support count entry and difference review.

Cash screens connect a register, employee, reconciliation, and deposit.

Event screens show venue availability on a weekly calendar.

Projection pages expose forecasts and their review history.

Administration screens maintain the data used by operational modules.

The interface is available in English and Spanish.
