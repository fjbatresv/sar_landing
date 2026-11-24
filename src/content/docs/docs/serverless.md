---
title: Serverless services
description: The TypeScript Lambda services, their handler counts, triggers, and shared runtime patterns.
---

# Serverless services

The TypeScript services use Serverless Framework to define functions and event sources.

The platform contains about 65 Lambda handlers across API, queue, schedule, and identity work.

This table describes the service manifests found in the current source snapshot.

That snapshot has 11 named service manifests plus shared layer packages.

| Service package | Approx. handlers | Main triggers | Responsibility |
| --- | ---: | --- | --- |
| `ts-cloudwatch-api` | ~2 | HTTP | Accept application metrics and events |
| `ts-dynamo-api` | ~4 | HTTP | Generic DynamoDB create, read, update, and delete operations |
| `ts-events` | ~12 | HTTP, EventBridge | Event lookup, venue checks, updates, and status handling |
| `ts-incomes` | ~16 | HTTP, EventBridge | Cash reconciliation, deposits, currency events, and safe activity |
| `ts-inventory` | ~4 | HTTP | Daily inventory and waste operations |
| `ts-inventory-closure-bg` | ~2 | Schedule, HTTP | Scheduled and manually requested inventory close work |
| `ts-notifications-api` | ~2 | HTTP | Send simple and templated email |
| `ts-sqs-api` | ~1 | HTTP | Send a message through a controlled API |
| `ts-task-tracker` | ~2 | HTTP | Read task and configuration data |
| `ts-translations` | ~2 | HTTP | Select and list translation bundles |
| `ts-userManagement` | ~20 | HTTP, SQS, Cognito | Authentication, MFA, PIN, account, and token handlers |
| Shared layers and packages | Shared | Build and layer release | Common libraries, database support, and dependencies |

The shared row is a build and dependency unit, not an additional handler app.

## Trigger types

HTTP events expose focused endpoints through API Gateway.

SQS events process queued messages outside the initiating request.

EventBridge rules start scheduled jobs and react to application events.

Cognito triggers handle selected user-pool lifecycle events.

Some apps combine HTTP functions with one or more asynchronous handlers.

The trigger is declared with the function so deployment can bind its event source.

## Shared foundation

Shared TypeScript libraries live under the serverless workspace.

The database package provides common relational access.

TypeORM describes entities and repositories.

InversifyJS supplies dependency injection for providers and repositories.

The dependency layer packages common runtime dependencies for functions.

The Serverless base configuration provides shared build and deployment settings.

The shared layer reduces repeated packaging work across Lambda apps.

Layer changes need to be released before functions that depend on the new version.

## Handler lifecycle

A handler receives the API Gateway, queue, schedule, or Cognito context.

The runtime creates the request scope for dependency injection.

Database dependencies are resolved through the shared container.

The handler passes the request to a domain provider.

The provider validates input and performs the domain operation.

The handler maps the result to the expected response shape.

HTTP responses include the configured CORS headers.

Errors are mapped to the service response format before returning to API Gateway.

Queue handlers return after processing the message or raising an error for retry.

The pattern keeps transport parsing separate from business operations.

## Inventory close

The scheduled close app is separate from the interactive inventory API.

EventBridge starts the scheduled job for the configured store work date.

The Lambda coordinates the background request to the inventory service.

An HTTP handler is also available for a controlled request path.

The store screen remains available for count entry and close review.

## Identity and MFA

The identity app serves login, logout, and token refresh endpoints.

It also contains handlers for permissions, operational PIN checks, and password workflows.

Cognito triggers support signup and account updates.

Queue consumers send email MFA and related notifications.

The API request can complete without waiting on the email provider.

Retry behavior belongs to the queue consumer and its event configuration.

## Deployment and operations

GitHub Actions deploys shared layers before dependent serverless apps.

Internal and external API packages use separate workflows.

Stages include dev, QA, UAT, and master.

Runtime configuration is supplied per stage rather than embedded in the application source.

CloudWatch records application events and service metrics.

The public case study omits account numbers, ARNs, private hostnames, and resource identifiers.

The handler and trigger summary is intended to explain service boundaries, not expose deployment configuration.
