// JavaScript for Appointment Form Validation and Modal
document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    window.addEventListener('load', function () {
        var forms = document.getElementsByClassName('needs-validation');
        Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    event.preventDefault();
                    $('#confirmationModal').modal('show');
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
});

// Handle confirmation and clearing form data
$(document).ready(function () {
    $('#confirmAppointment').click(function () {
        $('#confirmationModal').modal('hide');
        $('#finalConfirmationModal').modal('show');

        // Clear the form data
        $('#appointment-form')[0].reset();
        $('.needs-validation').removeClass('was-validated');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const select = document.getElementById('doctor');
    const options = select.querySelectorAll('option');
    options.forEach((option, index) => {
      if (index !== 0) {
        option.textContent = `(${index}) ${option.textContent}`;
      }
    });
  });
