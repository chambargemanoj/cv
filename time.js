

function headerDate () {
  const newdate = new Date()
  return newdate
}
function footerAllright () {
  const newdate = new Date()
  year1  = newdate.getFullYear()
  return year1
}

  const time = document.querySelector('label').innerHTML=headerDate()
  const year = document.querySelector('label.labelfooter').innerHTML='Copyright © ' + footerAllright()
