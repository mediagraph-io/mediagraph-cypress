# Mediagraph Cypress Health Check

[![Production Health Check](https://github.com/mediagraph-io/mediagraph-cypress/actions/workflows/cypress.yml/badge.svg)](https://github.com/mediagraph-io/mediagraph-cypress/actions/workflows/cypress.yml)

To trigger:

```bash
curl -XPOST https://api.github.com/repos/mediagraph-io/mediagraph-cypress/dispatches -H 'authorization: Bearer <personal-access-token-with-repo-scope>' -d '{"event_type":"Run Production Health Check"}'
```

* Use Fine-Grained Access Token with "Contents" read/write, and "Metadata" read.
