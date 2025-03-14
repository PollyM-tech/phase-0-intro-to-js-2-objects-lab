// Write your solution in this file!

let employee = {
    name: "Polly", 
    streetAddress: "123 Nairobi Street", 
  };


  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee, 
      [key]: value, 
  }
}
console.log(updateEmployeeWithKeyAndValue(employee, "streetAddress", "Kiambu 132"));


  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; 
    return employee; 
  }
  console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "position", "Microsoft"));


  function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee }; 
    delete newEmployee[key]; 
    return newEmployee; 
  }
  console.log(deleteFromEmployeeByKey(employee, "streetAddress"));

  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; // Delete the specified key from the original object
    return employee; 
  }
 console.log(destructivelyDeleteFromEmployeeByKey(employee, "streetAddress"));

  
  
