$(document).ready(function () {
    // Define an array of medicine details
    const medicines = [
        {
            name: "Paracetamol 500mg",
            image: "images/Medicine/Paracetamol.jpg",
            usage: "Pain relief",
            price: 10.00
        },
        {
            name: "Omeprazole 20mg",
            image: "images/Medicine/Omeprazole.jpg",
            usage: "Acid reflux, GERD",
            price: 18.00
        },
        {
            name: "Metformin 500mg",
            image: "images/Medicine/metfomin.jpg",
            usage: "Diabetes management",
            price: 20.00
        },
        {
            name: "Atorvastatin 20mg",
            image: "images/Medicine/atorvastatin.jpg",
            usage: "Cholesterol management",
            price: 25.00
        },
        {
            name: "Aspirin 81mg",
            image: "images/Medicine/aspirin.jpg",
            usage: "Blood thinner, pain relief",
            price: 5.00
        },
        {
            name: "Montelukast 10mg",
            image: "images/Medicine/Montelukast.jpg",
            usage: "Asthma, allergic rhinitis",
            price: 22.00
        
        }
        // Add more medicines as needed
    ];

    // Function to generate medicine cards
    function generateMedicineCards() {
        const medicineCardsContainer = document.getElementById('medicineCards');
        medicineCardsContainer.innerHTML = ''; // Clear previous cards

        medicines.forEach(function (medicine) {
            const cardHtml = `
                <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                    <div class="medicine-info d-flex flex-column align-items-center">
                        <div class="pic">
                            <img src="${medicine.image}" class="img-fluid" alt="Medicine Image" />
                        </div>
                        <div class="medicine-details text-center mt-3">
                            <h3 class="medicineName">${medicine.name}</h3>
                            <p class="medicine-usage">Usage: ${medicine.usage}</p>
                            <p class="price-container">
                                Price: $<span class="medicinePrice">${medicine.price.toFixed(2)}</span>
                            </p>
                            <button class="btn btn-primary buy-now" data-toggle="modal" data-target="#buyModal">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            `;
            medicineCardsContainer.innerHTML += cardHtml;
        });
    }

    // Call the function to generate medicine cards
    generateMedicineCards();

    // Event listener for opening the modal
    $('#medicineCards').on('click', '.buy-now', function () {
        var cardBody = $(this).closest('.medicine-details');
        var name = cardBody.find('.medicineName').text();
        var price = cardBody.find('.medicinePrice').text();

        $('#medicineName').val(name);
        $('#medicinePrice').val(price);
        $('#buyModalLabel').text('Buy: ' + name);
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
