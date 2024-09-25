import { Employee } from "../entity/Employee"
import { AppDataSource } from "../data-source"
import { checkEmailExists } from "../service/CheckEmployeeExists"
import { createEmployee } from "../service/CreateEmployeeService"


export const EmployeeResolver = {
    Mutation: {
        addEmployee: async (_, { numberOfEmployees=1  } ) => {

            const employee = createEmployee();

            const newEmployee = {
                name: employee.employee_name,
                department: employee.employee_department,
                salary: employee.employee_salary,
                email: employee.employee_email,
                phoneNumber: employee.employee_phoneNumber,
                organizationId: 1
            }

            let bool = await checkEmailExists(newEmployee.email)
            console.log("Does email exist?", bool)
            if(!bool){
                const employeeRepository = AppDataSource.getRepository(Employee)
                const employee = employeeRepository.create(newEmployee)
                await employeeRepository.save(employee)
                return employee
            }
        }
    }
}
