# Recall Server
A Node server for managing the verification of constituents, publishing of representative information, and signing to recall them.

### About Repo
- This repo hosts the open-source server powering Public Gavel.
- It exposes APIs to facilitate verification and registration of constituents in a credible and secure way.

## Table of Contents
- [Recall Server](#recall-server)
    - [About Repo](#about-repo)
  - [Table of Contents](#table-of-contents)
    - [Stack](#stack)
    - [Join the Community](#join-the-community)
  - [Getting Started with Development](#getting-started-with-development)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
  - [Installing Node Modules](#installing-node-modules)
  - [Folder Structure](#folder-structure)
  - [Running Tests](#running-tests)
  - [Linting](#linting)
    - [Fixing Lint Issues](#fixing-lint-issues)
  - [Additional Libraries](#additional-libraries)
    - [Drizzle ORM](#drizzle-orm)
    - [License](#license)

### Stack
- Typescript
- Express JS
- Docker
- Docker Compose
- PostgreSQL
- JWT
- Drizzle ORM
- Jest
- Eslint
- Lerna, Nx and Yarn Workspaces


### Join the Community
- [Discord server](https://discord.gg/v6TYzfuZc8)
- [Twitter]()



## Getting Started with Development

### Prerequisites
- [Docker](https://docs.docker.com/desktop/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.JS (v20+)](https://nodejs.org/en/download/)
- [Yarn < v1.9](https://yarnpkg.com/getting-started/install)

### Setup
1. Clone the repository
- Using SSH
```bash
git clone git@github.com:Friendsofthepeople/recall-server.git
```
- Using HTTPS
```bash
git clone https://github.com/Friendsofthepeople/recall-server.git
```

1. Copy the `.env.example` file to `.env` and update the environment variables
```bash
cp .env.example .env
```

2. Install the dependencies
```bash
yarn install
```

3. Make the Development script executable
```bash
chmod +x dev-scripts.sh
```

4. Run the development script to start up the docker containers
```bash
./dev-scripts.sh
```

## Installing Node Modules
- To install node modules in a package, run the following command:
```bash
yarn add -W <package-name>
```
- To update the node_modules inside docker, run the following command:
```bash
docker compose up --build
```

## Folder Structure
- The project is a monorepo with the following structure:
```
.
├── packages
│   ├── common
│   ├── core
│   ├── data
│   ├── recall-api (Express Server)
│   ├── eslint-config
│   ├── jest-config
```

## Running Tests
- To run tests in a package, run the following command:
```bash
yarn test:watch <package-name>
```

## Linting
- To lint the code in a package, run the following command:
```bash
yarn lint <package-name>
```

### Fixing Lint Issues
- To fix lint issues in a package, run the following command:
```bash
yarn lint:fix <package-name>
```

## Additional Libraries

### Drizzle ORM
- Drizzle is a lightweight ORM for Node.js and TypeScript. It is designed to be simple and easy to use, while still providing the necessary features to work with databases.
- [Drizzle ORM](https://orm.drizzle.team/)


### License
- This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
