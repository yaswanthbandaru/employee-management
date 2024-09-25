const { gql } = require('graphile-utils')

export const EmployeeSchema = gql`
    extend type Mutation {
        # addEmployee(
            # name: String
            # department: String
            # salary: BigFloat
            # email: String
            # phoneNumber: String
            # organizationId: Int
            # numberOfEmployees: Int
        # ): Employee
        addEmployee : Employee
    }
`
