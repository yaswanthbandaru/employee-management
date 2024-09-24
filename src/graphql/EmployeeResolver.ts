import { data } from "../data"
import { Employee } from "../entity/Employee"
import { AppDataSource } from "../data-source"
import { getEmail } from "../service/getEmail"
import { checkEmailExists } from "../service/CheckEmployeeExists"
import { error } from 'console'


export const EmployeeResolver = {
    Mutation: {
        addEmployee: async (_, { numberOfEmployees } ) => {
            let count = 0;
            const employeeData = data.data 

            employeeData.forEach((data) => {
                (data as any).isAdded = false
            })

            console.log("\nLenght of the data:", employeeData.length)

            const Data : Employee[] = []

            for(const employeeOne of employeeData) {
                const newEmployee = {
                    name: employeeOne.employee_name,
                    department: "Engineering",
                    salary: employeeOne.employee_salary,
                    email: getEmail(employeeOne.employee_name),
                    phoneNumber: "123-456-7890",
                    organizationId: 1
                }
                
                
                if ( count < numberOfEmployees) {
                    let bool = await checkEmailExists(newEmployee.email)
                    console.log("bool: ", bool, "\tcount: ", count, " ", newEmployee.name, newEmployee.email)
                    // bool = false
                    count += 1
                    const employeeRepository = AppDataSource.getRepository(Employee)
                    const employee = employeeRepository.create(newEmployee)
                    await employeeRepository.save(employee)
                    return employee
                    if( !!bool ) {
                    }

                }    
            }
        }
    }
}
