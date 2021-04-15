// Your code here


function createEmployeeRecord(employeeArr) {
let employeeRecord = {
    firstName: employeeArr[0],
    familyName: employeeArr[1],
    title: employeeArr[2],
    payPerHour: employeeArr[3],
    timeInEvents: [],
    timeOutEvents: []
    }
    return employeeRecord
}

function createEmployeeRecords(arrOfEmployeeArrays){
    let arraysOfEmployees = []
    arraysOfEmployees.push(arrOfEmployeeArrays.forEach(createEmployeeRecord))
    return arraysOfEmployees
}