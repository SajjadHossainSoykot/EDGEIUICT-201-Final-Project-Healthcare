$(document).ready(function () {
    // Event listener for opening the modal
    $('.buy-now').on('click', function () {
        var cardBody = $(this).closest('.medicine-details');
        var name = cardBody.find('.medicineName').text();
        var price = cardBody.find('.medicinePrice').text();

        $('#medicineName').val(name);
        $('#medicinePrice').val(price);
        $('#buyModalLabel').text('Buy ' + name);
        $('#quantity').val(1);
        $('#totalPrice').val('$' + price);
    });

    // Event listener for quantity change
    $('#quantity').on('input', function () {
        var price = $('#medicinePrice').val();
        var quantity = $(this).val();
        var total = price * quantity;
        $('#totalPrice').val('$' + total.toFixed(2));
    });

    // Proceed to confirmation
    $('#proceedToConfirmation').on('click', function () {
        var name = $('#medicineName').val();
        var customerName = $('#customerName').val();
        var cardNumber = $('#cardNumber').val();
        var pin = $('#pin').val();
        var quantity = $('#quantity').val();
        var total = $('#totalPrice').val();
        if (!customerName || !cardNumber || !pin || !quantity) {
            alert('Please fill in all the details.');
            return;
        }
        $('#confirmationMessage').html(`
            <p>Name: ${customerName}</p>
            <p>Card Number: ${cardNumber}</p>
            <p>Medicine: ${name}</p>
            <p>Quantity: ${quantity}</p>
            <p>Total Price: ${total}</p>
        `);
        $('#buyModal').modal('hide');
        $('#confirmationModal').modal('show');
    });

    // Confirm purchase
    $('#confirmPurchase').on('click', function () {
        $('#confirmationModal').modal('hide');
        $('#buyForm')[0].reset();
        $('#totalPrice').val('');
        $('#successModal').modal('show');
    });
});
