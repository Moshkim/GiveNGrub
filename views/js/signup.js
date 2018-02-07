

//let apiKey = require('../../config/keys')
let geocoder

$(document).ready(function(){
    
    $(document).on("click", "#submit", handleSignUpSubmit)
    
    function handleSignUpSubmit(event) {
        event.preventDefault();

        let address = $('#address').val().trim()
        let city = $('#city').val().trim()
        let state = $('#state').val().trim()
        let zip_code = $('#zip_code').val().trim()

        address = address +
        ", " +
        city||"" +
        ", " +
        state||"" +
        ", " +
        zip_code||"";

        

        let newUser = {
            username: $('#username').val().trim(),
            email: $('#email').val().trim(),
            password: $('#password').val().trim(),
            organization: $('#organization').val().trim(),
            maincontact: $('#maincontact').val().trim()
        }
        codeAddress(address, newUser)

        
        

    }

    function codeAddress(address, user){

        geocoder = new google.maps.Geocoder()

        if(geocoder){
            geocoder.geocode(
                {
                    'address': address
                }, 
            function(result, status){
                if(status === google.maps.GeocoderStatus.OK){
                    if(result){

                        user.formattedAddress = result[0].formatted_address
                        user.latitude = result[0].geometry.location.lat()
                        user.longitude = result[0].geometry.location.lng()
                        user.place_id = result[0].place_id
                        
                        console.log(user)

                        createAccount(user)
                        //return addressComponent
                    }
                } else {
                    let error = new Error("The address you have provided is not sufficient! Try it again.")
                    throw error
                    location.reload()
                }
            })
        }
        
    }


    function createAccount(newUser){

    }
    /*

    var detailObject = {
        userKey: userKey,
        whichBlog: whichBlogRep
    }

    var myJSONObject = JSON.stringify(detailObject)
    localStorage.setItem('blog', myJSONObject)
    console.log(myJSONObject)

    document.location.href = "detail.html"


    var specificBlogObj = localStorage.getItem('blog')
    specificBlogObj = JSON.parse(specificBlogObj)
*/
    function getOrganization(user){
        $.get('/api/id', user, function(data, status){
        
            if(data){
                let identityObject = {
                    id: data.id,
                    entity: data.entity

                }
                let myJSONObject = JSON.stringify(identityObject)
                localStorage.setItem('identity', myJSONObject)

                
                if(data.entity === "FP"){
                    window.location.href = "../foodprovider.html"
                } else if (data.entity === "NP"){
                    window.location.href = "../nonprofit.html"
                }
            }
        })
    }

    
})