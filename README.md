Chrome Highlither
============= 

Use this extension to highlith on any pages, definited words, array based.


Contributing
------------

Want to contribute? Beautiful, you're welcome!


Desiderata
-------

1) Creating an array of Strings (like "Milan", "Rome", etc…) and hightlith on every Chrome Pages these array words.

    City = new Array("Milano", "Roma", "Napoli", "Bologna", "Venezia");
    for (idx=0; idx<City.length; idx++) {
    	document.body.innerHTML = 
    		document.body.innerHTML.replace(City[idx], "<font color='red'>"+City[idx]+"</font>");
    }

2) Show right click menu only if an array word is selected!


####Screenshots ⤵

This beta versions, hightliths all words that starts with A letter and replace html code with '<font color=red>'.

Before launching this extension:
![Screenshots](https://github.com/paska/Chrome-Highlither/raw/master/_ss_before.png)

After script lanuched.
![Screenshots](https://github.com/paska/Chrome-Highlither/raw/master/_ss_after.png)


