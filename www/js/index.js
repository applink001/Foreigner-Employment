// This is a JavaScript file

var createUser = function(){
        var usernamesignup = document.getElementById("usernamesignup").value;
        var passwordsignup = document.getElementById("passwordsignup").value;
        var phonenumbersignup = document.getElementById("phonenumbersignup").value;
        var langsignup = document.getElementById("langsignup").value;
        
        $.ajax({
                type: "POST",
                url: my.API_PROTOCOL + my.API_SERVER + my.API_USERS_CREATE,                    
                dataType: "json",
                data: {'name':usernamesignup,
                        'password':passwordsignup,
                        'tel':phonenumbersignup,
                        'language':langsignup
                        },
                success: function (result) {
                    console.log(result); 
                    location.href="#toregistercomplete";
                },
                error: function () {
                    console.log("Error");
                }
            });
}

var switchUser = function(){
        var password = document.getElementById("password").value;
        var phonenumber = document.getElementById("phonenumber").value;

        $.ajax({
                type: "POST",
                url: my.API_PROTOCOL + my.API_SERVER + my.API_USERS_SWITCHUSER,                    
                dataType: "json",
                data: {'tel':phonenumber,
                        'password':password,
                        'unique':1
                        },
                success: function (result) {
                    console.log(result);
                    location.href="home.html";
                },
                error: function () {
                    console.log("Error");
                }
            });
}