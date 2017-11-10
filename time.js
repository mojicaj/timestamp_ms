
var natural, unix;
var date = new Date();

var time = function (str) {
  

  if (/^\/api\/parsetime/.test(str)) {
    console.log('nat');
    unix = unxTime(str);
  } else if (/^\/api\/unixtime/.test(str)) {
    console.log('unix');
    natural = prsTime(str);
  }
  
  return  { "unix": (unix || str), "natural": (natural || str)  };
}

function prsTime() {
  
}

function unxTime(tm) {
  console.log(tm);
  return date.getTime(tm);
}



module.exports = time;