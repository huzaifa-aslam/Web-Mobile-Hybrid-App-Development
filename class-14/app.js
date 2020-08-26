var dob = new Date(prompt("Enter your Date of birth", "jan 1,1970"))
var dobmili = dob.getTime();
var today = new Date();
var todaymili = today.getTime()
var diff = todaymili - dobmili
var convert = diff / (1000 * 60 * 60 * 24 * 30 * 12)
var accurate = Math.floor(convert)
document.write(accurate)