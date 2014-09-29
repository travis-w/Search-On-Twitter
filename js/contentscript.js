document.addEventListener("mousedown", function(event){
  if(event.button == 2) {
    //Determine which context menu to create and send to background page
    if(window.getSelection().toString().indexOf('@') === 0) {
        chrome.extension.sendRequest({cmd: "createProfileMenu"});
    } else {
        chrome.extension.sendRequest({cmd: "createSearchMenu"});
    }
  }
}, true); 