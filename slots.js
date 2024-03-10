document.addEventListener("DOMContentLoaded", function() {
    var morningSlotsContainer = document.getElementById('morning-slots-container');
    var afternoonSlotsContainer = document.getElementById('afternoon-slots-container');
    var eveningSlotsContainer = document.getElementById('evening-slots-container');
    var nightSlotsContainer = document.getElementById('night-slots-container');

    // Simulate available and booked slots (you can fetch this data from a server)
    var availableSlots = [1, 2, 3, 4, 5]; // Sample available slots
    var bookedSlots = [6, 7]; // Sample booked slots

    // Generate slots dynamically for morning
    generateSlots(morningSlotsContainer, availableSlots, bookedSlots);

    // Generate slots dynamically for afternoon
    generateSlots(afternoonSlotsContainer, availableSlots, bookedSlots);

    // Generate slots dynamically for evening
    generateSlots(eveningSlotsContainer, availableSlots, bookedSlots);

    // Generate slots dynamically for night
    generateSlots(nightSlotsContainer, availableSlots, bookedSlots);
});

function generateSlots(container, availableSlots, bookedSlots) {
    for (var i = 1; i <= 10; i++) {
        var slotElement = document.createElement('div');
        slotElement.classList.add('slot');

        // Check if the slot is available or booked
        if (availableSlots.includes(i)) {
            slotElement.setAttribute('data-slot', i);
            slotElement.addEventListener('click', function() {
                var selectedSlot = document.querySelector('.slot.selected');
                if (selectedSlot) {
                    selectedSlot.classList.remove('selected');
                }
                this.classList.add('selected');
                document.querySelectorAll('.book-button').forEach(function(btn) {
                    btn.style.display = 'none';
                });
                this.querySelector('.book-button').style.display = 'block';
            });

            // Add book button
            var bookButton = document.createElement('button');
            bookButton.classList.add('book-button');
            bookButton.innerText = 'Book Slot';
            bookButton.addEventListener('click', function(event) {
                event.stopPropagation(); // Prevent slot click event from firing
                var slotNumber = this.parentElement.getAttribute('data-slot');
                alert('Slot ' + slotNumber + ' booked!');
                // Store the booked slot value in a variable accessible by other pages
                sessionStorage.setItem('selectedSlot', slotNumber);
                // Update slot color to indicate booking
                this.parentElement.classList.remove('selected');
                this.parentElement.classList.add('booked');
                this.style.display = 'none'; // Hide book button after booking
            });
            slotElement.appendChild(bookButton);
        } else if (bookedSlots.includes(i)) {
            slotElement.classList.add('booked');
        }

        container.appendChild(slotElement);
    }
}
