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
    return `
    <div>
        <a style="color:blue;" href="https://calendly.com/c/AAATG7DV75GAQN7C"> Book a Private Demo with Me</a>
        <a style="color:blue" href="https://bit.ly/3lYJlfA">Look at my brochure</a>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSer3cJk5usDopXLQqJvvucGinmvvo3AdTCKnxXV0IDmV3i8BA/viewform?embedded=true" width="640" height="522" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </div>
    `;
  }
}
var thing = doSomething();
document.write(thing);
