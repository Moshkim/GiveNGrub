$(document).ready(function(){


    let foodLists = []

    function getFoodProviderList(){

        let identityObject = localStorage.getItem('identity')
        identityObject = JSON.parse(identityObject)

        let id = identityObject.id
        let entity = identityObject.entity


        $.get('/api/fp/food/'+id, function(data, status){
        
            if(data){
                for(let i = 0; i < data.length; i++){
                    console.log(data[i])
                }
            } else {
                console.log("You do not have anything listed!")
            }
        })


    }


    getFoodProviderList()

    
})