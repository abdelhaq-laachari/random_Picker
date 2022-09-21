// var btn = document.getElementById("btn");

// function getDatesInRange() {

//   var today = new Date();
//   var current_date =
//   today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
//   console.log(current_date);

//   const date = new Date(current_date.getTime());
//   //   let DayName = "Wed";
//   let DayName = date.toString().split(" ")[0];
//   console.log("day Name:" + DayName);

//   let nextDay = 0;
//   var test = date.setDate(date.getDate() + nextDay);

//   const dates = [];
//   btn.addEventListener("click", () => {
//     if (DayName === "Sat") {
//       nextDay += 2;
//       dates.push(new Date(date));
//       console.log(nextDay);
//     } else {
//       nextDay = nextDay + 1;
//       dates.push(new Date(date));
//       console.log("NEXT DAY IS:" + nextDay);
//       console.log(dates);
//     }
//   });

//   // test
//   // date.setDate(date.getDate() + 1);
//   // nextDay++;

//   return dates;
// }

// console.log(getDatesInRange());

function getDatesInRange(startDate) {
  const date = new Date(startDate.getTime());
  let DayName = date.toString().split(" ")[0];
  console.log(DayName)

  // ✅ Exclude start date
  date.setDate(date.getDate() + 1);

  const dates = [];

  // ✅ Exclude end date
  while (date ) {
    dates.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  return dates;
}

var date = new Date();
var current_date =
  date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

  const d1 = new Date('2022-01-18');
console.log(getDatesInRange(d1));
