//Open Twitter profile in new tab
var openTwitterProfile = function (info, tab) {
  //Get selected text from contentscript
  if(info.selectionText.indexOf('@') === 0) {
    var twitterProfile = info.selectionText.substring(1);
    chrome.tabs.create({ url: 'http://twitter.com/' + twitterProfile });
  }
}

//Open Twitter search in new tab
var searchOnTwitter = function (info, tab) {
  var searchTerm = info.selectionText;
  chrome.tabs.create({ url: 'https://twitter.com/search?q=' + searchTerm });
}

//Receives which context menu option should be added from content script
chrome.extension.onRequest.addListener(function(request) {
    if(request.cmd == "createProfileMenu") {
        chrome.contextMenus.removeAll(function() {
            chrome.contextMenus.create({
                "title": "Open Twitter Profile",
                "contexts":["selection"],
                "onclick": openTwitterProfile
            });
        });
    } else if(request.cmd == "createSearchMenu") {
        chrome.contextMenus.removeAll(function() {
            chrome.contextMenus.create({
                "title": "Search On Twitter",
                "contexts":["selection"],
                "onclick": searchOnTwitter
            });
        });
    }
});