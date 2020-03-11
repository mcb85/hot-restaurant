

$("#submit").on("click", function (event) {
    event.preventDefault();
    var newReservation = {
        customerName = $("#customerName-input").val().trim(),
        phoneNumber = $("#phoneNumber-input").val().trim(),
        email = $("#Email-input").val().trim(),
        uniqueId = $("#uniqueId-input").val().trim(),
    }
})
