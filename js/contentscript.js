document.addEventListener("mousedown", function(event){
  if(event.button == 2) {
    //Display selected text for search
    var selected = window.getSelection().toString();
    if (selected.length > 45) {
      selected = selected.substring(0, 45) + "...";
    }
    
    //Determine which context menu to create and send to background page
    if(window.getSelection().toString().indexOf('@') === 0) {
      chrome.extension.sendRequest({cmd: "createProfileMenu", selection: window.getSelection().toString()});
    } else {
      chrome.extension.sendRequest({cmd: "createSearchMenu", selection: selected});
    }
  }
}, true); 