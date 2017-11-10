
var natural, unix;
var date = new Date();

var time = function (str) {
  
  if (/^\/api\/parsetime/.test(str)) {
    natural = prsTime(str);
  } else if (/^\/api\/unixtime/.test(str)) {
    unix = unxTime(Number(str));
  }
  
  return  { "unix": (unix || str), "natural": (natural || str)  };
}

function prsTime() {
  
}

function unxTime(time) {
  return date.getTime(time);
}



module.exports = time;