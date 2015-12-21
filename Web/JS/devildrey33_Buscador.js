google.load('search', '1');
google.setOnLoadCallback(function(){
    new google.search.CustomSearchControl().draw('cse');
}, true);
google.load('search', '1');

function OnLoad() {
    // Create a custom search control that uses a CSE restricted to code.google.com
    var customSearchControl = new google.search.CustomSearchControl('005953647264407381580:5hnum4vxqqo');

    // Draw the control in content div
    customSearchControl.draw('content');

}
