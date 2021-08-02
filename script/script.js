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

    $("#proceed").click(function () {
        let flavour = $(".flavour option:selected").val();
        let size = $("#size option:selected").val();
        let crust = $("#crust option:selected").val();
        let topping = $("#toppings option:selected").val();
        let number = $("#number").val();
        console.log(size);

        let price, totalPrice;
        switch (flavour) {
            case flavour = "bbq-chicken":
                switch (size) {
                    case size = "small":
                        price = 600;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "Glutten-free") {
                            totalPrice = (price * number) + 250;
                        } else {
                            totalPrice = (price * number);
                        }
                        break;
                    case size = "medium":
                        price = 800;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "Glutten-free") {
                            totalPrice = (price * number) + 300;
                        } else {
                            totalPrice = (price * number);
                        }
                        break;
                    case size = "large":
                        price = 1000;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 300;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 350;
                        } else if (crust === "Glutten-free") {
                            totalPrice = (price * number) + 400;
                        } else {
                            totalPrice = (price * number);
                        }
                        break;
                    case size = "mega":
                        price = 1000;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 400;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 450;
                        } else if (crust === "Glutten-free") {
                            totalPrice = (price * number) + 500;
                        } else {
                            totalPrice = (price * number);
                        }
                        break;
                }
        }

        switch (flavour) {
            case flavour = "deluxe":
                switch (size) {
                    case size = "small":
                        price = 600;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "Glutten-free") {
                            totalPrice = (price * number) + 250;
                        } else {
                            totalPrice = (price * number);
                        }
                        break;
                    case size = "medium":
                        price = 800;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "Glutten-free") {
                            totalPrice = (price * number) + 300;
                        } else {
                            totalPrice = (price * number);
                        }
                        break;
                    case size = "large":
                        price = 1000;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 300;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 350;
                        } else if (crust === "Glutten-free") {
                            totalPrice = (price * number) + 400;
                        } else {
                            totalPrice = (price * number);
                        }
                        break;
                    case size = "mega":
                        price = 1000;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 400;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 450;
                        } else if (crust === "Glutten-free") {
                            totalPrice = (price * number) + 500;
                        } else {
                            totalPrice = (price * number);
                        }
                        break;
                }
        }

        switch (flavour) {
            case flavour = "hawaiian":
                switch (size) {
                    case size = "small":
                        price = 600;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "Glutten-free") {
                            totalPrice = (price * number) + 250;
                        } else {
                            totalPrice = (price * number);
                        }
                        break;
                    case size = "medium":
                        price = 800;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "Glutten-free") {
                            totalPrice = (price * number) + 300;
                        } else {
                            totalPrice = (price * number);
                        }
                        break;
                    case size = "large":
                        price = 1000;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 300;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 350;
                        } else if (crust === "Glutten-free") {
                            totalPrice = (price * number) + 400;
                        } else {
                            totalPrice = (price * number);
                        }
                        break;
                    case size = "mega":
                        price = 1000;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 400;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 450;
                        } else if (crust === "Glutten-free") {
                            totalPrice = (price * number) + 500;
                        } else {
                            totalPrice = (price * number);
                        }
                        break;
                }
        }

        switch (flavour) {
            case flavour = "pepperonii":
                switch (size) {
                    case size = "small":
                        price = 600;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "Glutten-free") {
                            totalPrice = (price * number) + 250;
                        } else {
                            totalPrice = (price * number);
                        }
                        break;
                    case size = "medium":
                        price = 800;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "Glutten-free") {
                            totalPrice = (price * number) + 300;
                        } else {
                            totalPrice = (price * number);
                        }
                        break;
                    case size = "large":
                        price = 1000;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 300;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 350;
                        } else if (crust === "Glutten-free") {
                            totalPrice = (price * number) + 400;
                        } else {
                            totalPrice = (price * number);
                        }
                        break;
                    case size = "mega":
                        price = 1000;
                        if (crust === "crispy") {
                            totalPrice = (price * number) + 400;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 450;
                        } else if (crust === "Glutten-free") {
                            totalPrice = (price * number) + 500;
                        } else {
                            totalPrice = (price * number);
                        }
                        break;
                }
        }

        switch (topping) {
            case topping = "extra-cheese":
                totalPrice = totalPrice + 50;
                break;
            case topping = "bacon":
                totalPrice = totalPrice + 100;
                break;
            case topping = "pepperoni":
                totalPrice = totalPrice + 150;
                break;
            case topping = "mushroom":
                totalPrice = totalPrice + 200;
                break;
        }

        let pizza = (myPizza, mySize, myPizzaCrust, myTopping, numberOfPizza, totalAmount) => {
            return { myPizza, mySize, myPizzaCrust, myTopping, numberOfPizza, totalAmount };
        };

});