/* function User(name, grades) {
    this.name = name;
    this.grades = grades;
  }
  
  User.prototype.calculateAverage = function() {
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return sum / this.grades.length;
  };
  
  const user1 = new User("Alice", [85, 90, 92]);
  console.log(user1.calculateAverage()); // Affiche la moyenne des notes de Alice */

function User(name, grades) {
  this.name = name;
  this.grades = grades;
}

User.prototype.calculateAverage = function() {
    const sum = this.grades.reduce((acc, currentValue) => acc + currentValue, 0);
    const average = (sum / this.grades.length).toFixed(2);
    return `${this.name} à ${average} de moyenne`;
}

const erique = new User('Érique', [12, 32, 23]);

console.log(
    erique.calculateAverage()
)