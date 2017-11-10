
var natural, unix;
var date = new Date();

var time = function (str) {
  

  if (/^\/api\/prstime/.test(str)) {
    console.log('nat');
    unix = unxTime(str);
  } else if (/^\/api\/unixtime/.test(str)) {
    console.log('unix');
    natural = prsTime(str);
  }
  
  return  { "unix": (unix || str), "natural": (natural || str)  };
}

function prsTime(tm) {
  var year = date.getFullYear(tm);
  var month = date.getMonth(tm)+1;
  var day = date.getDate(tm);
  return String(month+" "+day+', '+year);
}

function unxTime(tm) {
  console.log(tm);
  return date.getTime(tm);
}



module.exports = time;