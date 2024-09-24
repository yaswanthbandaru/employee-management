import { AppDataSource } from "../data-source";
import { Employee } from "../entity/Employee";


export const checkEmailExists = async ( email: string ) : Promise<boolean> => {
    const employeeRepository = AppDataSource.getRepository(Employee)
    const employee = await employeeRepository.findOne({ where: { email }})
    return !!employee 
}

/*
const emailToCheck = "john.doe@example.com";

checkEmailExists(emailToCheck).then(exists => {
  if (exists) {
    console.log("Email exists in the database.");
  } else {
    console.log("Email does not exist in the database.");
  }
}).catch(error => {
  console.error("Error checking email:", error);
});
 
*/