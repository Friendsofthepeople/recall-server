# Recall Server
A Node server for managing the verification of constituents, publishing of representative information, and signing to recall them.

### About Repo
- This repo hosts the open-source server powering Public Gavel.
- It exposes APIs to facilitate verification and registration of constituents in a credible and secure way.

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
./dev-scripts.sh update
```

