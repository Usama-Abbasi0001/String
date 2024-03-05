//number methode
var a ="100";
var num = Number(a);
document.write(num + 10 + "<br>");

//parseint
var a ="42.497";
var num = parseInt(a);
document.write(num + "<br>");

//parseFlot
var a ="67.497";
var num = parseFloat(a);
document.write(num  + "<br>");

//tofiwed
var a = 70.3323 ;
var num = a.toFixed(3);
document.write(num  + "<br>");

//arry methode
var soft= ['usama' , 'haseeb' , 'Rafay' , 'Mubashir' ];
document.write(soft +  "<br>");

//arry methode length
var soft= ['usama' , 'haseeb' , 'Rafay' , 'Mubashir' ];
document.write(soft.length + "   lenght" +   "<br>");

//arry methode push
var soft= ['usama' , 'haseeb' , 'Rafay' , 'Mubashir' ];
soft.push("Huzaifa");
document.write(soft +  "<br>");

//arry methode Unshift
var soft= ['usama' , 'haseeb' , 'Rafay' , 'Mubashir' ];
soft.unshift("Adnan");
document.write(soft +  "<br>");

//arry methode pop
var soft= ['usama' , 'haseeb' , 'Rafay' , 'Mubashir' ];
soft.pop();
document.write(soft +  "<br>");

//arry methode shift
var soft= ['usama' , 'haseeb' , 'Rafay' , 'Mubashir' ];
soft.shift();
document.write(soft +  "<br>");

//arry methode splice
var soft= ['usama' , 'haseeb' , 'Rafay' , 'Mubashir' ];
soft.splice(1);
document.write(soft +  "<br>");

//arry methode splice
var x= ['abbasi' , 'arain' , 'kk' , 'abbasi' ];
document.write(x +  "<br>");

var b = x.indexOf("abbasi")
document.write(b +  "<br> <br>");

//arry methode sort
var sort= ['Usama' , 'Haseeb' , 'Rafay' , 'Mubashir' ];
document.write(sort +  "<br> <br>");
sort.sort();
document.write(sort +  "<br> <br>");


//iterables 
let  text = ""
for (const x of "Usama Khan"){
    text += x + "<br>";
}
document.write(text);