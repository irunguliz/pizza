//hovering effect 
$(".image1").mouseover(function () {
    $(".pizza1").show();
    $(".image1").css("opacity", "0.5");
});

$(".image1").mouseout(function () {
    $(".pizza1").hide();
    $(".image1").css("opacity", "1");
});

$(".image2").mouseover(function () {
    $(".pizza2").show();
    $(".image2").css("opacity", "0.5");
});

$(".image2").mouseout(function () {
    $(".pizza2").hide();
    $(".image2").css("opacity", "1");
});

$(".image3").mouseover(function () {
    $(".pizza3").show();
    $(".image3").css("opacity", "0.5");
});

$(".image3").mouseout(function () {
    $(".pizza3").hide();
    $(".image3").css("opacity", "1");
});

$(".image4").mouseover(function () {
    $(".pizza4").show();
    $(".image4").css("opacity", "0.5");
});

$(".image4").mouseout(function () {
    $(".pizza4").hide();
    $(".image4").css("opacity", "1");
});

function formValidation() {
    let name = document.forms["form"]["name"].value;
    let email = document.forms["form"]["email"].value;
    let message = document.forms["form"]["message"].value;

    if (name == "" || email == "" || message == "") {
        alert("Fill all fields");
    } else {
        alert(`name:${name}\n email address: ${email}\n We thank you for your message. Your feedback has been received and we will respond to it as soon as we can. \n received by Liz Irungu`);
    }
}

function populate(flavour, size, crust, toppings, price) {
       var flavour = document.getElementById(flavour);
       var size = document.getElementById(size);
       var crust = document.getElementById(crust);
       var toppings = document.getElementById(toppings);
       var price = document.getElementById(price);
       price.innerHTML ="";
       if(flavour == "Barberque-chicken", size == "small", crust =="crispy", toppings="extra-cheese"){
            var Array = ["550"|"550"];
       }
       for(var option in Array){
        var pair = Array[option].split("|");
        var newOption= document.createElement("option");
        newOption.value= pair[0];
        newOption.innerHTML= pair[1];
        price.options.add(newOption);
       }
}