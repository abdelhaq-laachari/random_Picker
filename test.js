var btn = document.getElementById("btn");

function getDatesInRange(startDate) {
  const date = new Date(startDate.getTime());
  console.log(date);

  //   let DayName = "Wed";

  const dates = [];

  btn.addEventListener("click", () => {
    
    var dayName = date.toString().split(" ")[0];

    if (dayName != "Fri") {
      var test = date.setDate(date.getDate() + 1);
      dates.push(new Date(test));
        console.log(dates);
    } else {
      var test = date.setDate(date.getDate() + 3);
      dates.push(new Date(test));
      console.log(dates);
    }
  });

  return dates;
}

var today = new Date();
var current_date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

const d1 = new Date(current_date);

console.log(getDatesInRange(d1));


