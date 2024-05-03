//declartion of variables
let courses = document.querySelector(".courses");
let lGrade = document.querySelector(".lGrade");
let addCourse = document.querySelector(".addCourse");
let removeCourse = document.querySelector(".removeCourse");
let calcGPA = document.querySelector(".calc-button");
let gpa = document.querySelector(".gpa");
// //add course
// addCourse.onclick = function() {
//   let course = courses.value;
//   let grade = lGrade.value;
//   let newCourse = document.createElement("div");
//   newCourse.innerHTML = course + " " + grade;
//   document.body.appendChild(newCourse);
// }
// //remove course
// removeCourse.onclick = function() {

// }
//calc GPA button
let sum = 0;
calcGPA.onclick = function () {
  let grades = Array.from(document.querySelectorAll(".grade-key")).map(grade => grade.value);
  console.log(grades);
sum=0;
grades.forEach( num => {
  sum += Number(num);
  console.log(sum +
  'kkkkkj');
})
  let finalGrade = sum / 4;
  gpa.innerHTML =`Your GPA is: ${finalGrade}`;
}
