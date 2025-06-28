let student = {
   name:'Manish kumar',
   course: 'computer science',
   roll_no: '132'

};
console.log(student);
console.log(student.rollNo);
console.log(student.name);
console.log(student. course);
console.log(student ['rollNo']);
console.log(student ['name']);
console.log(student ['course']);
console.log(typeof student);
console.log(typeof student.rollNo);
delete student.course;
console.log(student);
student.year = 'second';
console.log(student);