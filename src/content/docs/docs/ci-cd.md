---
title: CI/CD
description: Ordered build and deployment workflows coordinate application and infrastructure releases.
---

## Delivery order

GitHub Actions builds shared Lambda layers first, followed by internal and external serverless services, Java container images, and finally the frontend assets delivered through object storage and a CDN. This order keeps shared runtime dependencies available before consumers deploy.

Releases use tags in the `uat-vX.Y.Z` format. Husky runs local checks, commits follow the repository's gitmoji convention, and SonarQube contributes static analysis.

```mermaid
flowchart LR
  Layers --> Internal[Internal functions] --> External[External functions] --> Java[Java containers] --> Web[Frontend assets] --> CDN[CDN invalidation]
```
