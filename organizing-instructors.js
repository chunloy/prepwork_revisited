const list1 = [
  { name: "Samuel", course: "iOS" },
  { name: "Victoria", course: "Web" },
  { name: "Karim", course: "Web" },
  { name: "Donald", course: "Web" }
];

const list2 = [
  { name: "Brendan", course: "Blockchain" },
  { name: "David", course: "Web" },
  { name: "Martha", course: "iOS" },
  { name: "Carlos", course: "Web" }
];

const getCourseList = function(instructors) {
  const courseList = [];
  for (const instructor of instructors) {
    if (!courseList.includes(instructor.course)) {
      courseList.push(instructor.course);
    }
  }
  return courseList;
};

const organizeInstructors = function(instructors, callback) {
  const courseList = callback(instructors);
  const output = {};

  for (const course of courseList) {
    output[course] = [];
    for (const instructor of instructors) {
      if (instructor.course === course) {
        output[course].push(instructor.name);
      }
    }
  }
  return output;
};

console.log(organizeInstructors(list1, getCourseList));
console.log(organizeInstructors(list2, getCourseList));