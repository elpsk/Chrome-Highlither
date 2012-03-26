Chrome Highlither
============= 

Use this extension to highlith on any pages, definited words, array based.


Contributing
------------

Want to contribute? Beautiful, you're welcome!


Desiderata
-------

Creating an array of Strings (like "Milan", "Rome", etc…) and hightlith on every Chrome Pages these array words.

    '
    City = new Array("Milano", "Roma", "Napoli", "Bologna", "Venezia");
    for (idx=0; idx<City.length; idx++) {
    	document.body.innerHTML = 
    		document.body.innerHTML.replace(City[idx], "<font color='red'>"+City[idx]+"</font>");
    }
    '

![Screenshots](https://github.com/paska/Chrome-Highlither/blob/master/_ss_before.png)

![Screenshots](https://github.com/paska/Chrome-Highlither/blob/master/_ss_after.png)


