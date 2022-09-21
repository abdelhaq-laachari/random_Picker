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
      var test = date.setDate(date.getDate() + 2);  // here where i stop because i need to know why test and ss are different
      console.log(new Date(test))
      // change date to this format : yy-mm-dd
      var ss = new Date(test)
        .toISOString()
        .replace("-", "/")
        .split("T")[0]
        .replace("-", "/");
      // push the date to an array called dates
      console.log(ss)
      dates.push(ss);
      document.getElementById("rDate").innerHTML = dates;
    }
    // if friday day pass weekends day
    else if (dayName == "Fri") {
      var test = date.setDate(date.getDate() + 3);
      // change date to this format : yy-mm-dd
      var ss = new Date(test)
        .toISOString()
        .replace("-", "/")
        .split("T")[0]
        .replace("-", "/");
      // push the date to an array called dates
      dates.push(ss);
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
