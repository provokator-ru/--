$(document).ready(function() {
    $("#submit").click(function() {
        var name=$("#name").val();
        var surname=$("#surname").val();
        var password=$("#password").val();
        var password_2=$("#password_2").val();
        var Email=$("#Email").val();

        if(name==" "){
            alert("Заполните поле Имя");
        }
    });
});