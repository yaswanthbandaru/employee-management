import * as randomMobile from 'random-mobile'
import { getEmail } from './getEmail'
import * as Chance from 'chance'

interface employee {
    employee_name: string
    employee_department: string 
    employee_email: string
    employee_salary: number
    employee_phoneNumber: string
}

export const createEmployee = () : employee => {

    var chance = new Chance()

    const name = chance.name()
    const phone = randomMobile({ formatted: true })

    const newEmployee : employee = {
        employee_name: name,
        employee_department: 'Engineering',
        employee_email: getEmail(name),
        employee_salary: 75000,
        employee_phoneNumber: phone 
    }
    console.log(newEmployee)
    return newEmployee
}
