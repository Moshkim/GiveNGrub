$(document).ready(function(){


    $(document).on('click', '.checkboxes', function(event){
        console.log('\n\n')

        console.log(this)
        
        console.log($(this).attr("org_name"))

        console.log(this.address)
        console.log('\n\n')

        let id = this.id
        
        /*
        let rate = {
            rate: rating + 1
        }
        $.ajax({
            method: "PUT",
            url: "/api/np/update/foodlist/" + id,
            data: rate
        }).then(function(result){
            console.log(result)
        })
        */

        if($("#"+this.id).is(":checked")){
            console.log("hi!")


            $('#grabLists').append($('<div>')
                .addClass("card blue-grey darken-1")
                .append($('<div>')
                    .addClass("card-content white-text")
                    .append($('<span>')
                        .addClass("card-title")
                            .text($(this).attr("org_name")))
                    .append($('<p>')
                        .text(`Address: ${$(this).attr("address")}`))
                    .append($('<p>')
                        .text(`Description: ${$(this).attr("description")}`)))
                .append($('<div>')
                    .addClass("card-action")
                    .append($('<button>')
                        .addClass("btn waves-effect waves-light")
                        .attr("type", "submit")
                        .attr("id", this.id)
                        .text("Submit"))))

            $("."+this.id).empty()

            
        }
        
        
    })

    function grabOrganizationInfo() {
        let identityObject = localStorage.getItem('identity')
        identityObject = JSON.parse(identityObject)

        $.get('/api/np/info/'+identityObject.id, function(data, status){
            if(data){
                $('#name').text(data.company_name)
            }
        })
    }

    function returnId() {
        let identityObject = localStorage.getItem('identity')
        identityObject = JSON.parse(identityObject)
        return identityObject.id
    }

    function getFoodListNearYou() {
        let identityObject = localStorage.getItem('identity')
        identityObject = JSON.parse(identityObject)

        //console.log(identityObject.state)
        //console.log(identityObject.city)

        let filter = {
            state: identityObject.state,
            city: identityObject.city
        }

        $.get('/api/np/foodlist', filter, function(data, status){

            if(data){
                //console.log(data)

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
                                .text(`<Food Donated>`))
                            .append($('<p>')
                                .text(`Frozen: ${data[i].frozen}, Fresh: ${data[i].fresh}, Canned: ${data[i].canned}, Packaged: ${data[i].packaged}`))
                            .append($('<p>')
                                .text(`Description: ${data[i].description}`))
                            .append($('<p>')
                                .text(`Address: ${data[i].Organization.address}`))
                            .append($('<p>')
                                .text(`Contacts: ${data[i].Organization.contact}`))
                            .append($('<div>')
                                .append($('<input>').attr('type', "checkbox").addClass('checkboxes')
                                    .attr("id", data[i].id)
                                    .attr("organizationId", data[i].OrganizationId)
                                    .attr("org_name", data[i].Organization.company_name)
                                    .attr("address", data[i].Organization.address)
                                    .attr("description", data[i].description))
                                .append($('<label>').attr('for', data[i].id).text("Grab")))).addClass(""+data[i].id))
                                
                            
                }
            }
        })

    }

    grabOrganizationInfo()
    getFoodListNearYou()

})