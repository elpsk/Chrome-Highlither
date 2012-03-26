
document.body.innerHTML = document.body.innerHTML.replace(/(A.*?\b)/g, "<font color='red'>$1</font>");


/* 
// TODO -> APPLY A SYLE ON DEFINITED WORDS ON PAGE.
//      -> SHOW RIGHT CLICK MENU ONLY ON THESE WORDS

City = new Array("Milano", "Roma", "Napoli", "Bologna", "Venezia");
for (idx=0; idx<City.length; idx++) {
	document.body.innerHTML = 
		document.body.innerHTML.replace(City[idx], "<font color='red'>"+City[idx]+"</font>");
}
*/