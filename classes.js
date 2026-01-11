// Class Definition: A blueprint for creating objects (instances)
class University {
    constructor(cms, semester, role = "student", gender, department)  {
    this.cms = cms;
    this.semester = semester;
    this.role = role;
    this.gender = gender;
    this.department = department;
  }
  // Methods to modify the state of the object
  changeDepartment(department) {
    this.department = department;
  }
  changeGender(gender) {
    this.gender = gender;
  }
  changeCms(cms) {
    this.cms = cms;
  }
  changeSemester(semester) {
    this.semester = semester;
  }
  changeRole(role) {
    this.role = role;
  }
}

// Creating instances (objects) of the University class
const s1 = new University(64098, 5, "student", "male", "IT");
const s2 = new University(64099, 5, "student", "female", "IT");
s1.changeSemester(6);
console.log(s1);
console.log(s2)
