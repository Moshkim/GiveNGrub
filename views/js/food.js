$(document).ready(function(){


    $(document).on("click", "#add", handleNewFoodSubmit)

    let foodLists = []
    let universialID


    function handleNewFoodSubmit(event) {
        event.preventDefault()


        let fresh = $("#fresh").val()
        let frozen = $("#frozen").val()
        let packaged = $("#packaged").val()
        let canned = $("#canned").val()
        let description = $("#description").val().trim()
        let status = false
        //This is dummy data for testing!!!
        let remaining = 24
        let id = grabId()

        /*let id = grabId()
        console.log("\n\n\n")
        console.log(grabId())
        console.log("\n\n\n")*/



        let foodPackage = {
            fresh: fresh,
            frozen: frozen,
            packaged: packaged,
            canned: canned,
            description: description,
            status: status,
            remaining: remaining
        }

        console.log(foodPackage)
        
        $.post('/api/fp/food/'+id, foodPackage, function(data, status){
            location.reload()
        })

    }
    function grabId() {
        let identityObject = localStorage.getItem('identity')
        identityObject = JSON.parse(identityObject)

        let id = identityObject.id
        let entity = identityObject.entity
        universialID = id
        return id
    }

    function getFoodProviderFoodList(){

        let identityObject = localStorage.getItem('identity')
        identityObject = JSON.parse(identityObject)

        let id = identityObject.id
        let entity = identityObject.entity

        getTheData(grabId())
    }


    function getTheData(id) {
        $.get('/api/fp/food/'+id, function(data, status){
        
            if(data){
                console.log(data)
                for(let i = 0; i < data.length; i++){
                    let status

                    if(data[i].status === false){
                        status = "Give"
                    } else {
                        status = "Grabbed"
                    }

                    $("#submitNewList").append($("<tr>")
                        .append($("<td>").text(status))
                        .append($("<td>").text(data[i].createdAt))
                        .append($("<td>").text(data[i].fresh))
                        .append($("<td>").text(data[i].frozen))
                        .append($("<td>").text(data[i].packaged))
                        .append($("<td>").text(data[i].canned))
                        .append($("<td>").text(data[i].description)))
                    
                }
            } else {
                console.log("You do not have anything listed!")
            }
        })

    }

    getFoodProviderFoodList()

    
})