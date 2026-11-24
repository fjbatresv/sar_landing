---
title: Local development
description: How Docker Compose provides local database, identity, event, analytics, and cloud service emulators.
---

## Local services

Docker Compose starts MySQL, a local identity provider, LocalStack, ElasticMQ, and Superset. Developers can run the Angular application and backend services against these local dependencies.

```mermaid
flowchart LR
  Frontend[Angular app] --> Services[Java services]
  Services --> MySQL[(MySQL)]
  Services --> LocalStack[LocalStack]
  LocalStack --> MQ[ElasticMQ]
  Frontend --> BI[Superset]
```

Local credentials and customer data are not part of this documentation. Use the team's approved setup instructions for any project-specific configuration.
