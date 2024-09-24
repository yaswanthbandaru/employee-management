import { makeExtendSchemaPlugin, gql, gql as gqlExtend } from "graphile-utils"
import { EmployeeResolver } from "../graphql/EmployeeResolver"
import { EmployeeSchema } from "../graphql/EmployeeSchema"

export const EmployeePlugin = makeExtendSchemaPlugin((build) => ({
    typeDefs: EmployeeSchema,
    resolvers: EmployeeResolver,
}))

