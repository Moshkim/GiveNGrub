$(document).ready(function () {
    /* global moment */
    var foodId = $("#food-id");
    var freshFood = $("#frozen");
    var frozenFood = $("#frozen");
    var packagedFood = $("#packaged");
    var cannedFood = $("#canned");
    var foodDescription = $("#description");
    var submitDate = $("#submit-date");
    var availableStatus = $("#status");
    // foodList holds all submitted food entries
    var foodList = $("tbody");
    //getting references to the food inputted after submition 
    var foodContainer = $(".food-container");
    
    // Click event for submit button
    $(document).on("submit", "#food-form", handleFoodFormSubmit);
    // Getting the intiial list of food submitted
    getFood();

    // A function to handle what happens when the form is submitted to create a new list to the food table
    function handleFoodFormSubmit(event) {
        event.preventDefault();
        // Don't do anything if the name fields hasn't been filled out
        if (!foodInput.val().trim().trim()) {
            return;
        }
        // Calling the upsertAuthor function and passing in the value of the name input
        upsertAuthor({
            name: nameInput
                .val()
                .trim()
        });
    }

    // A function for creating an author. Calls getAuthors upon completion
    function upsertAuthor(authorData) {
        $.post("/api/authors", authorData)
            .then(getAuthors);
    }

    // Function for creating a new list row for authors
    function createAuthorRow(authorData) {
        console.log(authorData);
        var newTr = $("<tr>");
        newTr.data("author", authorData);
        newTr.append("<td>" + authorData.name + "</td>");
        newTr.append("<td># of posts will display when we learn joins in the next activity!</td>");
        newTr.append("<td><a href='/blog?author_id=" + authorData.id + "'>Go to Posts</a></td>");
        newTr.append("<td><a href='/cms?author_id=" + authorData.id + "'>Create a Post</a></td>");
        newTr.append("<td><a style='cursor:pointer;color:red' class='delete-author'>Delete Author</a></td>");
        return newTr;
    }

    // Function for retrieving authors and getting them ready to be rendered to the page
    function getAuthors() {
        $.get("/api/authors", function (data) {
            var rowsToAdd = [];
            for (var i = 0; i < data.length; i++) {
                rowsToAdd.push(createAuthorRow(data[i]));
            }
            renderAuthorList(rowsToAdd);
            nameInput.val("");
        });
    }

    // A function for rendering the list of authors to the page
    function renderAuthorList(rows) {
        authorList.children().not(":last").remove();
        authorContainer.children(".alert").remove();
        if (rows.length) {
            console.log(rows);
            authorList.prepend(rows);
        }
        else {
            renderEmpty();
        }
    }

    // Function for handling what to render when there are no authors
    function renderEmpty() {
        var alertDiv = $("<div>");
        alertDiv.addClass("alert alert-danger");
        alertDiv.text("You must create an Author before you can create a Post.");
        authorContainer.append(alertDiv);
    }

    // Function for handling what happens when the delete button is pressed
    function handleDeleteButtonPress() {
        var listItemData = $(this).parent("td").parent("tr").data("author");
        var id = listItemData.id;
        $.ajax({
            method: "DELETE",
            url: "/api/authors/" + id
        })
            .then(getAuthors);
    }
});
