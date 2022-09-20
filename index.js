let btnRandom = document.querySelector("button");
// let result = document.querySelector("h2");

let student = [
  "Marks",
  "Kamal",
  "Abdelhaq",
  "Marouan",
  "Amine",
  "Mehdi",
  "Mohammed",
  "Ahmed",
];

let topics = [
  "Topic 1",
  "Topic 2",
  "Topic 3",
  "Topic 4",
  "Topic 5",
  "Topic 6",
  "Topic 7",
  "Topic 8",
];

// here i will try to map on json file
document.getElementById("allStudents").innerHTML = student;
document.getElementById("allTopics").innerHTML = topics;

let selectedStudent = [];
let selectedTopics = [];

// function for select random student
function getRandomStudent(min, max) {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let step3 = Math.floor(step2);

  return step3;
}

// function for select random topic
function getRandomTopic(min, max) {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let step3 = Math.floor(step2);

  return step3;
}

btnRandom.addEventListener("click", () => {
  //   student selected
  let oneStudent = getRandomStudent(0, student.length - 1);
  //   topic selected
  let oneTopic = getRandomTopic(0, topics.length - 1);

  //   push student to new array
  if (student.length > 0) {
    selectedStudent.push(student[oneStudent]);
  } else {
    console.log("stop");
  }

  //   push topics to new array
  if (topics.length > 0) {
    selectedTopics.push(topics[oneTopic]);
  } else {
    console.log("stop");
  }

//   remove selected students from old array
  if (student.length > 0) {
    let newStudent = student.splice(student.indexOf(student[oneStudent]), 1);
    document.getElementById("allStudents").innerHTML = student;
  } else {
    let message = "no student left";
    document.getElementById("allStudents").innerHTML = message;
  }
  document.getElementById("rStudents").innerHTML = selectedStudent;

//   remove selected topics from old array
  if (topics.length > 0) {
    let newTopic = topics.splice(topics.indexOf(topics[oneTopic]), 1);
    document.getElementById("allTopics").innerHTML = topics;
  } else {
    let message = "no topics left";
    document.getElementById("allTopics").innerHTML = message;
  }
  document.getElementById("rTopics").innerHTML = selectedTopics;
});
