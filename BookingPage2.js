// Sample data for parking locations
const parkingLocations = [
    { city: "Mumbai", location: "Andheri" },
    { city: "Mumbai", location: "Bandra" },
    { city: "Mumbai", location: "Borivali" },
    { city: "Mumbai", location: "Chembur" },
    { city: "Mumbai", location: "Dadar" },
    { city: "Mumbai", location: "Goregaon" },
    { city: "Mumbai", location: "Kandivali" },
    { city: "Mumbai", location: "Malad" },
    { city: "Mumbai", location: "Mulund" },
    { city: "Mumbai", location: "Powai" },
    { city: "Mumbai", location: "Thane" },
    { city: "Mumbai", location: "Vashi" },
    // Add more locations here
  ];
  
  // Function to populate parking locations dropdown
  function populateParkingLocations() {
    const parkingLocationSelect = document.getElementById("parkingLocation");
    parkingLocationSelect.innerHTML = "";
    parkingLocations.forEach(location => {
      const option = document.createElement("option");
      option.value = location.location;
      option.textContent = `${location.city} - ${location.location}`;
      parkingLocationSelect.appendChild(option);
    });
  }
  
  // Function to set the "To" time based on the "From" time
  document.getElementById("fromTime").addEventListener("input", function () {
    const fromTime = document.getElementById("fromTime").value;
    const toTimeInput = document.getElementById("toTime");
    // Set the "To" time 1 hour ahead of the "From" time
    const fromHours = parseInt(fromTime.split(":")[0]);
    const fromMinutes = parseInt(fromTime.split(":")[1]);
    const toHours = (fromHours + 1).toString().padStart(2, "0");
    const toMinutes = fromMinutes.toString().padStart(2, "0");
    const toTime = `${toHours}:${toMinutes}`;
    toTimeInput.value = toTime;
  });
  
  // Function to calculate total cost
  function calculateCost() {
    const hours = document.getElementById("hours").value;
    const totalCost = hours * 200;
    document.getElementById("totalCost").textContent = totalCost;
  }
  
  // Event listener for hours input
  document.getElementById("hours").addEventListener("input", calculateCost);
  
  // Populate parking locations dropdown initially
  populateParkingLocations();
  