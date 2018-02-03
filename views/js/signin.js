$(document).ready(function(){
    
    $(document).on("click", "#submit", handleSignInSubmit)
    
    function handleSignInSubmit() {

        let email = $("#email").val()
        console.log(email)
        let password = $("#password").val()
        console.log(password)

        let user = {
            username: email,
            password: password
        }

        console.log(user)


        $.ajax({
            method: "GET",
            url: "/api/id",
            data: user
        }).then(function(data) {

            console.log(data)

            //window.location.href = "/blog";
        });
    }
    
})