class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    getDetails(){
        return `NAME = ${this.name}, AGE = ${this.age}`;
    }
}
const sam = new Person("Sameer", 25);
console.log(sam.getDetails());
class Teacher extends Person {
    constructor(name,age,subject){
        super(name,age);
        this.subject = subject;
    }
    getSubject(){
        return `NAME = ${this.name}, AGE = ${this.age}, SUBJECT = ${this.subject}`;
    }
}
const teacher = new Teacher("Raj",30,"Maths");
console.log(teacher.getSubject());
class Student extends Person {
    constructor(name,age,marks){
        super(name,age);
        this.marks = marks;
    }
    getMarks(){
        return `NAME = ${this.name}, AGE = ${this.age}, MARKS = ${this.marks}`;
    }
}
const student = new Student("Shadan",2,100);
console.log(student.getMarks());