var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var time = function (str) {
  var natural, unix;

  console.log(str.indexOf(/\s\W/));
  if (/\s/.test(str)) {
    
  }
  
  if (Number(str[0]) >= 0) {
    natural = prsTime(str);    
  } else {
    unix = unxTime(str);
    if ( isNaN(unix)) {
      unix;
    } else {
      natural = prsTime(unix);
    }
  }
  
  if ( !natural && !unix ) {
    return  { "unix": 'null', "natural": 'null' };
  } else {
    return  { "unix": (unix || Number(str)), "natural": (natural || str) };
  }
}

function prsTime(tm) {
  var date = new Date(tm*1000);
  
  var year = date.getFullYear(tm);
  var month = date.getMonth(tm);
  var day = date.getDate(tm);
  
  return months[month]+' '+day+', '+year;
}

function unxTime(tm) {
  return Date.parse(tm)/1000;
}



module.exports = time;