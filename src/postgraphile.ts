import { EmployeePlugin } from "./plugins/EmployeePlugin";
import { buildSchema } from "graphile-build";
const { postgraphile } = require('postgraphile');

module.exports = postgraphile(
    "postgres://postgres:avatar007@localhost:5432/",
    "app_emp",
    {
        watchPg: true,
        graphiql: true,
        enhanceGraphiql: true,
        dynamicJson: true,
        // disableDefaultMutations: true,
        appendPlugins: [EmployeePlugin],
        exportGqlSchemaPath: './src/generated/schema.graphql',
    }
)
