
var natural, unix;
var date = new Date();

var time = function (str) {
  console.log(Number(str[0]));

  if (Number(str[0]) >= 0) {
    console.log('nat');
    natural = prsTime(str);    
  } else {
    console.log('unix');
    unix = unxTime(Number(str));
  }
  
  return  { "unix": (unix || str), "natural": (natural || str)  };
}

function prsTime(tm) {
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var year = date.getFullYear(tm);
  var month = date.getMonth(tm);
  var day = date.getDate(tm);
  return String(months[month]+' '+day+', '+year);
}

function unxTime(tm) {
  console.log(tm);
  return date.getTime(tm);
}



module.exports = time;