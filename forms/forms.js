function formsListeners(){

    $("#submit").click(function (e){

        e.preventDefault();

        let firstName = $("#fName").val();

        let lastName = $("#lName").val();

        let email = $("#email").val();

        let country = $("#country").val();

        let color = $("#color").val();

        let animal = $("#animal").val();

        let food = $("#food").val();

        let nickname = $("#nickname").val();

        let song = $("#song").val();

        let job = $("#job").val();

        let password = $("#password").val();
        

        console.log("Inputs " + firstName + ' ' + lastName + ' ' + email + ' ' + country + ' ' + color + ' ' + animal + ' ' + food + ' ' + nickname + ' ' + song + ' ' + job + ' ' + password);

    });

 

    $("#edit").click(function (e){

        e.preventDefault();

 

        let userObj = {

            fName: "Agustin",

            lName: "Gutierrez",

            email: "aggutie@iu.edu",

        };

       

        $("#fName").val(userObj.fName);

        $("#lName").val(userObj.lName);

        $("#email").val(userObj.email);

    });

}

 

$(document).ready(function (){

    formsListeners();

});