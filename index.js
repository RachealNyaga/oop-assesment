class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  
  class Employee extends Person {
    constructor(name, age, jobTitle, salary) {
      super(name, age);
      this.jobTitle = jobTitle;
      this.salary = salary;
    }
  }
  
  class Pharmacist extends Employee {
    constructor(name, age, salary, licenseNumber) {
      super(name, age, "Pharmacist", salary);
      this.licenseNumber = licenseNumber;
    }
    
      writePrescription(patient, medication) {
        const prescription = new Prescription(patient, medication);
        patient.addPrescription(prescription);
        return prescription;
      }
    }
    
    class Prescription {
      constructor(patient, medication) {
        this.patient = patient;
        this.medication = medication;
        this.date = new Date();
      }
    }
    
    class Patient {
      constructor(name, age) {
        this.name = name;
        this.age = age;
        this.prescriptions = [];
      }
    
      addPrescription(prescription) {
        this.prescriptions.push(prescription);
      }
    }
    
  
  class Cashier extends Employee {
    constructor(name, age, salary) {
      super(name, age, "Cashier", salary);
    }
  
    collectCash(amount) {
        cashRegister.addToRegister(amount);

    }
  
    returnCash(amount) {
        cashRegister.removeFromRegister(amount);
        pharmacy.addToBalance(amount);
    }
  }
  
  class Manager extends Employee {
    constructor(name, age, salary, employees) {
      super(name, age, "Manager", salary);
      this.employees = employees;
    }
          
            hireEmployee(employee) {
              this.employees.push(employee);
            }
          
            fireEmployee(employee) {
              const index = this.employees.indexOf(employee);
              if (index > -1) {
                this.employees.splice(index, 1);
              }
            }
    }
    // question 2
    
function reverseGroupsOfFour(S) {
  let result = '';
  for (let i = 0; i < S.length; i += 4) {
    let group = S.slice(i, i + 4);
    let reversed = group.split('').reverse().join('');
    result += reversed;
  }
  return result;
}
console.log(reverseGroupsOfFour('Lorem at'));

// question 3
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  console.log(sumArray([1, 2, 4, 7]))
  
    
  