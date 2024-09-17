# Organization Management Project Build with TypeORM PostgreSQL

<!-- Steps to run this project: -->

<!-- 1. Run `npm i` command -->
<!-- 2. Setup database settings inside `data-source.ts` file -->
<!-- 3. Run `npm start` command -->

## Project Overview
Building a project oversee the operations done by organization to maintain projects and employees

## Technology Utilized
* Typescript
* Node Js
* PostgreSQL
* Graphql
* TypeORM 

### Migrations

* **cross-env** for running `$npm_config_var` Windows platform.

* Generating migraions using the below command

    npm run typeorm -- migration:generate -p src/migrations/$FILENAME


