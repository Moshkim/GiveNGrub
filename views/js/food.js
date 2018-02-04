$(document).ready(function() {

    // Getting references to the name inout and author container, as well as the table body
  var quantityInput = $("#number");
  var authorList = $("tbody");
  var authorContainer = $(".author-container");
  // Adding event listeners to the form to create a new object, and the button to delete
  // an Author
    $(document).on("click", "#submitBtn", submitFood);
  //$(document).on("click", ".delete-author", handleDeleteButtonPress);

  // Getting the intiial list of Authors
  getFood();

  // A function to handle what happens when the form is submitted to create a new Author
  function submitFood(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (!quantityInput.val().trim().trim()) {
      return;
    }
    // Calling the upsertAuthor function and passing in the value of the name input
    upsertFood({
      fresh: quantityInput
        .val()
        .trim()
    });
  //  console.log(upsertFood);
  }
    // A function for creating an author. Calls getAuthors upon completion
    function upsertFood(foodData) {
    $.post("/api/fp/food", foodData)
      .then(getFood);
  }
  // Function for retrieving authors and getting them ready to be rendered to the page
  function getFood() {
    $.get("/api/fp/food", function(data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createAuthorRow(data[i]));
      }
      renderAuthorList(rowsToAdd);
      nameInput.val("");
    });
  }



})