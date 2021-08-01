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
    let order = document.forms["form"]["order"].value;

    if (name == "" || email == "" || order == "") {
        alert("Fill all fields");
    } else {
        alert(`name:${name}\n email address: ${email}\n We thank you for your order. Your order has been received and will be delivered as soon as it is ready. Thank you for dining with us. \n received by Liz Irungu`);
    }
}