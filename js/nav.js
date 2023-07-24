function showDiv(id) {
    // Get all the div elements with the class "w3-content"   
    var divElements = document.getElementsByClassName("nag");
    
    // Hide all the div elements
    for (var i = 0; i < divElements.length; i++) {
        divElements[i].style.display = "none";
    }
    
    // Show the selected div element by its ID
    var selectedDiv = document.getElementById(id);
    if (selectedDiv) {
        $("#" + id).fadeIn();
        selectedDiv.style.display = "block";
    }
    w3_close();
}