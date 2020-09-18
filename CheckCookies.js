function getCookie(name) {
  var dc = document.cookie;
  var prefix = name + "=";
  var begin = dc.indexOf("; " + prefix);
  if (begin == -1) {
    begin = dc.indexOf(prefix);
    if (begin != 0) return null;
  } else {
    begin += 2;
    var end = document.cookie.indexOf(";", begin);
    if (end == -1) {
      end = dc.length;
    }
  }
  // because unescape has been deprecated, replaced with decodeURI
  //return unescape(dc.substring(begin + prefix.length, end));
  return decodeURI(dc.substring(begin + prefix.length, end));
}

function doSomething() {
  var myCookie = getCookie("heysummit_attendee");

  if (myCookie == null) {
    // do cookie doesn't exist stuff;
    console.log("cookie doesnt exists");
  } else {
    // do cookie exists stuff
    console.log("cookie does exist");
  }
}
doSomething();
