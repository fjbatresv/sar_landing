---
title: Frontend
description: How the Angular application groups store workflows, routes, access, and reporting.
---

# Frontend

The browser application is built with Angular 19 in an Nx workspace.

It presents store work through domain-oriented feature folders.

Tailwind utility classes and Angular Material provide common interface building blocks.

The application uses Barlow typography and the Material icon families.

The shell includes store context, work date, company context, navigation, and user actions.

## Feature folders

`home` contains the operational dashboard.

`inventory` contains counts, movements, purchases, transfers, waste, and close screens.

`sales` contains registers, reconciliation, cash control, fiscal documents, and events.

`reports` contains sales projections, reporting views, and history screens.

`employees` supports employee lists and employee details.

`admin` contains product, supplier, store, currency, and access administration.

`events` groups event scheduling and event detail routes.

`shared` contains reusable controls, data tables, filters, and access helpers.

The feature folders keep domain-specific components near their routes and services.

## Lazy routes

The application route table loads larger features on demand.

Admin routes contain child routes for the management screens.

Inventory routes separate count and purchase workflows.

Sales routes group cash, point-of-sale, event, and close workflows.

Reports routes load projection and history views.

Employee and event routes use standalone Angular components.

Lazy loading keeps unrelated feature code out of the initial route bundle.

Route guards and permission directives control access to protected areas.

Some actions ask for an operational PIN before continuing.

## Store and date context

Shared services hold the selected company, store, work date, and store time zone.

Feature services subscribe to the context they need.

Changing stores reloads data for the selected location.

Work-date changes refresh daily screens and their summaries.

Store identifiers are sent to APIs that scope requests by location.

Services keep request construction close to the owning feature.

## Translation and language

The interface supports English and Spanish.

Angular uses translation keys for labels, validation, and status messages.

Translation bundles are loaded from a platform API backed by S3.

The bundle contains about 2,200 keys per language.

The interface requests the current language when the user changes the locale.

The delivery path allows text updates without rebuilding every backend service.

The case-study screenshots use fictional English interface content.

## Loading and errors

An HTTP loading interceptor connects request activity with the shared loading service.

The shell can show progress while an API request is pending.

Feature screens show inline empty states when there is no data to display.

Request errors can produce localized notifications.

Data tables support pagination, sorting, filtering, and selected row actions.

Long-running tasks can return a state that the user can check later.

## Monitoring and reporting

Sentry captures frontend errors and release context.

The dashboard combines charts with summary values for a selected work date.

Superset is embedded for operational analytics that benefit from interactive filters.

The embed uses a guest token and row-level security.

The application keeps transactional entry screens separate from analytics views.

## Frontend contribution

The frontend was the largest area of Javier’s contribution.

His work touched roughly 835 files across operational features and shared patterns.

The team maintained route, permission, translation, and API behavior as one product.

The visual system uses navy, indigo, pale gray, rounded panels, and Material Symbols.

That shared visual language is carried into the public architecture case study.
