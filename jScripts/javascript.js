
function ToggleNav(){
    document.getElementById("main-nav").classList.toggle("hide-mobile");
}

// button hover effect
function handleButtonHover(button) {
    button.addEventListener("mouseover", function () {
        button.style.backgroundColor = "#e6f4ff";
    });

    button.addEventListener("mouseout", function () {
        button.style.backgroundColor = "#051E32";
    });
}


// Apply hover effect to buttons
document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".btn");
    
    buttons.forEach(function (button) {
        handleButtonHover(button);
    });
});


// Define the function named showSelectedElement
function showSelectedElement() {
  // Get the dropdown menu element by its ID
  var dropdown = document.getElementById("dropdown-menu");

  // Get the value of the currently selected option in the dropdown menu
  var selectedItemId = dropdown.value;

  // Get all the <li> elements within the list with the ID "list-items"
  var listItems = document.getElementById("list-items").getElementsByTagName("li");

  // Check if the selected value in the dropdown menu is an empty string
  if (selectedItemId === "") {
      // If "Select an item" is selected, show all list items
      for (var i = 0; i < listItems.length; i++) {
          listItems[i].style.display = "flex";
      }
  } else {
      // If any other option is selected, hide all list items initially
      for (var i = 0; i < listItems.length; i++) {
          listItems[i].style.display = "none";
      }

      // Show the selected item by its ID
      var selectedItem = document.getElementById(selectedItemId);
      if (selectedItem) {
          selectedItem.style.display = "flex";
      }
  }
}
