---
title: Identity and security
description: How user authentication, permissions, machine access, and analytics scope fit together.
---

# Identity and security

The platform combines user authentication, request authorization, role permissions, and data scoping.

These controls serve both store staff and service-to-service clients.

The Angular application does not decide access by hiding a button alone.

The API layer also checks the caller before forwarding a protected request.

## User sign-in

Cognito handles the user pool and the initial sign-in flow.

Authentication uses an email-based multi-factor verification step.

The user receives a token after the required checks succeed.

Refresh-token handling allows the application to renew an authorized session.

The authentication service contains handlers for login, logout, token refresh, and account flows.

Cognito triggers support signup and account lifecycle operations.

Email messages are sent through queued work so the login request does not wait on the mail provider.

The queue allows delivery to be retried independently of the browser request.

The interface also asks for an operational PIN for protected store actions.

The PIN is checked by the platform before the action proceeds.

## Request authorization

API Gateway uses a custom authorizer for protected routes.

The authorizer checks the token and returns an authorization decision to the gateway.

The gateway routes an approved call to a Lambda or to the private service path.

The container path uses VPC Link to reach the internal load balancer.

The API boundary separates public request handling from private Java services.

The browser sends an authenticated request through this boundary.

The domain service still validates business rules for its operation.

The authorizer does not replace domain validation or application permissions.

## Roles and permissions

The Angular application evaluates permissions for navigation and actions.

Permissions distinguish viewing, creating, editing, and closing operational records.

The permission service uses the current user context and location scope.

Store and company identifiers are part of the request context for many workflows.

The service receiving the request remains responsible for applying that context to its data query.

PIN checks add a second confirmation for sensitive store actions.

The exact screen permissions vary by module and action.

The site does not publish internal permission codes or customer-specific role names.

## Machine clients

The platform has a separate OAuth2 service for machine-to-machine clients.

Registered clients receive access according to configured scopes.

Scopes keep machine access narrower than unrestricted user access.

The OAuth2 service is separate from the Cognito user login flow.

Integrations can request tokens without impersonating a store employee.

Service calls between Java domains use Feign clients and configured internal endpoints.

Feign error handling translates remote failures into service-level errors.

## Analytics access

Superset dashboards are embedded with guest tokens.

Row-level security limits the rows visible to the authorized user.

The dashboard token is scoped for the embed rather than used as a general API credential.

The embedded dashboard complements the application’s transactional screens.

Operational values remain governed by the owning service’s access rules.

## Events and background tasks

Queues decouple message delivery from the request that created the work.

EventBridge starts scheduled tasks and reacts to events.

The receiving Lambda processes each message through its configured handler.

Retries and asynchronous delivery mean that users may see a result after the initiating request completes.

That timing is part of the operational flow and should be visible in the interface.

## Security boundaries

CloudFront serves the static Angular application.

API Gateway is the public application entry point.

The VPC Link and load balancer route traffic to private container services.

Lambda functions receive only the permissions needed for their configured integrations.

Relational records are stored in RDS MySQL.

Generic platform records can use DynamoDB.

Generated reports and translation bundles use S3 storage.

The public architecture notes intentionally omit account identifiers, resource ARNs, and private endpoints.

They describe service responsibilities without exposing configuration values.

## Operational considerations

Email MFA can be delayed by queue or provider availability.

Token refresh failures require the application to return the user to sign-in.

Role changes must be reflected in the permission context used by the application.

Machine client scope changes need review alongside their integration contract.

Row-level rules should be tested for each dashboard access path.

Authorization behavior belongs in both the API boundary and the domain service.

This layered model makes identity, permissions, and data access separate concerns.
