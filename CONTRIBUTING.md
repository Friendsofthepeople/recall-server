# How to Contribute to the project

- The project is developed using a monorepo structure with yarn workspaces and Nx.
- It is comprised of the following packages:
  - common (Shared code like loggers, utils, middlewares, etc.)
  - core (Shared code like configurations, constants, dependency injection etc.)
  - data (Shared code like database configuration, caching confiuration etc.)
  - recall-api (Express Server)
  - eslint-config (Shared ESLint configuration)
  - jest-config (Shared Jest configuration)

### Recall API
- This is the main package that contains the Express server.
- To add a module, create a new folder in the `packages/recall-api/src/modules/` directory.
- You can copy the `packages/recall-api/src/modules/example/` folder and rename it to your module name.
