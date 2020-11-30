$(document).ready(function () {

    var quantitiy = 0;
    $('.quantity-right-plus').click(function (e) {

        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity').val());

        // If is not undefined

        $('#quantity').val(quantity + 1);


        // Increment

    });

    $('.quantity-left-minus').click(function (e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity').val());

        // If is not undefined

        // Increment
        if (quantity > 0) {
            $('#quantity').val(quantity - 1);
        }
    });

    $("#btncontact").click(function () {
        var phoneNumber = $("#cnumber").val();
        var name = $("#name").val();
        var phone = /^\d{10}$/;
        //   var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
        if (name.length < 3 || name.length > 20) {
            $('#name_error').html("length between 2-20");
            $("#name").css("border", "3px solid red");
        }
        else if (!phoneNumber.match(phone)) {
            $('#phone_error').html("* Enter valid 10 digit number like this 9876543210.");
            $("#cnumber").css("border", "3px solid red");
        }
        else {
            alert("thank you for submitting");
        }
    });
});