document.addEventListener("DOMContentLoaded", function() {
    var bookingDetailsContainer = document.getElementById('booking-details');
    var selectedSlot = sessionStorage.getItem('selectedSlot');

    if (selectedSlot) {
        bookingDetailsContainer.innerHTML = `
            <p>Your slot ${selectedSlot} has been successfully booked.</p>
            <p>Slot Details:</p>
            <ul>
                <li>Slot Number: ${selectedSlot}</li>
                <li>Time: Morning (9am - 12pm)</li> <!-- Assuming morning slots -->
            </ul>
        `;
    } else {
        bookingDetailsContainer.innerHTML = `<p>No slot has been booked.</p>`;
        document.getElementById('pay-now-btn').style.display = 'none'; // Hide pay now button if no slot booked
    }

    document.getElementById('pay-now-btn').addEventListener('click', function() {
        // Implement payment logic here
        alert('Payment Successful!'); // For demonstration purpose
    });
});
