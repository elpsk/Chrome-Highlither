
/*
 
// SCRIPT TO SHOW A RIGHT-MENU.
// ************
// TODO-> show right menu only on a definited array words!
// ************

function sendSearch(selectedText) {
	var serviceCall = 'http://maps.google.it/q=' + selectedText;
	chrome.tabs.create({url: serviceCall});
}

chrome.contextMenus.create({title: "Search '%s' maps!", contexts:["selection"], onclick: function(info, tab) {
  sendSearch(info.selectionText);
}});
*/


chrome.tabs.getSelected(null, function(tab { 
	chrome.tabs.executeScript(tab.id, {file:'contentScript.js'});
})); 
