var len = "Sindh AgriculturE University";
var a = len.length;
document.write(a +" Lenght Method" + "<br>");

var low = "Sindh AgrIculturE University";
var b = low.toLowerCase();
document.write(b  +" __toLowerCase Method" + "<br>");

var cas = "SindH AgrIculturE University";
var c = cas.toUpperCase();
document.write(c + " __toUperCase Method" + "<br>");

var inc = "Computer Science";
var d = inc.includes("nce");
document.write(d + " includes Method" +"<br>");

var start = "Computer Science";
var e = start.startsWith("nce");
document.write(e + " StartsWith Method" + "<br>");

var end = "Computer Science";
var f = end.endsWith("nce");
document.write(f + " endsWith Method" + "<br>");

var ser = "Computer Science";
var g = ser.search("en");
document.write(g +  " Search Method" +"<br>");

var mat = "Computer is the best Science best";
var h = mat.match(/best/g);
document.write(h +  " match Method" +"<br>");

var of = "Computer is the best Science best";
var i = of.indexOf("best");
document.write(i + " indexOf Method" + "<br>");

var ind = "Computer is the best Science best";
var j = ind.lastIndexOf("best");
document.write(j + " LastIndexOf Method" + "<br>");

var re = "Computer is the best Science best";
var k = re.replace("best" , "the");
document.write(k + " replace Method" + "<br>");

var cha = "Computer is the best Science best";
var l = cha.charAt(17);
document.write(l + " charAt Method" + "<br>");

var code = "Computer is the best Science best";
var m = code.charCodeAt(17);
document.write(m + " charCodeAt Method" + "<br>");


var n = String.fromCharCode(66);
document.write(n + " FromcharCode Method" + "<br>");

var con = "Computer is the best Science best";
var conone = "  Khan Sahab";
var p = con.concat(conone);
document.write(p + " concat Method" + "<br>");

var slp = "Computer is the best Science best";
var q = slp.split(" ");
document.write(q + " split Method" + "<br>");

var rept = "Computer is the best Science best ";
var r = rept.repeat("3");
document.write(r + " repeat Method" + "<br>");

var slic = "Computer is the best Science best ";
var s = slic.slice(5,12);
document.write(s+ "<br>");

let user = "usama Abbasi in";
document.write(`TandoAllahyar  ${user} fundamental`);




