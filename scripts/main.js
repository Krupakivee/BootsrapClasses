$(document).ready(function () {
    var counter = 0;
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


    $("#contactfrom").validate({
        rules: {
            'name': {
                required: true,
                minlength: 2
            },
            'email': {
                required: true,
                email: true,
            },
            'phone': {
                required: true,
            },
            'message': {
                required: true,
                minlength: 5
            },

        },
        messages: {
            'name': "The name is Required",
            'email': "Please enter Email",
            'Phone': "Please enter a Password",
            'message': "The message is required",
        }
    });
    $(".btn-danger").click(function () {
        counter++;
        $("#counter").text(counter);
    });
    var itemCount = 0;
    var priceTotal = 0;
    // Add Item to Cart
    $('.add').click(function () {
        itemCount++;

        $('#itemCount').text(itemCount).css('display', 'block');
        $(this).siblings().clone().appendTo('#cartItems').append('<button class="removeItem">Remove Item</button>');

        // Calculate Total Price
        var price = parseInt($(this).siblings().find('.price').text());
        priceTotal += price;
        $('#cartTotal').text("Total: $" + priceTotal);
    });



    // Hide and Show Cart Items
    $('.openCloseCart').click(function () {
        $('#shoppingCart').toggle();
    });


    // Empty Cart
    $('#emptyCart').click(function () {
        itemCount = 0;
        priceTotal = 0;

        $('#itemCount').css('display', 'none');
        $('#cartItems').text('');
        $('#cartTotal').text("Total: $" + priceTotal);
    });



    // Remove Item From Cart
    $('#shoppingCart').on('click', '.removeItem', function () {
        $(this).parent().remove();
        itemCount--;
        $('#itemCount').text(itemCount);

        // Remove Cost of Deleted Item from Total Price
        var price = parseInt($(this).siblings().find('.price').text());
        priceTotal -= price;
        $('#cartTotal').text("Total: $" + priceTotal);

        if (itemCount == 0) {
            $('#itemCount').css('display', 'none');
        }
    });
});