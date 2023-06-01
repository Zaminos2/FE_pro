const students = [];

students.push({name:"Oleksii",age: 38, course: 1});
students.push({name:"Dmytro",age: 48, course: 1});
students.push({name:"Svitlana",age: 22, course: 2});
students.push({name:"Michail",age: 20, course: 3});
students.push({name:"Bogdan",age: 38, course: 4});
students.push({name:"Kateryna",age: 18, course: 4});

console.log(students[0].name);

students[3].age = 33;
console.log(`Michail age is: ${students[3].age}`);

students[0].sity = "Emmerich Am Rain"
console.log(students[0]);

const studentsNames = students.map((el) => {
    return el.name;
})

console.log(studentsNames);


