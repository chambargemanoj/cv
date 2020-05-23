

function headerDate () {
  const options = {
    weekday: "long",
    year: "numeric",
    month:"long",
    day:"numeric"
};
  const newdate = new Date().toLocaleDateString('en-US', options)
  return newdate 
}
function footerAllright () {
  const newdate = new Date()
  year1  = newdate.getFullYear()
  return year1
}

  const time = document.querySelector('#date').innerHTML=headerDate()
  const year = document.querySelector('label.labelfooter').innerHTML='Copyright © ' + footerAllright()

  