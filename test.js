allcookie = document.cookie;
if(!allcookie){
    var value = prompt("Please enter target name:");
    var name= "target";
    document.cookie = encodeURIComponent(name) + '=' + decodeURIComponent(value)+'; expires=Tue, 19 Jan 2038 03:14:07 GMT';
}
else{
var value = allcookie.substring(7);
}
var fin_value = decodeURI(value)
for (var i = document.getElementsByTagName('h4').length - 1; i >= 0; i--) {
	if(document.getElementsByTagName('h4')[i].innerText == fin_value )
	{
		document.getElementsByTagName('h4')[i].offsetParent.hidden = true;
	}
}
for (var i = document.getElementsByTagName('span').length - 1; i >= 0; i--) {
    if(document.getElementsByTagName('span')[i].innerText == fin_value  )
	{
		document.getElementsByTagName('span')[i].offsetParent.children[0].innerText = "";
	}
}