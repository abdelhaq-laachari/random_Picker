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
  "Ismail",
  "Brahim",
  "Kasan",
  "Boutfli9a"
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
  "Topic 9",
  "Topic 10",
  "Topic 11",
  "Topic 12",
];

// here i will try to map on json file
document.getElementById("allStudents").innerHTML = student;
document.getElementById("allTopics").innerHTML = topics;

let selectedStudent = [];
let selectedTopics = [];


// function for select random topic
function getRandomElement(min, max) {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let step3 = Math.floor(step2);

  return step3;
}

btnRandom.addEventListener("click", () => {
  //   remove selected students from old array
  removeSelectedElement(student, "allStudents", "rStudents", selectedStudent);
  //   remove selected topics from old array
  removeSelectedElement(topics, "allTopics", "rTopics", selectedTopics);
});

function removeSelectedElement(arrayName, arrayId, arrayResult, selectedArray) {
  // get number of selected element from the array
  let oneSelected = getRandomElement(0, arrayName.length - 1);
  // push selected element to new array
  if (arrayName.length > 1) {
    selectedArray.push(arrayName[oneSelected]);
  } else {
    console.log("stop");
  }
  // remove selected element from old array
  if (arrayName.length > 0) {
    let newArray = arrayName.splice(
      arrayName.indexOf(arrayName[oneSelected]),
      1
    );
    document.getElementById(arrayId).innerHTML = arrayName;
  } else {
    let message = "nothing is left";
    document.getElementById(arrayId).innerHTML = message;
  }
  document.getElementById(arrayResult).innerHTML = selectedArray;
}


