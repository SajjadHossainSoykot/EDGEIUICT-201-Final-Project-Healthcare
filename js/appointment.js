// JavaScript for Doctors Selection
document.addEventListener('DOMContentLoaded', function() {
    const doctors = {
        dr1: {
            name: "Dr. Sajjad Hossain Soykot",
            specialty: "Neurosurgeon",
            image: "images/doctors/doctors-1.jpg",
            details: "MBBS (IU), BCS, FCPS, MD (USA)<br>Professor, IU Medical College."
        },
        dr2: {
            name: "Dr. Nusrat Jahan Shithy",
            specialty: "Cardiologist",
            image: "images/doctors/doctors-2.jpg",
            details: "MBBS (IU), BCS, FCPS<br>Professor, IU Medical College."
        },
        dr3: {
            name: "Dr. Tuhassinul Arnob",
            specialty: "Orthopedic Surgeon",
            image: "images/doctors/doctors-3.jpg",
            details: "MBBS (IU), BCS, FCPS<br>Professor, IU Medical College."
        },
        dr4: {
            name: "Dr. Halima Akter",
            specialty: "Gynecologist",
            image: "images/doctors/doctors-4.jpg",
            details: "MBBS (IU), BCS, FCPS<br>Associate Professor, IU Medical College."
        },
        dr5: {
            name: "Dr. Zubaer Ahmed",
            specialty: "Dermatologist",
            image: "images/doctors/doctors-5.jpg",
            details: "MBBS (IU), BCS, FCPS<br>Associate Professor, IU Medical College."
        },
        dr6: {
            name: "Dr. Rony Islam",
            specialty: "Pediatrician",
            image: "images/doctors/doctors-6.jpg",
            details: "MBBS (IU), BCS, FCPS<br>Associate Professor, IU Medical College."
        }
    };

    const teamContainer = document.getElementById('team-container');
    const select = document.getElementById('doctor');
    
    // Populate the select options and create doctor cards dynamically
    Object.entries(doctors).forEach(([id, doctor], index) => {
        // Create select option
        const option = document.createElement('option');
        option.value = id;
        option.textContent = `${index + 1}) ${doctor.name}`;
        select.appendChild(option);
        
        // Create doctor card
        const doctorCard = document.createElement('div');
        doctorCard.className = 'col-lg-6';
        doctorCard.setAttribute('data-aos', 'fade-up');
        doctorCard.setAttribute('data-aos-delay', '100');
        doctorCard.innerHTML = `
          <div class="team-member d-flex align-items-start">
            <div class="pic">
              <img src="${doctor.image}" class="img-fluid" alt="" />
            </div>
            <div class="member-info">
              <h4>${doctor.name}</h4>
              <h5>${doctor.specialty}</h5>
              <p>${doctor.details}</p>
              <a class="btn btn-primary appointment-btn" href="#appointment" data-doctor-id="${id}">Book Appointment</a>
            </div>
          </div>
        `;
        teamContainer.appendChild(doctorCard);
    });

    // Handle the click event for the appointment buttons
    document.querySelectorAll('.appointment-btn').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const doctorId = this.getAttribute('data-doctor-id');
            if (doctorId && doctors.hasOwnProperty(doctorId)) {
                select.value = doctorId;
            } else {
                select.value = '';
            }
            document.querySelector('#appointment').scrollIntoView({ behavior: 'smooth' });
        });
    });
});

// JavaScript for Appointment Form Validation and Modal
document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  window.addEventListener(
    "load",
    function () {
      var forms = document.getElementsByClassName("needs-validation");
      Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            } else {
              event.preventDefault();
              $("#confirmationModal").modal("show");
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
});

// Handle confirmation and clearing form data
$(document).ready(function () {
  $("#confirmAppointment").click(function () {
    $("#confirmationModal").modal("hide");
    $("#finalConfirmationModal").modal("show");

    // Clear the form data
    $("#appointment-form")[0].reset();
    $(".needs-validation").removeClass("was-validated");
  });
});
