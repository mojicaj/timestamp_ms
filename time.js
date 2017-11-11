
var natural, unix;
var date = new Date();

var time = function (str) {

  if (Number(str[0]) >= 0) {
    console.log('nat');
    natural = prsTime(str);    
  } else {
    console.log('unix');
    unix = unxTime(str);
    console.log(unix);
  }
  
  if ( !natural && !unix ) {
    return  { "unix": 'null', "natural": 'null' };
  } else {
    return  { "unix": (unix || str), "natural": (natural || str) };
  }
}

function prsTime(tm) {
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var year = date.getFullYear(tm);
  var month = date.getMonth(tm);
  var day = date.getDate(tm);
  return String(months[month]+' '+day+', '+year);
}

function unxTime(tm) {
  return Date.parse(tm)/1000;
}



module.exports = time;