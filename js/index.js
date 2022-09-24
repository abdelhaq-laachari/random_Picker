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
  "Ababou",
  "Boumdin",
  "Oufquir",
  "Lmdbou7",
  "El bassri",
  "Hassan 2",
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
  "Topic 13",
  "Topic 14",
  "Topic 15",
  "Topic 16",
  "Topic 17",
];


// function for select random topic
function getRandomElement(min, max) {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let step3 = Math.floor(step2);

  return step3;
}

// print array element in view
function printedName(tableName, tableId) {
  let printedTable = tableName.join(" " + "<br/>");
  document.getElementById(tableId).innerHTML = printedTable;
}
printedName(student, "allStudents");
printedName(topics, "allTopics");

let selectedStudent = [];
let selectedTopics = [];
let dates = getDatesInRange(d1) ;

// button for pick a random element
btnRandom.addEventListener("click", () => {
  //   remove selected students from old array
  removeSelectedElement(student, "allStudents", "rStudents", selectedStudent);
  //   remove selected topics from old array
  removeSelectedElement(topics, "allTopics", "rTopics", selectedTopics);
  if(selectedStudent.length > 0){
    download.style.display = "block";
  }
});

// function for remove selected element
function removeSelectedElement(arrayName, arrayId, arrayResult, selectedArray) {
  // get number of selected element from the array
  let oneSelected = getRandomElement(0, arrayName.length - 1);
  // push selected element to new array
  if (arrayName.length > 0) {
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
    printedName(arrayName, arrayId);
  } else {
    let message = "nothing is left";
    document.getElementById(arrayId).innerHTML = message;
    // Swal.fire("stop")
  }
  let finalResult = selectedArray.join(" " + "</br>");
  document.getElementById(arrayResult).innerHTML = finalResult;
}

var download = document.getElementById("download");
download.addEventListener("click", () => {
  saveCSV();
});



function saveCSV() {
  // (A) ARRAY OF DATA
  var array = [
    selectedStudent,
    selectedTopics,
    dates
  ];

  // (B) ARRAY TO CSV STRING
  var csv = "";
  for (let row of array) {
    for (let col of row) {
      csv += col + "        ";
    }
    csv += "\r            \n";
  }

  // (C) CREATE BLOB OBJECT
  var myBlob = new Blob([csv], { type: "text/csv" });

  // (D) CREATE DOWNLOAD LINK
  var url = window.URL.createObjectURL(myBlob);
  var anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "demo.csv";
  anchor.click();
  window.URL.revokeObjectURL(url);
  anchor.remove();
}