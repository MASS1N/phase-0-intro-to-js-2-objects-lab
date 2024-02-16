// Write your solution in this file!
// Define an initial employee object for testing
const employee = {
    name: 'John Doe',
    age: 30,
    position: 'Developer',
  };
  
  // Update the function definitions accordingly
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, { [key]: value });
  }
  
  // Now you can run the tests
  console.log('Original employee:', employee);
  
  // Example usage:
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'position', 'Senior Developer');
  console.log('Updated employee:', updatedEmployee);
  

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Example Usage:
  console.log('Original employee:', employee);
  
  destructivelyUpdateEmployeeWithKeyAndValue(employee, 'position', 'Lead Developer');
  console.log('Updated employee (destructive):', employee);


  // Existing code...

// 1) employees
//    deleteFromEmployeeByKey(employee, key)
//      deletes `key` from a clone of employee and returns the new employee (it is non-destructive):
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = Object.assign({}, employee);
    delete newEmployee[key];
    return newEmployee;
  }
  
  // 2) employees
  //    deleteFromEmployeeByKey(employee, key)
  //      does not modify the original employee (it is non-destructive):
  function nonDestructiveDeleteExample(employee, key) {
    console.log('Original employee:', employee);
    const newEmployee = deleteFromEmployeeByKey(employee, key);
    console.log('New employee (non-destructive):', newEmployee);
    console.log('Original employee after function call:', employee);
  }
  
  // 3) employees
  //    destructivelyDeleteFromEmployeeByKey(employee, key)
  //      returns employee without the deleted key/value pair:
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // 4) employees
  //    destructivelyDeleteFromEmployeeByKey(employee, key)
  //      modifies the original employee:
  function destructiveDeleteExample(employee, key) {
    console.log('Original employee:', employee);
    destructivelyDeleteFromEmployeeByKey(employee, key);
    console.log('Updated employee (destructive):', employee);
  }
  