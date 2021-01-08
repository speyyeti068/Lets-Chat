function  addUser(){
    var userName = document.getElementById("userName").value;

    var password = document.getElementById("password").value;

    var confirmPassword = document.getElementById("confirmPassword").value;

    var removeSpaces = userName.replaceAll(" ", "");

    var removeSpaces = password.replaceAll(" ", "");

    var removeSpaces = confirmPassword.replaceAll(" ", "");

    console.log(userName);

    console.log(password);

    console.log(confirmPassword);

    if(userName == null||userName.length == 0||removeSpaces.length==0){
        window.alert("Please Enter a Username");
    } else if (password == null||password.length == 0||removeSpaces.length==0){
        window.alert("Please Enter a Password");
    } else if (confirmPassword == null||confirmPassword.length == 0||removeSpaces.length==0){
        window.alert("Please Confirm Your Password");
    } else if (confirmPassword != password){
        window.alert("Confirmation of Password does not Match Original Password");
    } else if (userName != null && password != null && confirmPassword != null && password == confirmPassword){
        window.location = ("kwitter_room.html");
        localStorage.setItem("userName",userName);
        localStorage.setItem("password",password);
        localStorage.setItem("confirmPassword",confirmPassword);

        console.log(userName);
        console.log(password);
        console.log(confirmPassword);

        window.location = "kwitter_room.html"
    };
};