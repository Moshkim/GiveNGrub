$(document).ready(function(){
    
    $(document).on("click", "#submit", handleSignInSubmit)
    
    function handleSignInSubmit(event) {
        event.preventDefault();

        let email = $("#email").val().trim()
        let password = $("#password").val().trim()

        let user = {
            email: email,
            password: password
        }

        getOrganization(user)

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