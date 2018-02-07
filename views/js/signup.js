

//let apiKey = require('../../config/keys')
let geocoder

$(document).ready(function(){
    
    $(document).on("click", "#submit", handleSignUpSubmit)
    $('select').material_select();
    
    function handleSignUpSubmit(event) {
        event.preventDefault();
        
        //Address part
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

        //Organization characteristic part
        let entity = $('#entity').val()
        let capacity = $('#capacity').val()
        
        if(entity === 1){
            entity = "FP"
        } else {
            entity = "NP"
        }

        if(capacity === 1){
            capacity = 25
        } else if (capacity === 2){
            capacity = 50
        } else {
            capacity = 100
        }
        
        let newUser = {
            username: $('#username').val().trim(),
            email: $('#email').val().trim(),
            password: $('#password').val().trim(),
            organization: $('#organization').val().trim(),
            maincontact: $('#maincontact').val().trim(),
            entity: entity,
            capacity: capacity
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
            
            $.post('/api/register', newUser, function(result, status){
                if(result){
                    let id = result.id

                    let identityObject = {
                        id: id,
                        entity: newUser.entity
                    }

                    let myJSONObject = JSON.stringify(identityObject)
                    localStorage.setItem('identity', myJSONObject)
                    
                    console.log(identityObject)
                    
                    if(identityObject.entity === "FP"){
                        console.log("Everything was succeed until this point!!!")
                        window.location.href = "../foodprovider.html"
                    } else {
                        window.location.href = "../nonprofit.html"
                    }
                    
                }
                
            })
            
        }
        
    })