var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var time = function (str) {
  var natural, unix;
    
  if (/^[0-9]*$/g.test(str)) {
    console.log('num');
    natural = prsTime(str);    
  } else {
    unix = unxTime(str);
    natural = prsTime(unix);    
  }
  
  if ( !natural && !unix ) {
    return  { "unix": 'null', "natural": 'null' };
  } else {
    return  { "unix": (unix || Number(str)), "natural": (natural || str) };
  }
}

function prsTime(tm) {
  var date = new Date(tm*1000);
  
  if (date) {
    var year = date.getFullYear(tm);
  var month = date.getMonth(tm);
  var day = date.getDate(tm);
  
  return months[month]+' '+day+', '+year;
  } else {
    return null;
  }
}

function unxTime(tm) {
  return Date.parse(tm)/1000;
}



module.exports = time;