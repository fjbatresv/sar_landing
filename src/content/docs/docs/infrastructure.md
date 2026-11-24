---
title: Infrastructure
description: How Terraform provisions container services, private API access, data stores, and edge delivery across stages.
---

## Infrastructure as code

Terraform manages container registries and ECS services, load balancing, API Gateway with a private VPC Link, edge delivery, relational data, secrets, hosted zones, and operational access. The same patterns are applied to development, QA, UAT, and master stages.

```mermaid
flowchart TB
  Internet --> Edge[CloudFront]
  Edge --> Web[Static web assets]
  Edge --> Gateway[API Gateway]
  Gateway --> Link[Private VPC Link]
  Link --> ALB[Application load balancer]
  ALB --> ECS[ECS Fargate services]
  ECS --> DB[(RDS MySQL)]
```

Private integration reduces direct exposure of service endpoints and requires deliberate routing, security group, and stage configuration.
