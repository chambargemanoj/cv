var digitalClock = setInterval(headerTime, 1000)

function headerDate() {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  const newdate = new Date().toLocaleDateString('en-US', options)
  return newdate
}

function headerTime() {
  var d = new Date()
  var t = d.toLocaleTimeString('en-US')
  var hour = d.getHours()
  if (hour >= 0) {
    hour = "Good Morning";
  } else if (hour >= 12) {
    hour = "Good Afternoon";
  } else if (hour >= 18) {
    hour = "Good Evening";
  } else {
    hour = "Invalid time, Something wrong in our code";
  }
  document.getElementById('time').innerHTML = t + " CST" + "  " + hour
}

function footerAllright() {
  const newdate = new Date()
  year1 = newdate.getFullYear()
  return year1
}
document.querySelector('#date').innerHTML = headerDate()
document.querySelector('label.labelfooter').innerHTML = 'Copyright © ' + footerAllright()
