$(document).ready(function(){


    function getFoodListNearYou() {

        let identityObject = localStorage.getItem('identity')
        identityObject = JSON.parse(identityObject)

        console.log(identityObject.state)
        console.log(identityObject.city)

        let filter = {
            state: identityObject.state,
            city: identityObject.city
        }

        $.get('/api/np/foodlist', filter, function(data, status){

            if(data){
                console.log(data)

                for(let i = 0; i < data.length; i++){
                    $('#data').append($('<li>')
                    .append($('<div>')
                        .addClass("collapsible-header")
                        .text(data[i].Organization.company_name))
                        .append($('<div>')
                            .addClass("collapsible-body")
                            .append($('<p>')
                                .text(`Donor Ratings: ${data[i].Organization.rating}`))
                            .append($('<p>')
                                .text(`Food Donated : \n Frozen: ${data[i].frozen}, Fresh: ${data[i].fresh}, Canned: ${data[i].canned}, Packaged: ${data[i].packaged}`))))
                }
            }
        })

    }





    getFoodListNearYou()




    function getFoodProviderFoodList(){
        let identityObject = localStorage.getItem('identity')
        identityObject = JSON.parse(identityObject)
        getTheData(identityObject.id)
    }


    function getTheData(id) {
    
        $.get('/api/fp/food/'+ id, function(data, status){
        
            if(data){
                //console.log(data)
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

    //getFoodProviderFoodList()
})