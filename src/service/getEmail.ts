export const getEmail = (employeeName: string) : string => {
    return employeeName.replace(" ", "").toLowerCase() + "@example.com"
}