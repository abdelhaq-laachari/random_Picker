var btn = document.getElementById("btn");

function getDatesInRange(startDate) {
  const date = new Date(startDate.getTime());

  const dates = [];

  btn.addEventListener("click", () => {
    // get name of the day
    var dayName = date.toString().split(" ")[0];
    // make a condition to skipped the weekend
    if (dayName != "Fri" && student.length > 0) {
      // add new day after every pick
      var test = date.setDate(date.getDate() + 1);
      console.log("date one : " + new Date(test));
      // change date to this format : yy-mm-dd
      var ss = new Date(test);
      var finalDate =
        ss.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
      // push the date to an array called dates
      console.log("date two : " + finalDate);
      dates.push(finalDate);
      document.getElementById("rDate").innerHTML = dates;
    }
    // if friday day pass weekends day
    else if (dayName == "Fri") {
      var test = date.setDate(date.getDate() + 3);
      // change date to this format : yy-mm-dd
      var ss = new Date(test);
      var finalDate =
        ss.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
      // push the date to an array called dates
      console.log("date two : " + finalDate);
      dates.push(finalDate);
      document.getElementById("rDate").innerHTML = dates;
    } else {
      console.log("stop please");
    }
  });

  return dates;
}

var today = new Date();
var current_date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

const d1 = new Date(current_date);

console.log(getDatesInRange(d1));
