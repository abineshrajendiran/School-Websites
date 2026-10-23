function calculateTuition() {
            var grade = Number(document.getElementById("calcGrade").value);
            var transport = Number(document.getElementById("transport").value);
            var meals = Number(document.getElementById("meals").value);
            var total = grade + transport + meals;
            document.getElementById("totalFee").textContent = "₹" + total.toLocaleString("en-IN");
        }

        // function openPortalModal() {
        //     document.getElementById("modalTitle").textContent = "Portal Login";
        //     document.getElementById("modalText").textContent = "Student and parent portal access details can be provided by the school office.";
        //     document.getElementById("siteModal").style.display = "flex";
        // }

        // function openTourModal() {
        //     document.getElementById("modalTitle").textContent = "Virtual Campus Tour";
        //     document.getElementById("modalText").textContent = "Contact the admissions team to arrange a campus tour and learn more about our facilities.";
        //     document.getElementById("siteModal").style.display = "flex";
        // }

        function closeModal() {
            document.getElementById("siteModal").style.display = "none";
        }

        function sendContactMessage(event) {
            event.preventDefault();

            var name = document.getElementById("visitorName").value.trim();
            var email = document.getElementById("visitorEmail").value.trim();
            var message = document.getElementById("visitorMessage").value.trim();

            // WhatsApp number in international format: India country code + number.
            var phoneNumber = "919344040239";

            var whatsappMessage =
                "Hello Abinesh Rajendiran!\n\n" +
                "Name: " + name + "\n" +
                "Email: " + email + "\n" +
                "Message: " + message;

            var whatsappURL =
                "https://wa.me/" + phoneNumber +
                "?text=" + encodeURIComponent(whatsappMessage);

            // Open WhatsApp with the message pre-filled. The visitor must press Send.
            window.open(whatsappURL, "_blank", "noopener,noreferrer");
        }

        window.onclick = function(event) {
            var modal = document.getElementById("siteModal");
            if (event.target === modal) {
                closeModal();
            }
        };
        calculateTuition();


        // Higher Education
        var classSelect = document.getElementById("class-applied");
var higherBox = document.getElementById("higherBox");
var degreeSelect = document.getElementById("degree");

function updateHigherBox() {
  if (classSelect.value === "Higher Education") {
    higherBox.style.display = "";
    degreeSelect.required = true;
  } else {
    higherBox.style.display = "none";
    degreeSelect.required = false;
    degreeSelect.value = "";
  }
}

classSelect.addEventListener("change", updateHigherBox);